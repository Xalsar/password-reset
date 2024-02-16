import Image from "next/image";

import styles from "@/styles/NavBar.module.scss";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <Image
          src="/logo.png"
          alt="logo"
          width={237 / 4.2}
          height={254 / 4.2}
        />

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
