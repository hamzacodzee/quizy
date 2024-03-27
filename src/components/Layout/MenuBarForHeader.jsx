import React, { memo, useMemo } from "react";
import { Menubar } from "primereact/menubar";

const MenuBarForHeader = () => {
  const items = useMemo(() => {
    return [
      {
        label: "Home",
        icon: "pi pi-home",
        url: "/",
        className: window.location.pathname === "/" && "p-highlight",
      },
      {
        label: "Login",
        icon: "pi pi-user",
        url: "/login",
        className: window.location.pathname === "/login" && "p-highlight",
      },
      {
        label: "Signup",
        icon: "pi pi-user-plus",
        url: "/signup",
        className: window.location.pathname === "/signup" && "p-highlight",
      },
      {
        label: "OnlyUser",
        icon: "pi pi-lock",
        url: "/onlyuser",
        className: window.location.pathname === "/onlyuser" && "p-highlight",
      },
      {
        label: "OnlyAdmin",
        icon: "pi pi-lock",
        url: "/onlyadmin",
        className: window.location.pathname === "/onlyadmin" && "p-highlight",
      },
      {
        label: "AddSubject",
        icon: "pi pi-file",
        url: "/addexams",
        className: window.location.pathname === "/addexams" && "p-highlight",
      },
      {
        label: "AddQue",
        icon: "pi pi-question-circle",
        url: "/add-que",
        className: window.location.pathname === "/add-que" && "p-highlight",
      },
  
      {
        label: "Logout",
        icon: "pi pi-user-minus",
        url: "/logout",
        className: window.location.pathname === "/logout" && "p-highlight",
      },
    ]
  }, []);

  return (
    <div >
      <Menubar model={items} />
    </div>
  );
};

export default memo(MenuBarForHeader);
