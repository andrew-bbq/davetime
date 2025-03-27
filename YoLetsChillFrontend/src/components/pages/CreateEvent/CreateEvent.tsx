// src/components/pages/CreateEvent.tsx
import React, {useState} from "react";
import "./CreateEvent.css";

const CreateEvent = () => {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        displayName: "",
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({ ...prev, [name]: value}));
    }
    const handleNext = () => {
        //placeholder for advancing datepicker
        console.log("proceeding with:", formData);
    }
  return (
    <div className="create-event-container">
      <h1>Create Your Hangout</h1>

      <label>Title of Hangout</label>
      <input name="title" value={formData.title} onChange={handleChange} required />

      <label>Description</label>
      <textarea name="description" value={formData.description} onChange={handleChange} />

      <label>Your Display Name</label>
      <input name="displayName" value={formData.displayName} onChange={handleChange} required />

      <label>Your Email</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Password (optional)</label>
      <input type="password" name="password" value={formData.password} onChange={handleChange} />

      <button onClick={handleNext}>Choose Dates</button>
    </div>
  );
};

export default CreateEvent;
