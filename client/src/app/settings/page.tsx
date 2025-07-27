import Header from "@/components/Header";
import { CONST_USER, labelStyles, textStyles } from "@/lib/utils";
import React from "react";

const Settings = () => {

  return (
    <div className="p-8">
      <Header name="Settings" />
      <div className="space-y-4">
        <div>
          <label className={labelStyles}>Username</label>
          <div className={textStyles}>{CONST_USER.username}</div>
        </div>
        <div>
          <label className={labelStyles}>Email</label>
          <div className={textStyles}>{CONST_USER.email}</div>
        </div>
        <div>
          <label className={labelStyles}>Team</label>
          <div className={textStyles}>{CONST_USER.teamName}</div>
        </div>
        <div>
          <label className={labelStyles}>Role</label>
          <div className={textStyles}>{CONST_USER.roleName}</div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
