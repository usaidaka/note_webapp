import { OrganizationList } from "@clerk/nextjs";
import React from "react";

const SelectOrganization = () => {
  return (
    <div>
      <OrganizationList
        hidePersonal
        afterCreateOrganizationUrl={"/organization/:id"}
        afterSelectOrganizationUrl={"/organization/:id"}
      />
    </div>
  );
};

export default SelectOrganization;
