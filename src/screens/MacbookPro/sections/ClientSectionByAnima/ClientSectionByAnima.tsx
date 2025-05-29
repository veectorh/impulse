import React from "react";

export const ClientSectionByAnima = (): JSX.Element => {
  // Array of logo data for easier mapping
  const logos = [
    { src: "/logo-26.svg", width: "97px", height: "50px" },
    { src: "/logo-27.svg", width: "100px", height: "40px" },
    { src: "/logo-24.svg", width: "130px", height: "47px" },
    { src: "/logo-28.svg", width: "169px", height: "40px" },
    { src: "/logo-20.svg", width: "52px", height: "44px" },
    { src: "/logo-23.svg", width: "78px", height: "30px" },
    { src: "/logo-15.svg", width: "105px", height: "40px" },
    { src: "/logo-29.svg", width: "84px", height: "40px" },
    { src: "/logo-11.svg", width: "119px", height: "30px" },
    { src: "/logo-22.svg", width: "73px", height: "49px" },
    { src: "/logo-12.svg", width: "147px", height: "46px" },
    { src: "/logo-13.svg", width: "50px", height: "39px" },
    { src: "/logo-16.svg", width: "60px", height: "40px" },
    { src: "/logo-21.svg", width: "150px", height: "57px" },
    { src: "/logo-25.svg", width: "72px", height: "40px" },
    { src: "/logo-19.svg", width: "70px", height: "44px" },
    { src: "/logo-18.svg", width: "104px", height: "74px" },
    { src: "/logo-17.svg", width: "103px", height: "52px" },
    { src: "/logo-7.svg", width: "147px", height: "62px" },
    { src: "/logo-10.svg", width: "160px", height: "46px" },
    { src: "/logo-4.svg", width: "175px", height: "40px" },
    { src: "/logo-1.svg", width: "160px", height: "30px" },
    { src: "/logo.svg", width: "125px", height: "40px" },
    { src: "/logo-3.svg", width: "80px", height: "80px" },
    { src: "/logo-6.svg", width: "80px", height: "80px" },
    { src: "/logo-9.svg", width: "40px", height: "40px" },
    { src: "/logo-14.svg", width: "202px", height: "40px" },
    { src: "/logo-5.svg", width: "174px", height: "39px" },
    { src: "/logo-8.svg", width: "176px", height: "40px" },
  ];

  return (
    <section className="w-full max-w-[1328px] flex flex-col items-center gap-16 mx-auto py-16">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-['Playfair_Display',Helvetica] font-bold text-3xl md:text-6xl lg:text-[101px] text-[#22252d] text-center md:leading-[121.2px] whitespace-nowrap">
          Places we&apos;ve worked
        </h2>

        <p className="max-w-[976px] font-['Lato',Helvetica] font-normal text-base md:text-lg lg:text-[26px] text-[#4b5061] text-center lg:leading-[31.2px]">
          We are a collection of talented individuals who have made their mark
          and impact in various companies all over the world. Some you have
          heard of, others you will soon.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-[34px] w-full">
        {logos.map((logo, index) => (
          <img
            key={index}
            className="relative h-8 lg:h-14"
            alt="Company logo"
            src={logo.src}
          />
        ))}
      </div>
    </section>
  );
};
