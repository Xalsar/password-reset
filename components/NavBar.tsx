import CustomButton from "./CustomButton";

import styles from "@/styles/NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <img src="/logo-svg.svg" className={styles.logo} />

        <div>
          <CustomButton secondary>Log in</CustomButton>

          <CustomButton>Sign up</CustomButton>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
