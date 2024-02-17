import axios from "axios";

jest.mock("axios");

import "@testing-library/jest-dom";

import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";

import ResetPasswordForm from "../components/ResetPasswordForm/ResetPasswordForm";

test("reset password form is present", () => {
  render(<ResetPasswordForm />);

  const resetPasswordForm = screen.getByText("Reset password");

  expect(resetPasswordForm).toBeInTheDocument();
});

test("password input is present on form", () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  expect(passwordInput).toBeInTheDocument();
});

test("confirm password input is present on form", () => {
  render(<ResetPasswordForm />);

  const confirmPasswordInput = screen.getByPlaceholderText("Confirm password");

  expect(confirmPasswordInput).toBeInTheDocument();
});

test("submit button is present on form", () => {
  render(<ResetPasswordForm />);

  const submitButton = screen.getByText("Submit");

  expect(submitButton).toBeInTheDocument();
});

test("submit button is disabled when form is empty", () => {
  render(<ResetPasswordForm />);

  const submitButton = screen.getByText("Submit");

  expect(submitButton).toBeDisabled();
});

test("password input should change when typed", () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "password" } });

  expect(passwordInput).toHaveValue("password");
});

test("confirm password input should change when typed", () => {
  render(<ResetPasswordForm />);

  const confirmPasswordInput = screen.getByPlaceholderText("Confirm password");

  fireEvent.change(confirmPasswordInput, { target: { value: "password" } });

  expect(confirmPasswordInput).toHaveValue("password");
});

test(`"12 characters minimum" should not be green when password has less than 12 characters`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "password" } });

  const twelveCharacters = screen.getByText("12 characters minimum");

  expect(twelveCharacters).not.toHaveClass("valid");
});

test(`"12 characters minimum" should be green when password has 12 characters`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "password12345" } });

  const twelveCharacters = screen.getByText("12 characters minimum");

  expect(twelveCharacters).toHaveClass("valid");
});

test(`"12 characters minimum" should be green when password has more than 12 characters
`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "password123456789" } });

  const twelveCharacters = screen.getByText("12 characters minimum");

  expect(twelveCharacters).toHaveClass("valid");
});

test(`"One number" should not be green when password has no number`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "password" } });

  const oneNumber = screen.getByText("One number");

  expect(oneNumber).not.toHaveClass("valid");
});

test(`"One number" should be green when password has a number`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "password1" } });

  const oneNumber = screen.getByText("One number");

  expect(oneNumber).toHaveClass("valid");
});

test(`"One number" should be green when password has more than one number`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "password123456789" } });

  const oneNumber = screen.getByText("One number");

  expect(oneNumber).toHaveClass("valid");
});

test(`"One lowercase letter" should not be green when password has no lowercase letter`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "PASSWORD" } });

  const oneLowerCase = screen.getByText("One lowercase letter");

  expect(oneLowerCase).not.toHaveClass("valid");
});

test(`"One lowercase letter" should be green when password has a lowercase letter`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "password" } });

  const oneLowerCase = screen.getByText("One lowercase letter");

  expect(oneLowerCase).toHaveClass("valid");
});

test(`"One lowercase letter" should be green when password has more than one lowercase letter`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "passwordpassword" } });

  const oneLowerCase = screen.getByText("One lowercase letter");

  expect(oneLowerCase).toHaveClass("valid");
});

test(`"One special character" should not be green when password has no special character`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "password" } });

  const oneSpecialCharacter = screen.getByText("One special character");

  expect(oneSpecialCharacter).not.toHaveClass("valid");
});

test(`"One special character" should be green when password has a special character`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "password!" } });

  const oneSpecialCharacter = screen.getByText("One special character");

  expect(oneSpecialCharacter).toHaveClass("valid");
});

test(`"One special character" should be green when password has more than one special character`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "password!@#$%^&*()" } });

  const oneSpecialCharacter = screen.getByText("One special character");

  expect(oneSpecialCharacter).toHaveClass("valid");
});

test(`"One uppercase character" should not be green when password has no uppercase character`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "password" } });

  const oneUpperCase = screen.getByText("One uppercase character");

  expect(oneUpperCase).not.toHaveClass("valid");
});

test(`"One uppercase character" should be green when password has an uppercase character`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "Password" } });

  const oneUpperCase = screen.getByText("One uppercase character");

  expect(oneUpperCase).toHaveClass("valid");
});

test(`"One uppercase character" should be green when password has more than one uppercase character`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");

  fireEvent.change(passwordInput, { target: { value: "PASSWORD" } });

  const oneUpperCase = screen.getByText("One uppercase character");

  expect(oneUpperCase).toHaveClass("valid");
});

test(`"Submit" button should be enabled when password and confirm password are the same and password is valid`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");
  const confirmPasswordInput = screen.getByPlaceholderText("Confirm password");

  fireEvent.change(passwordInput, { target: { value: "Password123!" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "Password123!" } });

  const submitButton = screen.getByText("Submit");

  expect(submitButton).toBeEnabled();
});

test(`"Submit" button should be disabled when password and confirm password are not the same`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");
  const confirmPasswordInput = screen.getByPlaceholderText("Confirm password");

  fireEvent.change(passwordInput, { target: { value: "Password123!" } });
  fireEvent.change(confirmPasswordInput, {
    target: { value: "Password1234!" },
  });

  const submitButton = screen.getByText("Submit");

  expect(submitButton).toBeDisabled();
});

test(`"Submit" button should be disabled when password is not valid`, () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");
  const confirmPasswordInput = screen.getByPlaceholderText("Confirm password");

  fireEvent.change(passwordInput, { target: { value: "password" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "password" } });

  const submitButton = screen.getByText("Submit");

  expect(submitButton).toBeDisabled();
});

test(`"Submit" button should be loading when user submits the form correctlly`, async () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");
  const confirmPasswordInput = screen.getByPlaceholderText("Confirm password");

  fireEvent.change(passwordInput, { target: { value: "Password123!" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "Password123!" } });

  const submitButton = screen.getByText("Submit");

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(submitButton).toHaveProperty("disabled", true);
    expect(submitButton).toHaveTextContent("Loading...");
  });
});

test(`API call should be made when user submits the form correctly`, async () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");
  const confirmPasswordInput = screen.getByPlaceholderText("Confirm password");

  fireEvent.change(passwordInput, { target: { value: "Password123!" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "Password123!" } });

  const submitButton = screen.getByText("Submit");

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(axios.post).toHaveBeenCalled();
  });
});

test(`console.log with message "password changed" should be called when user submits the form correctly`, async () => {
  global.console.log = jest.fn();

  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");
  const confirmPasswordInput = screen.getByPlaceholderText("Confirm password");

  fireEvent.change(passwordInput, { target: { value: "Password123!" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "Password123!" } });

  const submitButton = screen.getByText("Submit");

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(console.log).toHaveBeenCalledWith("password changed");
  });
});

test(`console.log with message "error changing password" should be called when user submits the form incorrectly`, async () => {
  global.console.log = jest.fn();

  jest.spyOn(axios, "post").mockRejectedValue(new Error("error"));

  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");
  const confirmPasswordInput = screen.getByPlaceholderText("Confirm password");

  fireEvent.change(passwordInput, { target: { value: "Password123!" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "Password123!" } });

  const submitButton = screen.getByText("Submit");

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(console.log).toHaveBeenCalledWith("error changing password");
  });
});

test("when form is beeing submitted all inputs should be disabled", async () => {
  render(<ResetPasswordForm />);

  const passwordInput = screen.getByPlaceholderText("New password");
  const confirmPasswordInput = screen.getByPlaceholderText("Confirm password");
  const submitButton = screen.getByText("Submit");

  fireEvent.change(passwordInput, { target: { value: "Password123!" } });
  fireEvent.change(confirmPasswordInput, { target: { value: "Password123!" } });

  fireEvent.click(submitButton);

  await waitFor(() => {
    expect(passwordInput).toBeDisabled();
    expect(confirmPasswordInput).toBeDisabled();
    expect(submitButton).toBeDisabled();
  });
});
