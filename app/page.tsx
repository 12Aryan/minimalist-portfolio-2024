import Grid from "@/components/Grid/Grid";
import { FloatingNav } from "@/components/floating-nav/FloatingNav";
import Hero from "@/components/hero/Hero";
import { NavItemsType } from "@/types/Types";
import { FaHome } from "react-icons/fa";

const navItemsData: Array<NavItemsType> = [
  { name: "Home", link: "/", icon: <FaHome /> },
];

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItemsData} className="" />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
