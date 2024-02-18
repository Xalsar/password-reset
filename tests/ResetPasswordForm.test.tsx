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

import { ComposerProvider } from "@cmpsr/components";

const wrapWithCmpsrProvider = (children: React.ReactNode) => {
  return <ComposerProvider>{children}</ComposerProvider>;
};

describe("ResetPasswordForm", () => {
  test("Reset Password form is present", () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const resetPasswordForm = screen.getByText("Reset Password");

    expect(resetPasswordForm).toBeInTheDocument();
  });

  test("password input is present on form", () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    expect(passwordInput).toBeInTheDocument();
  });

  test("Confirm Password input is present on form", () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");

    expect(confirmPasswordInput).toBeInTheDocument();
  });

  test("Submit button is present on form", () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const SubmitButton = screen.getByText("Submit");

    expect(SubmitButton).toBeInTheDocument();
  });

  test("Submit button is disabled when form is empty", () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const SubmitButton = screen.getByText("Submit");

    expect(SubmitButton).toBeDisabled();
  });

  test("password input should change when typed", () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect(passwordInput).toHaveValue("password");
  });

  test("Confirm Password input should change when typed", () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");

    fireEvent.change(confirmPasswordInput, { target: { value: "password" } });

    expect(confirmPasswordInput).toHaveValue("password");
  });

  test(`"12 characters minimum" should not be green when password has less than 12 characters`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "password" } });

    const twelveCharacters = screen.getByText("12 characters minimum");

    expect(twelveCharacters).not.toHaveClass("valid");
  });

  test(`"12 characters minimum" should be green when password has 12 characters`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "password12345" } });

    const twelveCharacters = screen.getByText("12 characters minimum");

    expect(twelveCharacters).toHaveClass("valid");
  });

  test(`"12 characters minimum" should be green when password has more than 12 characters
  `, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "password123456789" } });

    const twelveCharacters = screen.getByText("12 characters minimum");

    expect(twelveCharacters).toHaveClass("valid");
  });

  test(`"One number" should not be green when password has no number`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "password" } });

    const oneNumber = screen.getByText("One number");

    expect(oneNumber).not.toHaveClass("valid");
  });

  test(`"One number" should be green when password has a number`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "password1" } });

    const oneNumber = screen.getByText("One number");

    expect(oneNumber).toHaveClass("valid");
  });

  test(`"One number" should be green when password has more than One number`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "password123456789" } });

    const oneNumber = screen.getByText("One number");

    expect(oneNumber).toHaveClass("valid");
  });

  test(`"One lowercase character" should not be green when password has no lowercase letter`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "PASSWORD" } });

    const oneLowerCase = screen.getByText("One lowercase character");

    expect(oneLowerCase).not.toHaveClass("valid");
  });

  test(`"One lowercase character" should be green when password has a lowercase letter`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "password" } });

    const oneLowerCase = screen.getByText("One lowercase character");

    expect(oneLowerCase).toHaveClass("valid");
  });

  test(`"One lowercase character" should be green when password has more than One lowercase character`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "passwordpassword" } });

    const oneLowerCase = screen.getByText("One lowercase character");

    expect(oneLowerCase).toHaveClass("valid");
  });

  test(`"One special character" should not be green when password has no special character`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "password" } });

    const oneSpecialCharacter = screen.getByText("One special character");

    expect(oneSpecialCharacter).not.toHaveClass("valid");
  });

  test(`"One special character" should be green when password has a special character`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "password!" } });

    const oneSpecialCharacter = screen.getByText("One special character");

    expect(oneSpecialCharacter).toHaveClass("valid");
  });

  test(`"One special character" should be green when password has more than One special character`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, {
      target: { value: "password!@#$%^&*()" },
    });

    const oneSpecialCharacter = screen.getByText("One special character");

    expect(oneSpecialCharacter).toHaveClass("valid");
  });

  test(`"One uppercase character" should not be green when password has no uppercase character`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "password" } });

    const oneUpperCase = screen.getByText("One uppercase character");

    expect(oneUpperCase).not.toHaveClass("valid");
  });

  test(`"One uppercase character" should be green when password has an uppercase character`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "Password" } });

    const oneUpperCase = screen.getByText("One uppercase character");

    expect(oneUpperCase).toHaveClass("valid");
  });

  test(`"One uppercase character" should be green when password has more than One uppercase character`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");

    fireEvent.change(passwordInput, { target: { value: "PASSWORD" } });

    const oneUpperCase = screen.getByText("One uppercase character");

    expect(oneUpperCase).toHaveClass("valid");
  });

  test(`"Submit" button should be enabled when password and Confirm Password are the same and password is valid`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");

    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "Password123!" },
    });

    const SubmitButton = screen.getByText("Submit");

    expect(SubmitButton).toBeEnabled();
  });

  test(`"Submit" button should be disabled when password and Confirm Password are not the same`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");

    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "Password1234!" },
    });

    const SubmitButton = screen.getByText("Submit");

    expect(SubmitButton).toBeDisabled();
  });

  test(`"Submit" button should be disabled when password is not valid`, () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");

    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.change(confirmPasswordInput, { target: { value: "password" } });

    const SubmitButton = screen.getByText("Submit");

    expect(SubmitButton).toBeDisabled();
  });

  test(`A spinner should be displayed instead of "Submit" button when form is loading`, async () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");

    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "Password123!" },
    });

    const SubmitButton = screen.getByText("Submit");

    fireEvent.click(SubmitButton);

    const spinner = screen.getByTestId("spinner");

    await waitFor(() => {
      expect(SubmitButton).not.toBeInTheDocument();
      expect(spinner).toBeInTheDocument();
    });
  });

  test(`API call should be made when user Submits the form correctly`, async () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");

    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "Password123!" },
    });

    const SubmitButton = screen.getByText("Submit");

    fireEvent.click(SubmitButton);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
    });
  });

  test(`console.log with message "password changed" should be called when user Submits the form correctly`, async () => {
    global.console.log = jest.fn();

    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");

    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "Password123!" },
    });

    const SubmitButton = screen.getByText("Submit");

    fireEvent.click(SubmitButton);

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith("password changed");
    });
  });

  test(`console.log with message "error changing password" should be called when user Submits the form incorrectly`, async () => {
    global.console.log = jest.fn();

    jest.spyOn(axios, "post").mockRejectedValue(new Error("error"));

    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");

    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "Password123!" },
    });

    const SubmitButton = screen.getByText("Submit");

    fireEvent.click(SubmitButton);

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith("error changing password");
    });
  });

  test("when form is beeing Submitted all inputs should be disabled", async () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");
    const resetPasswordForm = screen.getByTestId("reset-password-form");

    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "Password123!" },
    });

    fireEvent.submit(resetPasswordForm);

    await waitFor(() => {
      expect(passwordInput).toBeDisabled();
      expect(confirmPasswordInput).toBeDisabled();
    });
  });

  test("Submitting the form should be the same as clicking the Submit button", async () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");
    const resetPasswordForm = screen.getByTestId("reset-password-form");

    fireEvent.change(passwordInput, { target: { value: "Password123!" } });
    fireEvent.change(confirmPasswordInput, {
      target: { value: "Password123!" },
    });

    fireEvent.submit(resetPasswordForm);

    await waitFor(() => {
      expect(axios.post).toHaveBeenCalled();
    });
  });

  test("Submit button should only be enabled when all requirements are met", async () => {
    render(wrapWithCmpsrProvider(<ResetPasswordForm />));

    const passwordInput = screen.getByPlaceholderText("New Password");
    const confirmPasswordInput =
      screen.getByPlaceholderText("Confirm Password");

    const wrongPasswords = [
      "12345679!Aa", // Not 12 characters
      "qwertyuiop!A", // Not number
      "1234567890A!", // Not lowercase
      "qwertyuiopA9", // Not special character
      "qwertyuiopa2!", // Not uppercase
    ];

    for (const password of wrongPasswords) {
      fireEvent.change(passwordInput, { target: { value: password } });
      fireEvent.change(confirmPasswordInput, {
        target: { value: password },
      });

      expect(screen.getByText("Submit")).toBeDisabled();
    }
  });
});
