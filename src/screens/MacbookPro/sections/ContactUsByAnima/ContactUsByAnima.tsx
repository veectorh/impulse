import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent, CardFooter } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Textarea } from "../../../../components/ui/textarea";

export const ContactUsByAnima = (): JSX.Element => {
  // Form field data for mapping
  const formFields = [
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "company", label: "Company" },
  ];

  return (
    <section className="flex flex-col items-center gap-[41px] p-4 md:p-16 bg-[#f5f7fd] rounded-2xl w-full">
      <div className="flex flex-col items-center gap-4">
        <h2 className="font-['Playfair_Display',Helvetica] font-bold text-[#22252d] text-3xl md:text-5xl lg:text-[101px] text-center md:leading-[121.2px]">
          Let&apos;s talk about your brand
        </h2>

        <p className="md:w-[600px] lg:w-[780px] font-['Lato',Helvetica] font-normal text-[#4b5061] text-base md:text-lg lg:text-[26px] text-center leading-[31.2px]">
          If you&apos;ve made it this far, I&apos;m sure we&apos;ve got business
          to discuss. Let us help you stand out in today&apos;s competitive
          market.
        </p>
      </div>

      <Card className="w-full md:w-[556px] border border-solid border-slate-200 shadow-shadow-sm rounded-lg">
        <CardContent className="p-6 space-y-4">
          {formFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-1.5">
              <Label
                htmlFor={field.id}
                className="font-['Inter',Helvetica] font-medium text-slate-950 text-sm leading-5"
              >
                {field.label}
              </Label>
              <Input
                id={field.id}
                className="h-9 bg-white rounded-md border border-solid border-slate-200"
              />
            </div>
          ))}

          <div className="flex flex-col gap-1.5">
            <Label
              htmlFor="message"
              className="font-small text-slate-950 text-[length:var(--small-font-size)]"
            >
              Your message
            </Label>
            <div className="relative">
              <Textarea
                id="message"
                placeholder="Type your message here."
                className="h-20 bg-white rounded-md border border-solid border-slate-200 resize-none text-[#687076] font-subtle text-[length:var(--subtle-font-size)]"
              />
              <img
                className="absolute w-4 h-4 bottom-2 right-2"
                alt="Textarea resize"
                src="/textarea-resize-thumb.svg"
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="px-6 pb-6 pt-0">
          <Button className="w-full bg-[#214ecc] text-[#f5f7fd] rounded-md font-body-medium text-[length:var(--body-medium-font-size)]">
            Send
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};
