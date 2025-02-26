"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { GrBook } from "react-icons/gr";
import { LiaAngleRightSolid } from "react-icons/lia";
import { usePathname } from "next/navigation";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // const [collapsedMenus, setCollapsedMenus] = useState(['Getting started'])
  const pathname = usePathname();

  const menus = [
    {
      header: {
        title: "Getting started",
        ic: <LiaAngleRightSolid />,
        link: "#",
      },
      items: [
        {
          label: "Registered teams",
          link: "#",
          id: "introduction",
        },
        {
          label: "Pending registrations",
          link: "#",
          id: "quickstart",
        },
        {
          label: "Upcoming matches",
          link: "#",
          id: "authentication",
        },
      ],
    },
    {
      header: {
        title: "Team management",
        ic: <LiaAngleRightSolid />,
        // link: "",
        link: "#",
      },
      items: [
        {
          label: "Team details",
          link: "#",
          id: "allcustomers",
        },
        {
          label: "Match History",
          link: "#",
          id: "allcustomers",
        },
      ],
    },
    // {
    //   header: {
    //     title: "Transaction",
    //     ic: <LiaAngleRightSolid />,
    //     link: "#",
    //   },
    //   items: [
    //     {
    //       label: "All transaction",
    //       link: "/dashboard/transaction",
    //       id: "transaction",
    //     },
    //   ],
    // },
    // {
    //   header: {
    //     title: "Wallet",
    //     ic: <LiaAngleRightSolid />,
    //     // link: "#",
    //     link: "#",
    //   },
    //   items: [
    //     {
    //       label: "Add Wallet",
    //       link: "/dashboard/wallet/add-wallet",
    //       // id: "allcustomers",
    //       id: "addWallet",
    //     },
    //     {
    //       label: "All Wallet",
    //       link: "/dashboard/wallet/all-wallet",
    //       // id: "createcustomer",
    //       id: "allWallet",
    //     },
    //     {
    //       label: "Wallet balance",
    //       link: "/dashboard/wallet/wallet-balance",
    //       id: "walletBalance",
    //     },
    //     {
    //       label: "Wallet Topup",
    //       link: "/dashboard/wallet/wallet-topup",
    //       id: "walletTopup",
    //     },
    //     {
    //       label: "Convert",
    //       link: "/dashboard/wallet/convert",
    //       id: "convert",
    //     },
    //     {
    //       label: "Payout",
    //       link: "/dashboard/wallet/payout",
    //       id: "Payout",
    //     },
    //     // {
    //     //   label: "Create Card",
    //     //   link: "/dashboard/wallet/create-card",
    //     //   id: "fund-card",
    //     // },
    //     // {
    //     //   label: "Fund Card",
    //     //   link: "/dashboard/wallet/fund-card",
    //     //   id: "fund-card",
    //     // },
    //   ],
    // },
    // {
    //   header: {
    //     title: "Card",
    //     ic: <LiaAngleRightSolid />,
    //     // link: "#",
    //     link: "#",
    //   },
    //   items: [
    //     {
    //       label: "Create Card",
    //       link: "/dashboard/card/create-card",
    //       id: "create-card",
    //     },
    //     {
    //       label: "Fund Card",
    //       link: "/dashboard/card/fund-card",
    //       // id: "createcustomer",
    //       id: "fund-card",
    //     },
    //   ],
    // },
    // {
    //   header: {
    //     title: "Payment plan",
    //     ic: <LiaAngleRightSolid />,
    //     link: "#",
    //   },
    //   items: [
    //     {
    //       label: "Create plan",
    //       link: "/dashboard/payment-plan/create",
    //       id: "createplan",
    //     },
    //     {
    //       label: "All plans",
    //       link: "/dashboard/payment-plan/all",
    //       id: "allplan",
    //     },
    //     {
    //       label: "Single plan",
    //       link: "/dashboard/payment-plan/single",
    //       id: "singleplan",
    //     },
    //     {
    //       label: "Edit plan",
    //       link: "/dashboard/payment-plan/edit",
    //       id: "editplan",
    //     },
    //     {
    //       label: "Checkout",
    //       link: "/dashboard/payment-plan/checkout",
    //       id: "checkout",
    //     },
    //     {
    //       label: "Subscribers",
    //       link: "/dashboard/payment-plan/subscriber",
    //       id: "subscriber",
    //     },
    //   ],
    // },
    // {
    //   header: {
    //     title: "Invoice",
    //     ic: <LiaAngleRightSolid />,
    //     link: "#",
    //   },
    //   items: [
    //     {
    //       label: "Create Invoice",
    //       link: "/dashboard/invoice/create",
    //       id: "create",
    //     },
    //     {
    //       label: "All Invoice",
    //       link: "/dashboard/invoice/all",
    //       id: "allinvoice",
    //     },
    //     {
    //       label: "Single Invoice",
    //       link: "/dashboard/invoice/single",
    //       id: "singleinvoice",
    //     },
    //   ],
    // },
    {
      header: {
        title: "Schedule management",
        ic: <LiaAngleRightSolid />,
        link: "#",
      },
      items: [
        {
          label: "Schedule overview",
          link: "#",
          id: "createpaymentlink",
        },
        {
          label: "Match details",
          link: "#",
          id: "createpaymentlink",
        },
        // {
        //   label: "Get all payment link",
        //   link: "/dashboard/getallpaymentlink",
        //   id: "getallpaymentlink/",
        // },
        // {
        //   label: "Get single payment link",
        //   link: "/dashboard/getsinglepaymentlink",
        //   id: "getsinglepaymentlink",
        // },
        // {
        //   label: "Edit payment link",
        //   link: "/dashboard/editpaymentlink",
        //   id: "editpaymentlink",
        // },

        // {
        //   label: "Payment link checkout",
        //   link: "/dashboard/paymentlinkcheckout",
        //   id: "paymentlinkcheckout",
        // },
      ],
    },
    {
      header: {
        title: "Settings",
        ic: <LiaAngleRightSolid />,
        link: "#",
      },
      items: [
        {
          label: "Tournament Settings",
          link: "#",
          id: "addpayroll",
        },
        {
          label: "User Settings",
          link: "#",
          id: "getallpayroll",
        },
        // {
        //   label: "Get single payroll",
        //   link: "/dashboard/payroll/singlepayroll",
        //   id: "getsinglepayroll",
        // },
        // {
        //   label: "Suspend and Activate Payroll",
        //   link: "/dashboard/payroll/suspendandActivatePayroll",
        //   id: "createcustomer",
        // },
        // {
        //   label: "Edit Payroll",
        //   link: "/dashboard/payroll/editpayroll",
        //   id: "createcustomer",
        // },
        // {
        //   label: "Delete Payroll",
        //   link: "/dashboard/payroll/deletepayroll",
        //   id: "createcustomer",
        // },
        // {
        //   label: "Add Beneficiary",
        //   link: "/dashboard/payroll/addbeneficiary",
        //   id: "createcustomer",
        // },
        // {
        //   label: "Delete Beneficiary",
        //   link: "/dashboard/payroll/deletebeneficiary",
        //   id: "createcustomer",
        // },
        // {
        //   label: "Disburse Payroll",
        //   link: "/dashboard/payroll/disbursepayroll",
        //   id: "createcustomer",
        // },
      ],
    },
    {
      header: {
        title: "Support",
        ic: <LiaAngleRightSolid />,
        link: "#",
      },
      items: [
        {
          label: "Support",
          link: "/support",
          id: "support",
        },
      ],
    },
  ];

  const getInitialCollapsedMenus = () => {
    return menus
      .filter((menu) => menu.items.some((item) => item.link === pathname))
      .map((menu) => menu.header.title);
  };

  const [collapsedMenus, setCollapsedMenus] = useState([]);

  useEffect(() => {
    setCollapsedMenus(getInitialCollapsedMenus());
  }, [pathname]);

  const toggleCollapse = (title) => {
    setCollapsedMenus((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div
      className={`fixed top-0 text-black left-0 p-6 min-h-screen sm:h-full sm:z-50 w-[307px] sidebar flex flex-col gap-[30px] overflow-y-auto
    transition-transform duration-300 ease-in-out bg-black transform ${
      isOpen ? "translate-x-0 " : "-translate-x-full"
    }
    lg:translate-x-0`}
    >
      <div className="bg-black ">
        <div className="mb-6 space-y-4">
          <Link
            href={"/news"}
            className="flex items-center gap-3 mt-20 cursor-pointer"
          >
            <div className="bg-[#9595951A] rounded-[10px] px-2.5 py-3">
              <GrBook className="text-gray-500 text-[20px]" />
            </div>
            <div>
              <h3 className="text-white font-medium text-[14px]">Changelog</h3>
              <p className="text-gray-500 text-[12px]">
                View all recent updates here
              </p>
            </div>
            {/* <BsArrowUpRightCircle className="text-gray-500" /> */}
          </Link>
          <Link
            href={"/terms"}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="bg-[#9595951A] rounded-[10px] px-2.5 py-3">
              <GrBook className="text-gray-500 text-[20px]" />
            </div>
            <div>
              <h3 className="text-white font-medium text-[14px]">
                Terms of Service
              </h3>
              <p className="text-gray-500 text-[12px]">Learn about our terms</p>
            </div>
            {/* <BsArrowUpRightCircle className="text-gray-500" /> */}
          </Link>
        </div>

        <div className="border border-[#9595951A] w-full mb-5"></div>

        <div className="flex flex-col gap-5">
          {menus.map((menu, index) => (
            <div key={index} className="flex flex-col gap-3">
              <Link
                href={menu.header.link}
                className="flex text-white text-[14px] font-medium items-center gap-2 px-2 rounded"
                onClick={() => toggleCollapse(menu.header.title)}
              >
                <p className="text-[14px]">{menu.header.title}</p>
                <p className="ml-auto">{menu.header.ic}</p>
              </Link>
              {menu.items &&
                menu.items.length > 0 &&
                collapsedMenus.includes(menu.header.title) && (
                  <ul className="lg:ml-8 ml-4">
                    {menu.items.map((d) => (
                      <Link
                        href={d.link}
                        onClick={toggleSidebar}
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
