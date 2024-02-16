import "@testing-library/jest-dom";

import {
  fireEvent,
  render,
  screen,
  waitFor,
  act,
} from "@testing-library/react";

import ResetPasswordForm from "../components/ResetPasswordForm/ResetPasswordForm";

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
