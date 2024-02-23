import React from "react";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

function Form3() {
  const form = useForm();
  const { register, control } = form;

  //  const { name, ref, onChange, onBlur } = register("username");
  renderCount++;
  return (
    <div>
      <h1>Form 3 ({renderCount / 2}) (Re-rendering)</h1>

      <form>
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

export default Form3;
