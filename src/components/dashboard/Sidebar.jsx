// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { BsArrowUpRightCircle } from "react-icons/bs";
// import { GrBook } from "react-icons/gr";
// import { LiaAngleRightSolid } from "react-icons/lia";
// import { usePathname } from "next/navigation";

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   // const [collapsedMenus, setCollapsedMenus] = useState(['Getting started'])
//   const pathname = usePathname();
//   // Extract user data and access token from the response
//   const { user } = data.data;
//   const accessToken = data.data.token;

//   // Store the access token and user data in localStorage
//   localStorage.setItem("accessToken", accessToken);
//   localStorage.setItem("userData", JSON.stringify(user));

//   const menus = [
//     {
//       header: {
//         title: "Team management",
//         // ic: <LiaAngleRightSolid />,
//         // link: "",
//         link: user.user_type === "Admin" ? "/dashboard/admin" : "/dashboard",

//         // if (user.user_type === "Admin") {
//         //   router.push("/dashboard/admin");
//         // } else {
//         //   router.push("/dashboard");
//         // }
//       },
//     },
//     {
//       header: {
//         title: "Schedule management",
//         // ic: <LiaAngleRightSolid />,
//         link: "/dashboard/schedule",
//       },
//       // items: [
//       //   {
//       //     label: "Schedule overview",
//       //     link: "#",
//       //     id: "createpaymentlink",
//       //   },
//       //   {
//       //     label: "Match details",
//       //     link: "#",
//       //     id: "createpaymentlink",
//       //   },
//     },
//   ];

//   // const getInitialCollapsedMenus = () => {
//   //   return menus
//   //     .filter((menu) => menu.items.some((item) => item.link === pathname))
//   //     .map((menu) => menu.header.title);
//   // };

//   const [collapsedMenus, setCollapsedMenus] = useState([]);

//   // useEffect(() => {
//   //   setCollapsedMenus(getInitialCollapsedMenus());
//   // }, [pathname]);

//   const toggleCollapse = (title) => {
//     setCollapsedMenus((prev) =>
//       prev.includes(title)
//         ? prev.filter((item) => item !== title)
//         : [...prev, title]
//     );
//   };

//   return (
//     <div
//       className={`fixed top-0 text-black left-0 p-6 min-h-screen sm:h-full sm:z-50 w-[307px] sidebar flex flex-col gap-[30px] overflow-y-auto
//     transition-transform duration-300 ease-in-out bg-black transform ${
//       isOpen ? "translate-x-0 " : "-translate-x-full"
//     }
//     lg:translate-x-0`}
//     >
//       <div className="bg-black ">
//         <div className="mb-6 space-y-4">
//           <Link
//             href={"/news"}
//             className="flex items-center gap-3 mt-20 cursor-pointer"
//           >
//             <div className="bg-[#9595951A] rounded-[10px] px-2.5 py-3">
//               <GrBook className="text-gray-500 text-[20px]" />
//             </div>
//             <div>
//               <h3 className="text-white font-medium text-[14px]">Changelog</h3>
//               <p className="text-gray-500 text-[12px]">
//                 View all recent updates here
//               </p>
//             </div>
//             {/* <BsArrowUpRightCircle className="text-gray-500" /> */}
//           </Link>
//           <Link
//             href={"/terms"}
//             className="flex items-center gap-3 cursor-pointer"
//           >
//             <div className="bg-[#9595951A] rounded-[10px] px-2.5 py-3">
//               <GrBook className="text-gray-500 text-[20px]" />
//             </div>
//             <div>
//               <h3 className="text-white font-medium text-[14px]">
//                 Terms of Service
//               </h3>
//               <p className="text-gray-500 text-[12px]">Learn about our terms</p>
//             </div>
//             {/* <BsArrowUpRightCircle className="text-gray-500" /> */}
//           </Link>
//         </div>

//         <div className="border border-[#9595951A] w-full mb-5"></div>

//         <div className="flex flex-col gap-5">
//           {menus.map((menu, index) => (
//             <div key={index} className="flex flex-col gap-3">
//               <Link
//                 href={menu.header.link}
//                 className="flex text-white text-[14px] font-medium items-center gap-2 px-2 rounded"
//                 onClick={() => toggleCollapse(menu.header.title)}
//               >
//                 <p className="text-[14px]">{menu.header.title}</p>
//                 <p className="ml-auto">{menu.header.ic}</p>
//               </Link>
//               {menu.items &&
//                 menu.items.length > 0 &&
//                 collapsedMenus.includes(menu.header.title) && (
//                   <ul className="lg:ml-8 ml-4">
//                     {menu.items.map((d) => (
//                       <Link
//                         href={d.link}
//                         onClick={toggleSidebar}
//                         key={d.id}
//                         className={`flex text-[#FFF] flex-col py-1 pl-6 border-l-2 border-[#9595951A] gap-4 text-[12px] ${
//                           pathname === d.link
//                             ? "text-[#C81E23] border-l-[#C81E23]"
//                             : ""
//                         }`}
//                       >
//                         {d.label}
//                       </Link>
//                     ))}
//                   </ul>
//                 )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { GrBook } from "react-icons/gr";
// import { usePathname } from "next/navigation";

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   const pathname = usePathname();
//   const [user, setUser] = useState(null); // State to store user data

//   // Fetch user data from localStorage on component mount
//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem("userData"));
//     if (userData) {
//       setUser(userData);
//     }
//   }, []);

//   const menus = [
//     {
//       header: {
//         title: "Team management",
//         link: user?.user_type === "Admin" ? "/dashboard/admin" : "/dashboard", // Dynamic link based on user role
//       },
//     },
//     {
//       header: {
//         title: "Schedule management",
//         link: "/dashboard/schedule",
//       },
//     },
//   ];

//   const [collapsedMenus, setCollapsedMenus] = useState([]);

//   const toggleCollapse = (title) => {
//     setCollapsedMenus((prev) =>
//       prev.includes(title)
//         ? prev.filter((item) => item !== title)
//         : [...prev, title]
//     );
//   };

//   return (
//     <div
//       className={`fixed top-0 text-black left-0 p-6 min-h-screen sm:h-full sm:z-50 w-[307px] sidebar flex flex-col gap-[30px] overflow-y-auto
//     transition-transform duration-300 ease-in-out bg-black transform ${
//       isOpen ? "translate-x-0 " : "-translate-x-full"
//     }
//     lg:translate-x-0`}
//     >
//       <div className="bg-black ">
//         <div className="mb-6 space-y-4">
//           <Link
//             href={"/news"}
//             className="flex items-center gap-3 mt-20 cursor-pointer"
//           >
//             <div className="bg-[#9595951A] rounded-[10px] px-2.5 py-3">
//               <GrBook className="text-gray-500 text-[20px]" />
//             </div>
//             <div>
//               <h3 className="text-white font-medium text-[14px]">Changelog</h3>
//               <p className="text-gray-500 text-[12px]">
//                 View all recent updates here
//               </p>
//             </div>
//           </Link>
//           <Link
//             href={"/terms"}
//             className="flex items-center gap-3 cursor-pointer"
//           >
//             <div className="bg-[#9595951A] rounded-[10px] px-2.5 py-3">
//               <GrBook className="text-gray-500 text-[20px]" />
//             </div>
//             <div>
//               <h3 className="text-white font-medium text-[14px]">
//                 Terms of Service
//               </h3>
//               <p className="text-gray-500 text-[12px]">Learn about our terms</p>
//             </div>
//           </Link>
//         </div>

//         <div className="border border-[#9595951A] w-full mb-5"></div>

//         <div className="flex flex-col gap-5">
//           {menus.map((menu, index) => (
//             <div key={index} className="flex flex-col gap-3">
//               <Link
//                 href={menu.header.link}
//                 className="flex text-white text-[14px] font-medium items-center gap-2 px-2 rounded"
//                 onClick={() => toggleCollapse(menu.header.title)}
//               >
//                 <p className="text-[14px]">{menu.header.title}</p>
//               </Link>
//               {menu.items &&
//                 menu.items.length > 0 &&
//                 collapsedMenus.includes(menu.header.title) && (
//                   <ul className="lg:ml-8 ml-4">
//                     {menu.items.map((d) => (
//                       <Link
//                         href={d.link}
//                         onClick={toggleSidebar}
//                         key={d.id}
//                         className={`flex text-[#FFF] flex-col py-1 pl-6 border-l-2 border-[#9595951A] gap-4 text-[12px] ${
//                           pathname === d.link
//                             ? "text-[#C81E23] border-l-[#C81E23]"
//                             : ""
//                         }`}
//                       >
//                         {d.label}
//                       </Link>
//                     ))}
//                   </ul>
//                 )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { GrBook } from "react-icons/gr";
import { usePathname } from "next/navigation";

const Sidebar = ({ isOpen, setIsSidebarOpen }) => {
  const pathname = usePathname();
  const [user, setUser] = useState(null); // State to store user data

  // Fetch user data from localStorage on component mount
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setUser(userData);
    }
  }, []);

  const menus = [
    {
      header: {
        title: "Team management",
        link: user?.user_type === "Admin" ? "/dashboard/admin" : "/dashboard", // Dynamic link based on user role
      },
    },
    {
      header: {
        title: "Schedule management",
        link: "/dashboard/schedule",
      },
    },
  ];

  const [collapsedMenus, setCollapsedMenus] = useState([]);

  const toggleCollapse = (title) => {
    setCollapsedMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div
      className={`fixed top-0 text-black left-0 p-6 min-h-screen sm:h-full sm:z-50 w-[307px] lg:z-0 z-[100] sidebar flex flex-col gap-[30px] overflow-y-auto
    transition-transform duration-300 ease-in-out bg-[#FFFFFF] border-r border-black/10 transform ${
      isOpen ? "translate-x-0 " : "-translate-x-full"
    }
    lg:translate-x-0`}
    >
      <div className="bg-[#FFFFFF] ">
        <div className="mb-6 space-y-4">
          <Link
            href={"/news"}
            className="flex items-center gap-3 mt-20 cursor-pointer"
            onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
          >
            <div className="bg-[#9595951A] px-2.5 py-3">
              <GrBook className="text-gray-500 text-[20px]" />
            </div>
            <div>
              <h3 className="text-black font-medium text-[14px]">Changelog</h3>
              <p className="text-[#6B6F76] text-[12px]">
                View all recent updates here
              </p>
            </div>
          </Link>
          <Link
            href={"/terms"}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
          >
            <div className="bg-[#9595951A] px-2.5 py-3">
              <GrBook className="text-[#6B6F76] text-[20px]" />
            </div>
            <div>
              <h3 className="text-black font-medium text-[14px]">
                Terms of Service
              </h3>
              <p className="text-gray-500 text-[12px]">Learn about our terms</p>
            </div>
          </Link>
        </div>

        {/* <div className="border border-[#9595951A] w-full mb-5"></div> */}

        <div className="flex flex-col gap-5 mt-5">
          {menus.map((menu, index) => (
            <div key={index} className="flex flex-col gap-3">
              <Link
                href={menu.header.link}
                className="flex text-black text-[14px] font-medium items-center gap-2 px-2 rounded"
                onClick={() => {
                  toggleCollapse(menu.header.title);
                  setIsSidebarOpen(false); // Close sidebar on link click
                }}
              >
                <p className="text-[14px]">{menu.header.title}</p>
              </Link>
              {menu.items &&
                menu.items.length > 0 &&
                collapsedMenus.includes(menu.header.title) && (
                  <ul className="lg:ml-8 ml-4">
                    {menu.items.map((d) => (
                      <Link
                        href={d.link}
                        onClick={() => setIsSidebarOpen(false)} // Close sidebar on link click
                        key={d.id}
                        className={`flex text-[#FFF] flex-col py-1 pl-6 border-l-2 border-[#9595951A] gap-4 text-[12px] ${
                          pathname === d.link
                            ? "text-[#C81E23] border-l-[#C81E23]"
                            : ""
                        }`}
                      >
                        {d.label}
                      </Link>
                    ))}
                  </ul>
                )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
