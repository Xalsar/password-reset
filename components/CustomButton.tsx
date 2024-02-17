import React from "react";

import styles from "@/styles/CustomButton.module.scss";

const CustomButton: React.FC<{
  disabled?: boolean;
  secondary?: boolean;
  className?: string;
  children: React.ReactNode | String;
}> = ({ secondary, disabled, className, children }) => {
  const classes = [styles.button];

  if (secondary) {
    classes.push(styles.secondary);
  }

  if (className) {
    classes.push(className);
  }

  return (
    <button className={classes.join(" ")} disabled={disabled}>
      {children}
    </button>
  );
};

export default CustomButton;
