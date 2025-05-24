import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SplashPage from "./SplashPage";

// Mock the entire module without requiring the actual implementation
jest.mock("react-router", () => ({
  useNavigate: () => jest.fn()
}));

describe("SplashPage", () => {
  test("renders splash page with all elements", () => {
    render(<SplashPage />);
    expect(screen.getByText("YoLetsChill")).toBeInTheDocument();
    expect(screen.getByText(/Plan fun events with friends/i)).toBeInTheDocument();
    expect(screen.getByText("Start Planning!")).toBeInTheDocument();
    expect(screen.getByText(/or join a group/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter the 6-digit code you received")).toBeInTheDocument();
    expect(screen.getByText("Join")).toBeInTheDocument();
    expect(screen.getByText("✔️ See when your friends are free")).toBeInTheDocument();
    expect(screen.getByText("📆 Suggest times that work for everyone")).toBeInTheDocument();
    expect(screen.getByText("🎉 Lock in plans without the back and forth")).toBeInTheDocument();
  });
  
  test("validates code input when joining an event", () => {
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    
    render(<SplashPage />);
    
    const input = screen.getByPlaceholderText("Enter the 6-digit code you received");
    const joinButton = screen.getByText("Join");
    fireEvent.change(input, { target: { value: '12345' } });
    fireEvent.click(joinButton);
    expect(alertMock).toHaveBeenCalledWith("Please enter a valid 6-digit code.");
    alertMock.mockReset();
  });
});
