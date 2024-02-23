import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

function Form8() {
  const form = useForm({
    defaultValues:{
      username:"hatim",
      email:"",
      channel:""
    }
    // defaultValues: async () => {
    //   // API Call
    //   return {
    //     username: "hatim from api",
    //     email: "",
    //     channel: "",
    //   };
    // },
  });
  const { register, control, handleSubmit, formState } = form;

  const { errors } = formState;

  const onSubmit = (data) => {
    console.log("Form Submitted - ", data);
  };

  renderCount++;
  return (
    <div>
      <h1>Form 8 ({renderCount / 2}) (default values)</h1>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="form-control">
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
          <p className="error">{errors.username?.message}</p>
        </div>
        <div className="form-control">
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
              validate: (fieldValue) => {
                return (
                  fieldValue !== "admin@example.com" ||
                  "Enter different email address"
                );
              },
              // validate: {
              //   notAdmin: (fieldValue) => {
              //     return (
              //       fieldValue !== "admin@example.com" ||
              //       "Enter different email address"
              //     );
              //   },
              //   notBlacklisted: (fieldValue) => {
              //     return (
              //       fieldValue !== "black@example.com" ||
              //       "email address is blacklisted"
              //     );
              //   },
              // },
            })}
          />
          <p className="error">{errors.email?.message}</p>
        </div>

        <div className="form-control">
          <label htmlFor="channel">Channel</label>
          <input
            type="text"
            id="channel"
            name="channel"
            {...register("channel")}
          />
          <p className="error">{errors.channel?.message}</p>
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control}></DevTool>
    </div>
  );
}

export default Form8;
