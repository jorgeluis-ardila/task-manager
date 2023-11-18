import React, { useState } from "react";
import profile from "./profile.module.css";
import AnonimousUser from "../../../../assets/images/userMale.png";
import RegisteredUser from "../../../../assets/images/userMale.png";
import { useAuthentication } from "../../../../hooks/useAuthentication";

export function ProfileButton({
  isMobile,
  openModal,
  setOpenModal,
  setModalType,
  isLogged,
  userData,
}) {
  const { logOut } = useAuthentication(),
    [openDropdown, setOpenDropdown] = useState(false),
    menu = [
      {
        text: "Cuenta",
        onClick: () => {
          console.log("ABRIO LA CUENTA");
        },
      },
      {
        text: "Cerrar Sesión",
        onClick: () => {
          logOut();
          setOpenDropdown(false);
        },
      },
    ];

  const name = userData.displayName ? userData.displayName.split(" ")[0] : "";

  const handleClick = () => {
    if (isLogged && !isMobile) {
      setOpenDropdown((prevState) => !prevState);
    } else {
      setOpenModal(!openModal);
      setModalType("login");
    }
  };

  return (
    <div
      className={profile["profile-btn"]}
      onMouseEnter={() => isLogged && setOpenDropdown(true)}
      onMouseLeave={() => isLogged && setOpenDropdown(false)}
    >
      <button className={profile.trigger} onClick={handleClick}>
        <img
          src={
            isLogged
              ? userData.photoURL
                ? userData.photoURL
                : RegisteredUser
              : AnonimousUser
          }
          alt={`Hola ${name}`}
          title={`Hola ${name}`}
        />
      </button>
      {openDropdown && (
        <ul className={profile.menu}>
          {menu.map((menuItem, index) => (
            <li key={index} className={profile["menu-item"]}>
              <button
                className={profile["menu-item"]}
                onClick={menuItem.onClick}
              >
                {menuItem.text}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
