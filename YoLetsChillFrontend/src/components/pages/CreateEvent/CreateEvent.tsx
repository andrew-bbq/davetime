import React from "react";
import { useForm } from "react-hook-form";
import "../../../App.scss";

type FormData = {
  title: string;
  description: string;
  displayName: string;
  email: string;
  password: string;
};

const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      title: "",
      description: "",
      displayName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("proceeding with:", data);
    // e.g., navigate to a date-picker step
  };

  return (
    <div className="container">
      <h1 className="header">Create Your Hangout</h1>

      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title of Hangout
          <input {...register("title", { required: "Title is required" })} />
        </label>
        {errors.title && <p>{errors.title.message}</p>}

        <label>
          Description
          <textarea {...register("description")} />
        </label>

        <label>
          Your Display Name
          <input
            {...register("displayName", { required: "Display Name is required" })}
          />
        </label>
        {errors.displayName && <p>{errors.displayName.message}</p>}

        <label>
          Your Email
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
          />
        </label>
        {errors.email && <p>{errors.email.message}</p>}

        <label>
          Password (optional)
          <input type="password" {...register("password")} />
        </label>

        <button type="submit" className="button">
          Choose Dates
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
