"use client";

import { Button } from "@/components/ui/button";
import { SIDENAV_ITEMS } from "@/lib/constants";
import { SideNavItem } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {
  return (
    <aside className="flex flex-col justify-center items-center text-center bg-secondary text-primary p-12">
      {SIDENAV_ITEMS.map((item, idx) => {
        return <MenuItem key={idx} item={item} />;
      })}
      <Button className="bg-primary text-secondary my-5 before:ease relative overflow-hidden border transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-primary hover:before:-translate-x-40">
        Download Resume
      </Button>
    </aside>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();

  return (
    <div className="py-2">
      <Link
        href={item.path}
        className={`${
          item.path === pathname ? "font-semibold" : ""
        } hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-200 before:scale-x-0 before:bg-primary before:opacity-20 before:absolute before:left-0 before:bottom-0 `}
      >
        <span className=" text-xs">{item.title}</span>
      </Link>
    </div>
  );
};
