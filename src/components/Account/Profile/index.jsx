import React from "react";
import account from '../account.module.css'

export function ProfileBar({children}) {
  return (
    <div
      className={account.bar}
    >
      {children}
    </div>
  );
}