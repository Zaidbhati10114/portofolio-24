"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";

import { useSectionInView } from "@/lib/hook";
import Project from "./project";
import Link from "next/link";
import { CircleChevronRight } from "lucide-react";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
        <div className="flex justify-center w-full">
          <Link target="_blank" href="https://github.com/Zaidbhati10114">
            <button
              type="button"
              className="text-white cursor-pointer rounded-md mt-3 bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <CircleChevronRight className="w-5 h-5 me-2 -ms-1" />
              More Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
