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

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="title">Title of Hangout</label>
          <input
            id="title"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters"
              },
              maxLength: {
                value: 50,
                message: "Title must not exceed 50 characters"
              }
            })}
          />
          {errors.title && <span className="error-message">{errors.title.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            {...register("description", {
              maxLength: {
                value: 500,
                message: "Description must not exceed 500 characters"
              }
            })}
          />
          {errors.description && <span className="error-message">{errors.description.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="displayName">Your Display Name</label>
          <input
            id="displayName"
            {...register("displayName", {
              required: "Display Name is required",
              minLength: {
                value: 2,
                message: "Display Name must be at least 2 characters"
              },
              maxLength: {
                value: 30,
                message: "Display Name must not exceed 30 characters"
              },
              pattern: {
                value: /^[A-Za-z0-9\s._-]+$/,
                message: "Display Name can only contain letters, numbers, spaces, and basic punctuation"
              }
            })}
          />
          {errors.displayName && <span className="error-message">{errors.displayName.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address"
              }
            })}
          />
          {errors.email && <span className="error-message">{errors.email.message}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password (optional)</label>
          <input
            id="password"
            type="password"
            {...register("password", {
              minLength: {
                value: 1,
                message: "Password must be at least 1 character"
              },
            })}
          />
          {errors.password && <span className="error-message">{errors.password.message}</span>}
        </div>

        <div className="button-container">
          <button type="submit" className="button">
            Choose Dates
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;