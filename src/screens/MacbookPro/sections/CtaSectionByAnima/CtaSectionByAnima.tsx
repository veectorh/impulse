import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const CtaSectionByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-16 px-4 md:px-8">
      <Card className="w-full max-w-6xl mx-auto bg-[#ffc109] rounded-2xl border-none">
        <CardContent className="flex flex-col items-center gap-8 py-16 px-4 md:px-16">
          <div className="flex flex-col items-center gap-4 text-center w-full">
            <h2 className="font-h3 text-[#22252d] text-4xl md:text-5xl lg:text-[77px] leading-[1.2] md:font-semibold lg:font-normal">
              Do you want to stand out?
            </h2>
            <p className="font-['Lato',Helvetica] text-[#3a3e4c] text-lg md:text-xl leading-[1.2]">
              Your customers will only buy from you when they know and trust you
            </p>
          </div>

          <Button className="bg-[#2557e6] hover:bg-[#2557e6]/90 text-[#f5f7fd] font-['Lato',Helvetica] font-medium px-6 py-4 h-14 text-[15px]">
            Work with us
          </Button>
        </CardContent>
      </Card>
    </section>
  );
};
