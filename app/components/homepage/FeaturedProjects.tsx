import Image from "next/image";
import { PrismicRichText } from "@prismicio/react";

export default function HomepageFeaturedProjects({
  projects,
}: {
  projects: Array<any>;
}) {
  const featuredProjects = projects.map((project) => project.project);
  return (
    <div id="projects-featured" className="relative block overflow-hidden">
      Marquee
      <div className="relative block overflow-hidden">
        {featuredProjects.map((project: any) => (
          <div
            className="relative z-0 h-screen w-full overflow-hidden opacity-80"
            key={project.uid}
          >
            <Image src={project.data.cover.url} alt="de" fill={true} />
            <PrismicRichText field={project.data.title} />
          </div>
        ))}
      </div>
    </div>
  );
}
