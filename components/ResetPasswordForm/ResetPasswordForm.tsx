import styles from "@/styles/ResetPasswordForm.module.scss";

const ResetPasswordForm = () => {
  return (
    <div className={styles.resetPasswordForm}>
      <h1>Reset password</h1>

      <form>
        <input placeholder="New password" />

        <ul>
          <li>12 characters minimum</li>
          <li>One number</li>
          <li>One lowercase letter</li>
          <li>One special character</li>
          <li>One uppercase character</li>
        </ul>

        <input placeholder="Confirm password" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
