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
      <h1>Reset password</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="New password"
          value={password}
          onChange={handleTypePassword}
        />

        <ul>
          <li className={`${has12Characters && styles.valid}`}>
            12 characters minimum
          </li>
          <li className={`${hasNumber && styles.valid}`}>One number</li>
          <li className={`${hasLowerCase && styles.valid}`}>
            One lowercase letter
          </li>
          <li className={`${hasSpecialCharacter && styles.valid}`}>
            One special character
          </li>
          <li className={`${hasUpperCase && styles.valid}`}>
            One uppercase character
          </li>
        </ul>

        <input
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={handleTypeConfirmPassword}
        />

        <button disabled={!isPasswordValid || isLoading}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
