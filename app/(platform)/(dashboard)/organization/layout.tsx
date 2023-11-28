import React from "react";
import Sidebar from "../_components/sidebar";

const OrganizationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="max-w-6xl 2xl:max-w-screen-xl ">
      <div className="flex gap-x-7">
        <div className="w-64 shrink-9 hidden md:block">
          <Sidebar />
        </div>
        {children}
      </div>
    </main>
  );
};

export default OrganizationLayout;
