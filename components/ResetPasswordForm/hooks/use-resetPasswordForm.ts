import { useState } from "react";

const useResetPaswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleTypePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleTypeConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = () => {
    console.log("submitted");
  };

  let isPasswordValid = false;

  const has12Characters = password.length >= 12;
  const hasNumber = /\d/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasSpecialCharacter = /[^A-Za-z0-9]/.test(password);
  const hasUpperCase = /[A-Z]/.test(password);

  if (
    has12Characters &&
    hasNumber &&
    hasLowerCase &&
    hasSpecialCharacter &&
    hasUpperCase &&
    password === confirmPassword
  ) {
    isPasswordValid = true;
  }

  return {
    // FORM STATE
    password,
    handleTypePassword,
    confirmPassword,
    handleTypeConfirmPassword,
    handleSubmit,
    // FORM VALIDATION
    isPasswordValid,
    has12Characters,
    hasNumber,
    hasLowerCase,
    hasSpecialCharacter,
    hasUpperCase,
  };
};

export default useResetPaswordForm;
