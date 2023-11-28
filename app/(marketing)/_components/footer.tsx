import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-neutral-100 border-b  p-4">
      <div className="md:max-w-screen-2xl w-full flex justify-between items-center">
        <Logo />
        <div className="md:w-auto md:block flex justify-between items-center w-full space-x-4 ">
          <Button size={"sm"} variant={"ghost"} asChild>
            <Link href={"/sign-in"}>Privacy Policy</Link>
          </Button>
          <Button size={"sm"} variant={"ghost"} asChild>
            <Link href={"/sign-up"}>Term and Condition</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
