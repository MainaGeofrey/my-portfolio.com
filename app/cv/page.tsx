import Link from "next/link";
import React from "react";
import { allProjects } from "contentlayer/generated";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";
import { Eye } from "lucide-react";

export default function ProjectsPage() {
  const featured = allProjects.find((project) => project.slug === "cv")!;

  const sorted = allProjects
    .filter((p) => p.published)
    .filter(
      (project) =>
        project.slug !== featured.slug 

    );

  return (
    <div className="relative pb-16">


        <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 ">
         
            <Link href={`/projects/${featured.slug}`}>
              <article className="relative w-full h-full p-4 md:p-8">

              </article>
            </Link>
         


        </div>
        <div className="hidden w-full h-px md:block bg-zinc-800" />


      </div>
  
  );
}
