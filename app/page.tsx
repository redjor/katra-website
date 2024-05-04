import { createClient } from "@/prismicio";
import { Metadata } from "next";
import HomepageIntro from "@/app/components/homepage/Intro";
import HomepageFeaturedProjects from "@/app/components/homepage/FeaturedProjects";
import HomepageExplain from "@/app/components/homepage/HomepageExplain";

export default async function Home() {
  const client = createClient();
  const homepage = await client.getSingle("homepage", {
    lang: "fr-fr",
    fetchLinks: [
      "project.title",
      "project.cover",
      "project.logo",
      "project.categories",
      "project.client",
      "series.uid",
      "series.title",
      "series.thumbnail",
      "series.description",
    ],
  });

  return (
    <div className="relative block">
      <HomepageIntro bgImg={homepage.data.intro_background} />
      <HomepageExplain />
      <HomepageFeaturedProjects projects={homepage.data.featured_projects} />
    </div>
  );
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const client = createClient();
  const home = await client.getSingle("homepage", { lang: locale });
  return {
    title: home.data.meta_title,
    description: home.data.meta_description,
    openGraph: {
      title: home.data.meta_title || "",
      description: home.data.meta_description || "",
      type: "website",
      locale: locale,
      images: [
        {
          url: home.data.meta_image.url || "",
          width: home?.data?.meta_image?.dimensions?.width || 0,
          height: home?.data?.meta_image?.dimensions?.height || 0,
          alt: home.data.meta_image.alt || "Og Image Alt",
        },
      ],
    },
  };
}
