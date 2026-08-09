"use client";
import { useSearchParams } from "next/navigation";

export default function Dashboard() {
  const searchParams = useSearchParams();
  const username = searchParams.get("username");

  return (
    <div>
      <h1>Welcome, {username}!</h1>
    </div>
  );
}
