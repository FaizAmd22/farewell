import Image from "next/image";
import image1 from "../../public/foto/01.png";
import image2 from "../../public/foto/02.png";
import image3 from "../../public/foto/03.png";
import image4 from "../../public/foto/04.png";
import image5 from "../../public/foto/05.png";
import Marquee from "react-fast-marquee";

const Carousel = () => {
  const data = [image1, image2, image3, image4, image5];
  const data2 = [image4, image5, image1, image2, image1];

  return (
    <div className="pt-10 pb-16">
      <Marquee
        gradient={true}
        gradientColor="#101010"
        speed={50}
        className="mb-3"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="w-[244px] lg:w-[380px] h-[154px] lg:h-[200px] mr-4"
          >
            <Image
              src={item}
              alt={`foto-${index}`}
              className="w-full h-full rounded-xl object-cover"
              priority
            />
          </div>
        ))}
      </Marquee>

      <Marquee
        gradient={true}
        gradientColor="#101010"
        direction="right"
        speed={30}
      >
        {data2.map((item, index) => (
          <div
            key={index}
            className="w-[244px] lg:w-[380px] h-[154px] lg:h-[200px] mr-4"
          >
            <Image
              src={item}
              alt={`foto-${index}`}
              className="w-full h-full rounded-xl object-cover"
              priority
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Carousel;
