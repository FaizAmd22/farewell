import React from "react";
import Image from "next/image";
import logo from "../../public/logo/logo.svg";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full pt-[70px] text-center">
      <div className="w-[263px] md:w-[300px] lg:w-[400px]">
        <Image
          src={logo}
          alt="logo"
          className="w-full h-full object-contain"
          priority
        />
      </div>

      <h1 className="mt-10 py-2 font-semibold text-md md:text-xl lg:text-2xl">
        Selamat Menempuh Perjalanan Baru, Rama!
      </h1>

      <p className="w-full md:w-[70%] lg:w-[40%] text-sm text-[#BEBEBE]">
        Terima kasih atas kebersamaan dan kontribusimu selama ini. Semoga
        langkah barumu membawa banyak kesuksesan dan kebahagiaan. Jangan lupa
        untuk baca pesan-pesan dari kami ya!
      </p>
    </div>
  );
};

export default Header;
