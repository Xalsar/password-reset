import { useState } from "react";

import axios from "axios";

const useResetPaswordForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleTypePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleTypeConfirmPassword = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      await axios.post("/api/reset-password", {
        password,
      });

      console.log("password changed");
    } catch (error) {
      console.log("error changing password");
    }

    setIsLoading(false);
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
    // FORM VALIDATION
    isPasswordValid,
    has12Characters,
    hasNumber,
    hasLowerCase,
    hasSpecialCharacter,
    hasUpperCase,
    // FORM SUBMISSION
    handleSubmit,
    isLoading,
  };
};

export default useResetPaswordForm;
