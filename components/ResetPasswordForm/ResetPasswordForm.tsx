import TaskAltIcon from "@mui/icons-material/TaskAlt";

import CustomButton from "../CustomButton";

import styles from "@/styles/ResetPasswordForm.module.scss";

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
    <div className={styles.resetPasswordForm}>
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

        <ul className={styles.validationParams}>
          <li className={`${has12Characters ? styles.valid : ""}`}>
            <TaskAltIcon /> 12 characters minimum
          </li>
          <li className={`${hasNumber ? styles.valid : ""}`}>
            <TaskAltIcon /> One number
          </li>
          <li className={`${hasLowerCase ? styles.valid : ""}`}>
            <TaskAltIcon /> One lowercase letter
          </li>
          <li className={`${hasSpecialCharacter ? styles.valid : ""}`}>
            <TaskAltIcon /> One special character
          </li>
          <li className={`${hasUpperCase ? styles.valid : ""}`}>
            <TaskAltIcon /> One uppercase character
          </li>
        </ul>

        <input
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={handleTypeConfirmPassword}
          className={`${styles.passwordInput} ${styles.confirmPasswordInput}`}
          type="password"
          disabled={isLoading}
        />

        <CustomButton disabled={!isPasswordValid || isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </CustomButton>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
