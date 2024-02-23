import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

function Form10() {
  const form = useForm({
    defaultValues: {
      username: "hatim",
      email: "",
      channel: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers:["",""]
    },
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
      <h1>Form 10 ({renderCount / 2}) (Arrays)</h1>

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
        <div className="form-control">
          <label htmlFor="twitter">Twitter</label>
          <input
            type="text"
            id="twitter"
            name="twitter"
            {...register("social.twitter")}
          />
         
        </div>
        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <input
            type="text"
            id="facebook"
            name="facebook"
            {...register("social.facebook")}
          />
       
        </div>

        <div className="form-control">
          <label htmlFor="primary-phone">Phone 1</label>
          <input
            type="text"
            id="primary-phone"
           
            {...register("phoneNumbers.0")}
          />
       
        </div>
        <div className="form-control">
          <label htmlFor="secondary-phone">Phone 2</label>
          <input
            type="text"
            id="secondary-phone"
           
            {...register("phoneNumbers.1")}
          />
       
        </div>
        <button>Submit</button>
      </form>
      <DevTool control={control}></DevTool>
    </div>
  );
}

export default Form10;
