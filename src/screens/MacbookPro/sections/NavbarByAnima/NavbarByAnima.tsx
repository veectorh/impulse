import React from "react";
import { Button } from "../../../../components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "../../../../components/ui/sheet";
import { Menu } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export const NavbarByAnima = (): JSX.Element => {
  // Navigation menu items

  const ContactInfo = () => (
    <div className="flex items-center gap-1">
      <span className="font-['Lato',Helvetica] font-normal italic text-white text-xl leading-[24px]">
        Contact:
      </span>
      <span className="font-['Lato',Helvetica] font-normal italic text-white text-xl leading-[24px]">
        hello@impulse.com
      </span>
    </div>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#214ecc] flex w-full items-center justify-between px-4 md:px-16 py-4 md:py-10">
      {/* Logo */}
      <div className="flex-shrink-0">
        <img
          className="w-20 md:w-[154px] h-auto"
          alt="Logo"
          src="/logo-1-1.svg"
        />
      </div>

      {/* Desktop Contact and CTA */}
      <div className="hidden md:flex items-center gap-8">
        <ContactInfo />
        <Button className="h-14 bg-[#e8b008] rounded font-['Lato',Helvetica] font-medium text-[#22252d] text-[15px] leading-[18px]">
          Work with us
        </Button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-[300px] bg-[#214ecc] text-white">
            <VisuallyHidden>
              <SheetTitle>Mobile Navigation Menu</SheetTitle>
            </VisuallyHidden>
            <div className="flex flex-col gap-8 mt-8">
              <div className="flex flex-col gap-4">
                <ContactInfo />
                <Button className="h-14 bg-[#e8b008] rounded font-['Lato',Helvetica] font-medium text-[#22252d] text-[15px] leading-[18px] w-full">
                  Work with us
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
