// "use client";
// import { usePathname } from "next/navigation";
// import React from "react";
// import NavbarAuth from "./NavbarAuth";

// const AppWrapper = ({ children }) => {
//   const pathName = usePathname();

//   return (
//     <div>
//       {pathName.startsWith("/(auth)") ? <NavbarAuth /> : ""}
//       {children}
//     </div>
//   );
// };

// export default AppWrapper;


"use client";
import { usePathname } from "next/navigation";
import React from "react";
import NavbarAuth from "./NavbarAuth";

const AppWrapper = ({ children }) => {
  const pathName = usePathname();

  // Check for specific auth-related paths
  const isAuthPage = ["/register", "/login", "/forgot-password", "/reset-password", "/verify-account", "/verify-email"].includes(pathName);

  return (
    <div>
      {isAuthPage ? <NavbarAuth /> : null}
      {children}
    </div>
  );
};

export default AppWrapper;
