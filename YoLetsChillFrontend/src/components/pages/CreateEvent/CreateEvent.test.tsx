// src/components/pages/CreateEvent/CreateEvent.test.tsx
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateEvent from "./CreateEvent";

// Mock console.log so we can verify submission
jest.spyOn(console, "log").mockImplementation(() => {});

describe("CreateEvent", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders form fields correctly", () => {
    render(<CreateEvent />);
    expect(screen.getByLabelText(/title of hangout/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/description/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your display name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/your email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password \(optional\)/i)).toBeInTheDocument();
  });

  describe("Title validation", () => {
    it("shows required error when title is missing", async () => {
      render(<CreateEvent />);
      fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));
      expect(await screen.findByText("Title is required")).toBeInTheDocument();
    });

    it("shows error when title is too short", async () => {
      render(<CreateEvent />);
      
      fireEvent.change(screen.getByLabelText(/title of hangout/i), {
        target: { value: "Ab" },
      });
      
      fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));
      
      expect(await screen.findByText("Title must be at least 3 characters")).toBeInTheDocument();
    });

    it("shows error when title is too long", async () => {
      render(<CreateEvent />);
      
      fireEvent.change(screen.getByLabelText(/title of hangout/i), {
        target: { value: "A".repeat(51) }, 
      });
      
      fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));
      
      expect(await screen.findByText("Title must not exceed 50 characters")).toBeInTheDocument();
    });
  });

  describe("Description validation", () => {
    it("shows error when description is too long", async () => {
      render(<CreateEvent />);
      
      fireEvent.change(screen.getByLabelText(/description/i), {
        target: { value: "A".repeat(501) },
      });
      
      fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));
      
      expect(await screen.findByText("Description must not exceed 500 characters")).toBeInTheDocument();
    });
  });

  describe("Display Name validation", () => {
    it("shows required error when display name is missing", async () => {
      render(<CreateEvent />);
      fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));
      expect(await screen.findByText("Display Name is required")).toBeInTheDocument();
    });

    it("shows error when display name is too short", async () => {
      render(<CreateEvent />);
      
      fireEvent.change(screen.getByLabelText(/your display name/i), {
        target: { value: "A" }, // Less than 2 characters
      });
      
      fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));
      
      expect(await screen.findByText("Display Name must be at least 2 characters")).toBeInTheDocument();
    });

    it("shows error when display name is too long", async () => {
      render(<CreateEvent />);
      
      fireEvent.change(screen.getByLabelText(/your display name/i), {
        target: { value: "A".repeat(31) }, // More than 30 characters
      });
      
      fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));
      
      expect(await screen.findByText("Display Name must not exceed 30 characters")).toBeInTheDocument();
    });

    it("shows error when display name has invalid characters", async () => {
      render(<CreateEvent />);
      
      fireEvent.change(screen.getByLabelText(/your display name/i), {
        target: { value: "User#$%" }, // Contains invalid characters
      });
      
      fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));
      
      expect(await screen.findByText("Display Name can only contain letters, numbers, spaces, and basic punctuation")).toBeInTheDocument();
    });
  });

  describe("Email validation", () => {
    it("shows required error when email is missing", async () => {
      render(<CreateEvent />);
      fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));
      expect(await screen.findByText("Email is required")).toBeInTheDocument();
    });

    it("shows error when email format is invalid", async () => {
      render(<CreateEvent />);
      
      fireEvent.change(screen.getByLabelText(/your email/i), {
        target: { value: "invalid-email" },
      });
      
      fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));
      
      expect(await screen.findByText("Invalid email address")).toBeInTheDocument();
    });
  });

  describe("Password validation", () => {
    it("shows error when password is too short", async () => {
      render(<CreateEvent />);
      
      fireEvent.change(screen.getByLabelText(/password \(optional\)/i), {
        target: { value: "pass" },
      });
      
      fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));
      
      expect(await screen.findByText("Password must be at least 8 characters")).toBeInTheDocument();
    });
  });

  it("submits form with valid inputs", async () => {
    render(<CreateEvent />); 
    
    fireEvent.change(screen.getByLabelText(/title of hangout/i), {
      target: { value: "Fun Hang for the laughs" },
    });
    fireEvent.change(screen.getByLabelText(/description/i), {
      target: { value: "Youre mom is invited." },
    });
    fireEvent.change(screen.getByLabelText(/your display name/i), {
      target: { value: "Bigus Schlongus" },
    });
    fireEvent.change(screen.getByLabelText(/your email/i), {
      target: { value: "BigusSchlongus@peenar.com" },
    });
    fireEvent.change(screen.getByLabelText(/password \(optional\)/i), {
      target: { value: "Pass1234!" },
    });
    
    fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));

    await waitFor(() =>
      expect(console.log).toHaveBeenCalledWith("proceeding with:", {
        title: "Fun Hang for the laughs",
        description: "Youre mom is invited.",
        displayName: "Bigus Schlongus",
        email: "BigusSchlongus@peenar.com",
        password: "Pass1234!",
      })
    );
  });

  it("submits form with valid inputs and optional fields empty", async () => {
    render(<CreateEvent />); 
    
    fireEvent.change(screen.getByLabelText(/title of hangout/i), {
      target: { value: "Fun Hang for the laughs" },
    });
    fireEvent.change(screen.getByLabelText(/your display name/i), {
      target: { value: "Bigus Schlongus" },
    });
    fireEvent.change(screen.getByLabelText(/your email/i), {
      target: { value: "BigusSchlongus@peenar.com" },
    });
    
    fireEvent.click(screen.getByRole("button", { name: /choose dates/i }));

    await waitFor(() =>
      expect(console.log).toHaveBeenCalledWith("proceeding with:", {
        title: "Fun Hang for the laughs",
        description: "",
        displayName: "Bigus Schlongus",
        email: "BigusSchlongus@peenar.com",
        password: "",
      })
    );
  });
});