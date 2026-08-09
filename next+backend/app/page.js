"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // ✅ Call internal Next.js API route instead of localhost:5000
    let r = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    let res = await r.json();

    if (res.success) {
       router.push(`/dashboard?username=${res.username}`); // redirect only if signup/login successful
    } else {
      alert(res.message || "Invalid credentials");
    }
  };

  return (
    <>
     
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="username">
            <input
              {...register("username", {
                required: true,
                minLength: { value: 4, message: "min length is 4" },
                maxLength: { value: 8, message: "max length is 8" },
              })}
              type="text"
              placeholder="Enter username"
            />
            {errors.username && <div className="red">{errors.username.message}</div>}
          </div>

          <div className="pass">
            <input
              {...register("password", {
                required: true,
                minLength: { value: 4, message: "min length is 4" },
                maxLength: { value: 8, message: "max length is 8" },
              })}
              type="password"
              placeholder="Enter password"
            />
            {errors.password && <div className="red">{errors.password.message}</div>}
          </div>

          <input disabled={isSubmitting} type="submit" value="Submit" />
           {isSubmitting && <div className="green">Loading...</div>}
        </form>
        
      </div>
       
    </>
  );
}

export default App;
