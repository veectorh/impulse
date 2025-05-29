import React from "react";

export const GroupByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-10 md:py-16 md:px-16">
      <div className="relative w-full bg-[url(/background.svg)] bg-contain bg-center py-10 md:py-20 px-6 md:px-16 rounded-2xl">
        <div className="flex flex-col items-start max-w-[1362px] mx-auto">
          <div className="relative w-full mb-4">
            <h1 className="font-['Playfair_Display',Helvetica] text-[#f5f7fd] text-3xl md:text-[64px] md:leading-[70px] lg:text-[80px] lg:leading-[85px] xl:text-[132px] xl:leading-[158.4px]">
              <span className="font-normal">Create a </span>
              <span className="font-semibold">voice</span>
            </h1>
            <img
              className="absolute w-6 md:w-10 lg:w-16 xl:w-20 top-2 md:top-[20px] lg:top-[20px] xl:top-[50px] right-10 md:right-14 lg:right-40"
              alt="Quotation mark"
              src="/--3.svg"
            />
          </div>

          <div className="relative w-full mb-4">
            <div className="relative w-full">
              <h1 className="font-['Playfair_Display',Helvetica] text-[#f5f7fd] text-3xl  md:text-[64px] md:leading-[70px] lg:text-[80px] lg:leading-[85px] xl:text-[132px] xl:leading-[158.4px] text-right">
                <span className="font-normal"> your </span>
                <span className="font-semibold">audience</span>
              </h1>
              <img
                className="absolute w-16 md:w-[100px] lg:w-[180px] xl:w-[251px] top-3 md:top-[30px] xl:top-[70px] left-[0px] lg:left-[29px]"
                alt="Decorative line"
                src="/vector-12.svg"
              />
            </div>
          </div>

          <div className="relative w-full">
            <img
              className="absolute w-6 md:w-10 lg:w-16 xl:w-20 top-2 md:top-5 xl:top-11 left-0"
              alt="Quotation mark"
              src="/--3.svg"
            />
            <h1 className="font-['Playfair_Display',Helvetica] text-[#f5f7fd] text-3xl md:text-[64px] md:leading-[70px] lg:text-[80px] lg:leading-[85px] xl:text-[132px] xl:leading-[158.4px] ml-8 md:ml-16 lg:ml-24">
              <span className="font-semibold">connect</span>
              <span className="font-normal"> with</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};
