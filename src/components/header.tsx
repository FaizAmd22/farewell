import React from "react";
import logo from "../../public/logo/logo.svg";
import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingTop: "70px",
        textAlign: "center",
      }}
    >
      <Box width={{ base: "263px", md: "300px", lg: "400px" }}>
        <Image
          src={logo}
          alt="logo"
          style={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </Box>

      <Text
        mt={{ base: "10px", lg: "30px" }}
        p={"10px 0"}
        fontWeight={"semibold"}
        textStyle={{ base: "md", md: "xl", lg: "2xl" }}
      >
        Selamat Menempuh Perjalanan Baru, Rama!
      </Text>
      <Text
        w={{ base: "100%", md: "70%", lg: "40%" }}
        style={{ fontSize: "14px", color: "#BEBEBE" }}
      >
        Terima kasih atas kebersamaan dan kontribusimu selama ini. Semoga
        langkah barumu membawa banyak kesuksesan dan kebahagiaan. Jangan lupa
        untuk baca pesan-pesan dari kami ya!
      </Text>
    </div>
  );
};

export default Header;
