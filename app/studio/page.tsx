import Breadcrumbs from "@/app/components/shared/Breadcrumbs";
import Container from "@/app/components/layout/Container";
import { createClient } from "@/prismicio";
import { Metadata } from "next";
import { StudioPageDocument, StudioPageDocumentData } from "@/prismicio-types";

export default async function Studio() {
  const client = createClient();
  const studioPageResponse: StudioPageDocument = await client.getSingle(
    "studio_page",
    {
      lang: "fr-fr",
    },
  );
  const { data: StudioData }: { data: StudioPageDocumentData } =
    studioPageResponse;

  console.log(StudioData);

  return (
    <div className="pt-32">
      <Container>
        <Breadcrumbs icon="studio-icon-white" />
      </Container>
      <div>Slice Zone</div>
    </div>
  );
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const client = createClient();
  const studio = await client.getSingle("studio_page", { lang: locale });
  return {
    title: studio.data.meta_title,
    description: studio.data.meta_description,
    openGraph: {
      title: studio.data.meta_title || "",
      description: studio.data.meta_description || "",
      locale: locale,
    },
  };
}
