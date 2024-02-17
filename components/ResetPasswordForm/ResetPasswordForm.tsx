import CustomButton from "../CustomButton";

import CheckBoxIcon from "../CheckBoxIcon";

import styles from "@/styles/ResetPasswordForm.module.scss";

import { Box, Flex } from "@cmpsr/components";

import useResetPaswordForm from "./hooks/use-resetPasswordForm";

const ResetPasswordForm = () => {
  const {
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
  } = useResetPaswordForm();

  return (
    <Box className={styles.resetPasswordForm}>
      <h1 className={styles.title}>Reset password</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="New password"
          value={password}
          onChange={handleTypePassword}
          className={styles.passwordInput}
          type="password"
          disabled={isLoading}
        />

        <Flex
          className={styles.validationParams}
          gap={"1.6rem 0.4rem"}
          wrap={"wrap"}
        >
          <div className={`${has12Characters ? styles.valid : ""}`}>
            <CheckBoxIcon />
            12 characters minimum
          </div>
          <div className={`${hasNumber ? styles.valid : ""}`}>
            <CheckBoxIcon /> One number
          </div>
          <div className={`${hasLowerCase ? styles.valid : ""}`}>
            <CheckBoxIcon /> One lowercase letter
          </div>
          <div className={`${hasSpecialCharacter ? styles.valid : ""}`}>
            <CheckBoxIcon /> One special character
          </div>
          <div className={`${hasUpperCase ? styles.valid : ""}`}>
            <CheckBoxIcon /> One uppercase character
          </div>
        </Flex>

        <input
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={handleTypeConfirmPassword}
          className={`${styles.passwordInput} ${styles.confirmPasswordInput}`}
          type="password"
          disabled={isLoading}
        />

        <CustomButton
          disabled={!isPasswordValid || isLoading}
          className={styles.submitFormButton}
        >
          {isLoading ? "Loading..." : "Submit"}
        </CustomButton>
      </form>
    </Box>
  );
};

export default ResetPasswordForm;
