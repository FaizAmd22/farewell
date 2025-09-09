"use client";

import Header from "../components/header";
import Carousel from "../components/carousel";
import CardWrapper from "../components/cardWrapper";

const Homepage = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-no-repeat"
      style={{
        backgroundAttachment: "fixed",
        backgroundImage: "url('/bg.svg')",
      }}
    >
      <div className="p-5 md:p-8 lg:p-10">
        <Header />
        <CardWrapper />
      </div>
      <Carousel />
    </div>
  );
};

export default Homepage;
