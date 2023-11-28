import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
});

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="hover:opacity-75 hidden md:flex transition-all items-center gap-x-2">
        <Image src={"/logo.svg"} alt={"logo notin"} height={30} width={30} />
        <p className={cn("text-lg text-neutral-400", headingFont.className)}>
          Notin
        </p>
      </div>
    </Link>
  );
};
