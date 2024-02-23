import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

function Form5() {
  const form = useForm();
  const { register, control, handleSubmit } = form;

  const onSubmit = (data) => {
    console.log("Form Submitted - ", data);
  };

  renderCount++;
  return (
    <div>
      <h1>Form 5 ({renderCount / 2}) (Form Validations)</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          {...register("username", {
            required: {
              value: true,
              message: "username is required",
            },
          })}
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          {...register("email", {
            pattern: {
              value: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/,
              message: "invalid email address",
            },
          })}
        />

        <label htmlFor="channel">Channel</label>
        <input
          type="text"
          id="channel"
          name="channel"
          {...register("channel")}
        />

        <button>Submit</button>
      </form>
      <DevTool control={control}></DevTool>
    </div>
  );
}

export default Form5;
