import React from "react";

export const AboutUsByAnima = (): JSX.Element => {
  // Define the text content with color information for better maintainability
  const textContent = [
    { text: "At ", color: "text-[#22252d]" },
    { text: "Impulse", color: "text-[#2557e6]" },
    {
      text: ", we are a team of passionate professionals dedicated to unlocking ",
      color: "text-[#22252d]",
    },
    { text: "your brand's", color: "text-[#2557e6]" },
    { text: " full potential and ", color: "text-[#22252d]" },
    { text: "help you turn a profit", color: "text-[#e8b008]" },
    { text: ".", color: "text-[#22252d]" },
  ];

  return (
    <section className="w-full py-16 font-h3  tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] font-[number:var(--h3-font-weight)]">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-transparent">
          {textContent.map((segment, index) => (
            <span
              key={index}
              className={`${segment.color} font-h3 [font-style:var(--h3-font-style)] font-[number:var(--h3-font-weight)] tracking-[var(--h3-letter-spacing)] md:leading-[var(--h3-line-height)] text-xl leading-normal md:text-5xl lg:text-[77px]`}
            >
              {segment.text}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
};
