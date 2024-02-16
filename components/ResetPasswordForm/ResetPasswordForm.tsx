import styles from "@/styles/ResetPasswordForm.module.scss";

import useResetPaswordForm from "./hooks/use-resetPasswordForm";

const ResetPasswordForm = () => {
  const {
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
  } = useResetPaswordForm();

  console.log("has12Characters", has12Characters);

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

        <button disabled={!isPasswordValid}>Submit</button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
