import mongoose from "mongoose";
import User from "@/app/models/User";


const MONGODB_URI = "mongodb://localhost:27017/logins";

async function connectDb() {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  await mongoose.connect(MONGODB_URI);
}

export async function POST(req) {
  const { username, password } = await req.json();

  try {
    await connectDb();

    const newUser = new User({ username, password });
    await newUser.save();

    return Response.json({
  username: newUser.username,
  success: true,
  message: "User saved to MongoDB!"
});

  } catch (error) {
    return Response.json(
      { success: false, message: "Error saving user" },
      { status: 500 }
    );
  }
}
