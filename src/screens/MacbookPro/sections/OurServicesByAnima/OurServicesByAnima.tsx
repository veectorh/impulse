import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

// Service data for mapping
const services = [
  {
    icon: "/vuesax-linear-firstline.svg",
    title: "Content Creation",
    description: [
      "Engaging blog posts and articles",
      "SEO-optimized website copy",
      "Whitepapers, case studies, and more",
    ],
  },
  {
    icon: "/vuesax-linear-document-favorite.svg",
    title: "Marketing Strategies",
    description: [
      "1. Social media management",
      "2. Email campaigns that convert",
      "3. Data-driven advertising solutions",
    ],
  },
  {
    icon: "/vuesax-linear-emoji-happy.svg",
    title: "Brand Development",
    description: [
      "1. Comprehensive rebranding services",
      "2. Visual identity creation",
      "3. Storytelling for a global audience",
    ],
  },
];

export const OurServicesByAnima = (): JSX.Element => {
  return (
    <section className="relative w-full py-8 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative h-full">
          <img
            className="absolute w-[332px] h-[379px] top-[234px] left-0"
            alt="Decorative element"
            src="/--12.svg"
          />
          <img
            className="absolute w-[332px] h-[299px] bottom-0 right-0"
            alt="Decorative element"
            src="/-.svg"
          />
          <img
            className="absolute w-[334px] h-[274px] top-0 right-[20%]"
            alt="Decorative element"
            src="/--9.svg"
          />
          <div className="absolute inset-0 mx-auto w-full max-w-[1728px] bg-[#eaefff66] backdrop-blur-md" />
        </div>
      </div>

      {/* Content container */}
      <div className="relative flex flex-col items-center max-w-[1594px] mx-auto gap-[108px] px-4">
        {/* Section header */}
        <div className="flex flex-col w-full max-w-[852px] items-center gap-4">
          <h2 className="font-['Playfair_Display',Helvetica] font-bold text-[#22252d] text-3xl md:text-[52px] lg:text-[101px] text-center lg:leading-[121.2px]">
            Our Services
          </h2>
          <p className="font-['Lato',Helvetica] font-normal text-[#4b5061] md:text-lg lg:text-[26px] text-center lg:leading-[31.2px]">
            we offer tailored services that meet the unique needs of businesses
            across industries. From content creation to brand development, we
            ensure every solution drives impactful results.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-3 gap-8 lg:w-full">
          {services.map((service, index) => (
            <Card key={index} className="bg-[#f5f7fd] rounded-2xl">
              <CardContent className="flex flex-col items-start gap-4 md:gap-8 p-4 md:p-8">
                <img
                  className="flex-none h-10 md:h-20"
                  alt={`${service.title} icon`}
                  src={service.icon}
                />
                <div className="flex flex-col items-start gap-1 md:gap-4 w-full">
                  <h3 className="font-['Playfair_Display',Helvetica] font-bold text-[#22252d] text-lg md:text-2xl lg:text-[36px] md:leading-[54px]">
                    {service.title}
                  </h3>
                  <p className="font-['Lato',Helvetica] font-normal text-[#4b5061] text-sm md:text-base lg:text-xl leading-8">
                    {service.description.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}
                        {i < service.description.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
