import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

import { allProjects } from "contentlayer/generated";

const navigation = [

	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];

export default function Home() {
	const featured = allProjects.find((project) => project.slug === "cv")!;

	const sorted = allProjects
	  .filter((p) => p.published)
	  .filter(
		(project) =>
		  project.slug !== featured.slug 
  
	  );


	return (
		<div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
			<nav className="my-16 animate-fade-in">
				<ul className="flex items-center justify-center gap-4">
				<div className="flex">
					<Link
						href={`/projects/${featured.slug}`}
						className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
					>
						My CV
						<article className="relative w-full h-full p-4 md:p-8">
						{/* Content for the article */}
						</article>
					</Link>
					{navigation.map((item) => (
						<Link
						key={item.href}
						href={item.href}
						className="text-sm duration-500 text-zinc-500 hover:text-zinc-300 mr-4"
						>
						{item.name}
						</Link>
					))}

				</div>

				</ul>
			</nav>
			<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<Particles
				className="absolute inset-0 -z-10 animate-fade-in"
				quantity={100}
			/>
			<h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
				Geofrey Verse
			</h1>

			<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
			<div className="my-16 text-center animate-fade-in">





			<h2 className="text-sm text-zinc-500 ">
				Hi, I'm Geofrey, I'm building applications that redefine user experience and unleash the power of efficient APIs.

			</h2>

			<h2 className="text-sm text-zinc-500 " >
			
				With my expertise, I'll craft web solutions tailored to your unique needs. 
				Embrace the new wave of innovation because, when it comes to web applications, new is always better.

			</h2>

			<h2 className="text-sm text-zinc-500 " >
				<Link
						target="/contact"
						href="/contact"
						className="underline duration-500 hover:text-zinc-300"
					>
						Contact 
				</Link> 

				{" "}

				me today for a mind-blowing journey into the future of the web!

			</h2>







				{/**<h2 className="text-sm text-zinc-500 ">
					Hi, my name is Geofrey, I'm building serverless and open source
					solutions at{" "}
					<Link
						target="_blank"
						href="https://upstash.com"
						className="underline duration-500 hover:text-zinc-300"
					>
						Upstash
					</Link>

					<br />
					and working on{" "}
					<Link
						target="_blank"
						href="https://planetfall.io"
						className="underline duration-500 hover:text-zinc-300"
					>
						planetfall.io
					</Link>{" "}
					at night.
					</h2> **/}
			</div>
		</div>
	);
}
