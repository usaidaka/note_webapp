import React from "react";

const CleckLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex justify-center items-center">{children}</div>
  );
};

export default CleckLayout;
