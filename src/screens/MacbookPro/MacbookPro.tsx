import React from "react";
import { AboutUsByAnima } from "./sections/AboutUsByAnima";
import { ClientSectionByAnima } from "./sections/ClientSectionByAnima/ClientSectionByAnima";
import { ContactUsByAnima } from "./sections/ContactUsByAnima";
import { CtaSectionByAnima } from "./sections/CtaSectionByAnima";
import { FooterByAnima } from "./sections/FooterByAnima/FooterByAnima";
import { GroupByAnima } from "./sections/GroupByAnima";
import { NavbarByAnima } from "./sections/NavbarByAnima";
import { OurServicesByAnima } from "./sections/OurServicesByAnima/OurServicesByAnima";
import { TaglinesByAnima } from "./sections/TaglinesByAnima";

export const MacbookPro = (): JSX.Element => {
  return (
    <div className="bg-[#f5f7fd] flex flex-col items-center w-full">
      <div className="bg-[#f5f7fd] w-full max-w-[1728px] overflow-hidden">
        {/* Header section with blue background */}
        <div className="w-full bg-[#214ecc]">
          <NavbarByAnima />
          <GroupByAnima />
        </div>

        {/* Main content sections */}
        <TaglinesByAnima />
        <AboutUsByAnima />
        <OurServicesByAnima />
        <CtaSectionByAnima />

        {/* Bottom sections with light blue background */}
        <div className="w-full bg-[#eaefff] backdrop-blur-md backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(12px)_brightness(100%)]">
          <ClientSectionByAnima />
          <ContactUsByAnima />
          <FooterByAnima />
        </div>
      </div>
    </div>
  );
};
