"use client";

import Header from "../components/header";
import Carousel from "../components/carousel";
import CardWrapper from "../components/cardWrapper";
import { Box } from "@chakra-ui/react";

const styles = {
  container: {
    backgroundAttachment: "fixed",
    backgroundImage: "url('/bg.svg')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    width: "100%",
  },
};

const Homepage = () => {
  return (
    <div style={styles.container}>
      <Box p={{ base: "20px", md: "30px", lg: "40px" }}>
        <Header />
        <CardWrapper />
      </Box>
      <Carousel />
    </div>
  );
};

export default Homepage;
