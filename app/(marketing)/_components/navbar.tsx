import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full flex items-center bg-neutral-100 border-b h-14 px-4">
      <div className="md:max-w-screen-2xl w-full flex justify-between items-center">
        <Logo />
        <div className="md:w-auto md:block flex items-center justify-between w-full space-x-4 ">
          <Button size={"sm"} variant={"outline"} asChild>
            <Link href={"/sign-in"}>Log in</Link>
          </Button>
          <Button size={"sm"} asChild>
            <Link href={"/sign-up"}>Get Notin for now</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
