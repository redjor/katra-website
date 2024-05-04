import MarqueeBlock from "@/app/components/shared/MarqueeBlock";
import { asText } from "@prismicio/client";
import Image from "next/image";
import { createClient } from "@/prismicio";

async function getNextProjectUid(actualProjectUid: string, projectData: any) {
  if (projectData?.next_project.link_type === "Document") {
    return projectData?.next_project.uid;
  }
  const randomProject = await getARandomProjectUid(
    actualProjectUid,
    projectData?.categories[0].category.id,
  );

  return randomProject.uid;
}

async function getARandomProjectUid(categoryId: any, actualProjectUid: string) {
  const graphQuery = `
      query {
        allProjects(
          lang: "fr-fr",
          sortBy: my_project.date_DESC,
          first: 24,
          where: { my_project: { categories: { category: { _eq: "${categoryId}" } } } }
        ) {
          edges {
            node {
              _meta {
                id
              }
            }
          }
        }
      }
    `;

  const client = createClient();
  // @ts-ignore

  const randomProjects = await client.get(graphQuery);
  const filteredProjects = randomProjects.results.filter(
    (project) => project.uid !== actualProjectUid,
  );
  const randomIndex = Math.floor(Math.random() * filteredProjects.length);
  return filteredProjects[randomIndex];
}

export default async function ProjectNextProject({
  projectUid,
  projectData,
}: {
  projectUid: any;
  projectData: any;
}) {
  const client = createClient();
  const ProjectResponse = await client.getByUID("project", projectUid, {
    lang: "fr-fr",
  });

  const { data: ProjectData } = ProjectResponse;

  return (
    <section className="mt-12 md:mt-24">
      <MarqueeBlock text="Projets" icon="projets-icon-aluminium" />
      <div className="group relative inline-block w-full cursor-pointer">
        <div className="relative float-right w-4/5">
          <div className="relative aspect-video overflow-hidden pl-48">
            <Image
              src={ProjectData.cover.url || ""}
              alt="image"
              className="opacity-75 blur-none transition duration-700 hover:blur-none md:opacity-100 md:blur-xl"
            />
          </div>
        </div>
        <div className="absolute left-0 top-1/2 ml-6 -translate-y-1/2 md:ml-12">
          <div className="text-sm font-light uppercase leading-none text-aluminium md:text-lg">
            <span>{ProjectData.client}</span>
          </div>
          <div className="relative inline-flex text-2xl font-extrabold uppercase leading-none text-white md:text-4xl">
            {asText(ProjectData.title)}
          </div>
          <img
            src="/assets/img/left-arrow-link-icon.svg"
            alt="left-arrow-link-icon"
            className="mt-8 hidden transition-all group-hover:translate-x-1 md:block"
          />
        </div>
      </div>
    </section>
  );
}
