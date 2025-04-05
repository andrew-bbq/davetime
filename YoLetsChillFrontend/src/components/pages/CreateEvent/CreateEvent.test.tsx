// src/components/pages/CreateEvent/CreateEvent.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateEvent from "./CreateEvent";

// Mock console.log so we can verify submission
jest.spyOn(console, "log").mockImplementation(() => {});

describe("CreateEvent", () => {
  it("renders form fields correctly", () => {
    render(<CreateEvent />);
    expect(screen.getByLabelText("Title of Hangout")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(screen.getByLabelText("Your Display Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Your Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password (optional)")).toBeInTheDocument();
  });

  it("shows required error when title is missing", async () => {
    render(<CreateEvent />);
    fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));
    expect(await screen.findByText("Title is required")).toBeInTheDocument();
  });

  it("submits form with valid inputs", async () => {
    render(<CreateEvent />); 
    
    fireEvent.change(screen.getByLabelText("Title of Hangout"), {
      target: { value: "Test Hangout" },
    });
    fireEvent.change(screen.getByLabelText("Your Display Name"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByLabelText("Your Email"), {
      target: { value: "john@example.com" },
    });
    
    fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));

    await waitFor(() =>
      expect(console.log).toHaveBeenCalledWith("proceeding with:", {
        title: "Test Hangout",
        description: "",
        displayName: "John Doe",
        email: "john@example.com",
        password: "",
      })
    );
  });
});
