"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SIDENAV_ITEMS } from "@/lib/constants";
import { SideNavItem } from "@/lib/types";
import { Button } from "@/components/ui/button";

const SideNav = () => {
  return (
    <aside className="h-screen  w-1/5 flex flex-col justify-center items-center bg-primary text-secondary sticky">
      {SIDENAV_ITEMS.map((item, idx) => {
        return <MenuItem key={idx} item={item} />;
      })}
      <Button className="bg-secondary text-primary hover:bg-secondary my-5">
        Download Resume
      </Button>
    </aside>
  );
};

export default SideNav;

const MenuItem = ({ item }: { item: SideNavItem }) => {
  const pathname = usePathname();

  return (
    <div className="py-3">
      <Link
        href={item.path}
        className={`hover:font-medium ${
          item.path === pathname ? "underline" : ""
        }`}
      >
        <span className="">{item.title}</span>
      </Link>
    </div>
  );
};
