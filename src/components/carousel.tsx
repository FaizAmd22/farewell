import Image from "next/image";
import image1 from "../../public/foto/01.png";
import image2 from "../../public/foto/02.png";
import image3 from "../../public/foto/03.png";
import image4 from "../../public/foto/04.png";
import image5 from "../../public/foto/05.png";
import Marquee from "react-fast-marquee";
import { Box } from "@chakra-ui/react";

const Carousel = () => {
  const data = [image1, image2, image3, image4, image5];

  return (
    <div style={{ paddingTop: "40px", paddingBottom: "60px" }}>
      <Marquee
        gradient={true}
        gradientColor="#101010"
        speed={40}
        style={{ marginBottom: "12px" }}
      >
        {data.map((item, index) => (
          <Box
            width={{ base: "244px", lg: "380px" }}
            height={{ base: "154px", lg: "200px" }}
            mr={"16px"}
          >
            <Image
              key={index}
              src={item}
              alt="foto"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Marquee>

      <Marquee
        gradient={true}
        gradientColor="#101010"
        direction="right"
        speed={30}
      >
        {data.map((item, index) => (
          <Box
            width={{ base: "244px", lg: "380px" }}
            height={{ base: "154px", lg: "200px" }}
            mr={"16px"}
          >
            <Image
              key={index}
              src={item}
              alt="foto"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "12px",
                objectFit: "cover",
              }}
            />
          </Box>
        ))}
      </Marquee>
    </div>
  );
};

export default Carousel;
