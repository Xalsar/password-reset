import CustomButton from "./CustomButton";

import { Box, Flex, Image } from "@cmpsr/components";

import styles from "@/styles/NavBar.module.scss";

const NavBar = () => {
  return (
    <Box className={styles.navbar}>
      <Flex
        className={styles.container}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Image src="/logo-svg.svg" className={styles.logo} alt="logo" />

        <div>
          <CustomButton secondary>Log in</CustomButton>

          <CustomButton>Sign up</CustomButton>
        </div>
      </Flex>
    </Box>
  );
};

export default NavBar;
