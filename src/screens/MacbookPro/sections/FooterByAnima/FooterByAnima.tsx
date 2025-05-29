import {
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  TwitterIcon,
} from "lucide-react";
import React from "react";

export const FooterByAnima = (): JSX.Element => {
  const socialIcons = [
    { icon: <MailIcon className="w-5 lg:w-8" />, alt: "Email" },
    { icon: <InstagramIcon className="w-5 lg:w-8" />, alt: "Instagram" },
    { icon: <LinkedinIcon className="w-5 lg:w-8" />, alt: "LinkedIn" },
    { icon: <TwitterIcon className=" w-5 lg:w-8" />, alt: "Twitter" },
  ];

  return (
    <footer className="flex flex-col lg:flex-row w-full items-center gap-6 lg:justify-center px-8 py-16 bg-[#214ecc] md:px-16">
      <img className="relative w-[200px] h-auto" alt="Logo" src="/logo-2.svg" />

      <div className="flex items-center gap-8 md:gap-12">
        {socialIcons.map((item, index) => (
          <div key={index} className="text-white">
            {item.icon}
          </div>
        ))}
      </div>

      <div className="flex flex-col max-w-[308px] items-center lg:items-start gap-2">
        <div className="flex items-center gap-1">
          <div className="[font-family:'Lato',Helvetica] font-normal italic text-[#ffd55a] text-sm md:text-base leading-[20px] whitespace-nowrap">
            Contact:
          </div>
          <div className="[font-family:'Lato',Helvetica] font-normal italic text-[#ffd55a] text-sm md:text-base leading-[20px] whitespace-nowrap">
            hello@impulse.com
          </div>
        </div>

        <div className="font-normal text-white text-sm lg:text-base leading-7 font-['Inter',Helvetica] text-nowrap">
          © Impulse marketing, All rights reserved
        </div>
      </div>
    </footer>
  );
};
