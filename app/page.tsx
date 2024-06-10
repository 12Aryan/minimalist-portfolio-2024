"use client";
import { FloatingNav } from "@/components/floating-nav/FloatingNav";
import { navItems } from "@/data";
import Hero from "@/features/hero/Hero";
import About from "@/features/about/About";
import RecentProjects from "@/features/recent-projects/RecentProjects";
import Testimonials from "@/features/Testimonials/Testimonials";
import Experience from "@/features/experience/Experience";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className="" />
        <Hero />
        <About />
        <RecentProjects />
        <Testimonials />
        <Experience />
      </div>
    </main>
  );
}
