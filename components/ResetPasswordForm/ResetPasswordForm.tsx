import CustomButton from "../CustomButton/CustomButton";

import CheckBoxIcon from "../CheckBoxIcon";

import styles from "./ResetPasswordForm.module.scss";

import { Box, Flex, Spinner } from "@cmpsr/components";

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
      <h1 className={styles.title}>Reset Password</h1>

      <form onSubmit={handleSubmit} data-testid="reset-password-form">
        <Box
          className={`${styles.inputsContainer} ${
            isLoading ? styles.inputsLoading : ""
          } `}
        >
          <input
            placeholder="New Password"
            value={password}
            onChange={handleTypePassword}
            className={styles.passwordInput}
            type="password"
            disabled={isLoading}
          />

          <Flex
            className={styles.validationParams}
            rowGap={".4rem"}
            columnGap={"1.6rem"}
            wrap={"wrap"}
          >
            <Box className={`${has12Characters ? styles.valid : ""}`}>
              <CheckBoxIcon />
              12 characters minimum
            </Box>
            <Box className={`${hasNumber ? styles.valid : ""}`}>
              <CheckBoxIcon /> One number
            </Box>
            <Box className={`${hasLowerCase ? styles.valid : ""}`}>
              <CheckBoxIcon /> One lowercase character
            </Box>
            <Box className={`${hasSpecialCharacter ? styles.valid : ""}`}>
              <CheckBoxIcon /> One special character
            </Box>
            <Box className={`${hasUpperCase ? styles.valid : ""}`}>
              <CheckBoxIcon /> One uppercase character
            </Box>
          </Flex>

          <input
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleTypeConfirmPassword}
            className={`${styles.passwordInput} ${styles.confirmPasswordInput}`}
            type="password"
            disabled={isLoading}
          />
        </Box>

        {isLoading ? (
          <Spinner data-testid="spinner" />
        ) : (
          <CustomButton disabled={!isPasswordValid}>Submit</CustomButton>
        )}
      </form>
    </Box>
  );
};

export default ResetPasswordForm;
