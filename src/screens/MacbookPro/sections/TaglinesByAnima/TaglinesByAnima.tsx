import React from "react";

export const TaglinesByAnima = (): JSX.Element => {
  // Define the taglines to avoid repetition
  const taglines = [
    "MARKETING",
    "ADVERTISING",
    "PUBLICITY",
    "CONTENT WRITING",
    "MARKETING",
    "ADVERTISING",
    "PUBLICITY",
    "CONTENT WRITING",
  ];

  return (
    <div className="flex w-full h-14 items-center bg-[#e8b008] overflow-hidden">
      <div className="animate-scroll flex items-center gap-16 whitespace-nowrap">
        {/* First set of taglines */}
        {taglines.map((tagline, index) => (
          <React.Fragment key={`first-${tagline}-${index}`}>
            <span className="font-['Lato',Helvetica] font-medium text-[#22252d] text-[15px] leading-[18px]">
              {tagline}
            </span>
            <img className="w-[19px] h-[21px]" alt="Divider" src="/--1.svg" />
          </React.Fragment>
        ))}
        {/* Duplicate set for seamless loop */}
        {taglines.map((tagline, index) => (
          <React.Fragment key={`second-${tagline}-${index}`}>
            <span className="font-['Lato',Helvetica] font-medium text-[#22252d] text-[15px] leading-[18px]">
              {tagline}
            </span>
            <img className="w-[19px] h-[21px]" alt="Divider" src="/--1.svg" />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
