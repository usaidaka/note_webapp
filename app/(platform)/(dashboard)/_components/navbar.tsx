import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobilesidebar";

const Navbar = () => {
  return (
    <nav className="sticky z-50 px-4 top-0 w-full h-14 border-b bg-white flex justify-between items-center">
      <MobileSidebar />
      <div className="hidden md:flex  items-center gap-x-6">
        <Logo />
        <Button
          variant={"primary"}
          size={"sm"}
          className="hidden round-sm px-2 py-1.5 h-auto md:block"
        >
          Create
        </Button>
      </div>
      <div className="flex gap-x-4 justify-between md:justify-end w-full">
        <Button
          variant={"primary"}
          size={"sm"}
          className="round-sm px-2  block md:hidden"
        >
          <Plus />
        </Button>
        <div className="flex items-center justify-between">
          <OrganizationSwitcher
            hidePersonal
            afterCreateOrganizationUrl={"/organization/:id"}
            afterSelectOrganizationUrl={"/organization/:id"}
            afterLeaveOrganizationUrl="/select-org"
            appearance={{
              elements: {
                rootBox: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                },
              },
            }}
          />
          <UserButton
            afterSignOutUrl="/"
            appearance={{
              elements: {
                avatarBox: {
                  width: 30,
                  height: 30,
                },
              },
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
