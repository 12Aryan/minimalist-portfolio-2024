"use client";
import Approach from "@/components/Approach/Approach";
import Grid from "@/components/Grid/Grid";
import Testimonials from "@/components/Testimonials/Testimonials";
import Experience from "@/components/experience/Experience";
import { FloatingNav } from "@/components/floating-nav/FloatingNav";
import Hero from "@/components/hero/Hero";
import RecentProjects from "@/components/recent-projects/RecentProjects";
import { navItems } from "@/data";

import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className="" />
        <Hero />
        <Grid />
        <RecentProjects />
        <Testimonials />
        <Experience />
        <Approach />
      </div>
    </main>
  );
}
