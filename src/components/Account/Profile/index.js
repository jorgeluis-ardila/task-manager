import React from "react";
import { Greeting } from "./Greeting";
import { ProfileButton } from "./ProfileButton";
import account from '../account.module.css'

export function ProfileBar() {
  return (
    <div
      className={account.bar}
    >
      <ProfileButton/>
      <Greeting/>
    </div>
  );
}