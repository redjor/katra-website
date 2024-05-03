import { createClient } from "@/prismicio";
import ProjectHeader from "@/app/components/project/ProjectHeader";
import ProjectTitle from "@/app/components/project/ProjectTitle";
import { asText } from "@prismicio/client";
import Row from "@/app/components/layout/Row";
import Container from "@/app/components/layout/Container";
import ProjectDescription from "@/app/components/project/ProjectDescription";
import ProjectCover from "@/app/components/project/ProjectCover";
import ProjectPublicationDate from "@/app/components/project/ProjectPublicationDate";
import ProjectCategories from "@/app/components/project/ProjectCategories";
import ProjectPhotographers from "@/app/components/project/ProjectPhotographers";
import ProjectPartners from "@/app/components/project/ProjectPartners";

export default async function ProjectPage({
  params,
}: {
  params: { uid: string };
}) {
  const projectId = params.uid;

  const client = createClient();
  const ProjectResponse = await client.getByUID("project", projectId, {
    lang: "fr-fr",
    fetchLinks: ["project_category.title"],
  });

  const { data: ProjectData } = ProjectResponse;

  return (
    <div className={projectId}>
      <div style={{ background: ProjectData.bg_color || "black" }}>
        <ProjectHeader
          cover={
            <ProjectCover
              cover={ProjectData.cover}
              title={asText(ProjectData.title)}
            />
          }
        >
          <ProjectTitle
            title={asText(ProjectData.title)}
            customer={ProjectData.client}
          />
          <ProjectPublicationDate date={ProjectData.realisation_date} />
        </ProjectHeader>
        <Container>
          <Row containerWidth="max-w-7xl">
            <div className="grid grid-cols-12 py-12 md:py-24">
              <div className="col-span-12 col-start-1 md:col-span-7 md:col-start-3">
                <ProjectDescription
                  description={ProjectData.description}
                  color={ProjectData.text_color}
                />
              </div>
            </div>
            <div className="flex w-full flex-col gap-12 py-6">
              <ProjectCategories
                categories={ProjectData.categories}
                color={ProjectData.text_color}
              />
              <ProjectPhotographers
                photographers={ProjectData.photographes}
                text_color={ProjectData.text_color}
              />
              <ProjectPartners
                partners={ProjectData.partners}
                text_color={ProjectData.text_color}
              />
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}
