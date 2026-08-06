import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  // const delay = (d) => {
  //   return new Promise((resolve, rej) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, d * 1000);
  //   });
  // };
  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:5000/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    let res = await r.text()
    console.log(data, res)
  }
  return (
    <>
      {isSubmitting && <div>Loading </div>}
      <div className="container">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("username", {
              required: true,
              minLength: { value: 4, message: "min length would be 3" },
              maxLength: { value: 8, message: "max length would be 8" },
            })}
            type="text"
            placeholder="enter ur name"
          />
          {errors.username && (
            <div className="red">{errors.username.message}</div>
          )}
          <input
            {...register("password", {
              required: true,
              minLength: { value: 4, message: "min length would be 3" },
              maxLength: { value: 8, message: "max password length would be 8" },
              
            })}
            type="password"
            placeholder="enter password"
          />
               {errors.password && (
            <div className="red">{errors.password.message}</div>
          )}
          <br />
          <input disabled={isSubmitting} type="submit" value="Submit" />
        </form>
      </div>
    </>
  );
}

export default App;
