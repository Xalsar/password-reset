import React from "react";

import styles from "@/styles/CustomButton.module.scss";

const CustomButton: React.FC<{
  disabled?: boolean;
  secondary?: boolean;
  children: React.ReactNode | String;
}> = ({ secondary, disabled, children }) => {
  const classes = [styles.button];

  if (secondary) {
    classes.push(styles.secondary);
  }

  return (
    <button className={classes.join(" ")} disabled={disabled}>
      {children}
    </button>
  );
};

export default CustomButton;
