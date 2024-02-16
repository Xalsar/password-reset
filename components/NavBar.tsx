import Image from "next/image";

import styles from "@/styles/NavBar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Image
          src="/logo.png"
          alt="logo"
          width={237 / 4.2}
          height={254 / 4.2}
        />

        <div>
          <button className={styles.navBarButton}>Log in</button>

          <button
            className={[styles.signUpButton, styles.navBarButton].join(" ")}
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
