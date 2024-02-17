import styles from "@/styles/NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <img src="/logo-svg.svg" className={styles.logo} />

        <div>
          <button className={styles.button}>Log in</button>

          <button className={[styles.signUpButton, styles.button].join(" ")}>
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
