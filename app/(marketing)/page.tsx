import { Medal } from "lucide-react";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

import { Button } from "@/components/ui/button";

const headingFont = localFont({
  src: "../../public/fonts/font.woff2",
});

const textFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const Marketing = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 p-4">
      <div
        className={cn(
          "flex flex-col justify-center items-center space-y-4",
          headingFont.className
        )}
      >
        <div className=" bg-pink-200 text-pink-700 flex justify-center items-center p-4 rounded-full gap-2">
          <Medal className="h-7 w-7" />
          Your Favorite Activity Management Note
        </div>
        <h1 className="text-3xl text-center md:text-6xl">
          Write your thought to get your act !
        </h1>
        <div className="bg-gradient-to-r from-fuchsia-600 to-pink-400 p-4 text-2xl rounded-md font-bold text-white">
          Note Forward.
        </div>
      </div>
      <div
        className={cn(
          "text-xs text-center max-w-sm md:max-w-2xl text-neutral-400 mx-auto",
          textFont.className
        )}
      >
        Supercharge your productivity with Web Note Activity! Effortlessly
        organize your tasks, jot down ideas, and collaborate seamlessly. Elevate
        your note-taking experience today and stay on top of your game!
      </div>
      <Button size={"lg"} asChild>
        <Link href={"/sign-up"}>Get planning for now!</Link>
      </Button>
    </div>
  );
};

export default Marketing;
