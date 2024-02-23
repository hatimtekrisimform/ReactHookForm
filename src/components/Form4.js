import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

function Form4() {
  const form = useForm();
  const { register, control, handleSubmit } = form;



  const onSubmit = (data)=>{
    console.log("Form Submitted - ",data)
  }



  renderCount++;
  return (
    <div>
      <h1>Form 4 ({renderCount / 2}) (Form Submission)</h1>

      <form onSubmit={handleSubmit(onSubmit)} >
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          {...register("username")}
        />

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" {...register("email")} />

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

export default Form4;
