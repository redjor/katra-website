import {createClient} from '@/prismicio';
import ProjectsFeaturedCarousel from "@/app/components/projects/FeaturedCarousel";
import ProjectsCategoriesList from "@/app/components/projects/CategoriesList";
import {Metadata} from "next";
import LatestProjectsCarousel from "@/app/components/projects/LatestProjectsCarousel";
import LatestVideos from "@/app/components/projects/LatestVideos";

function filterProjectsByCategory(categoryId: any, projects: any) {
    return projects.filter((project: any) => {
        return project.data.categories[0].category.id === categoryId;
    });
}

async function fetchProjectPage() {
    const client = createClient();
    return await client.getSingle('projects', {
        lang: 'fr-fr', fetchLinks: [
            'project.title',
            'project.short_title',
            'project.cover',
            'project.logo',
            'project.description',
            'project.categories',
            'project.client',
            'project.date',
            'series.uid',
            'series.title',
            'series.thumbnail',
            'series.description',
            'videos.uid',
            'videos.title',
            'videos.video',
        ],
    })
}

async function fetchProjectCategories() {
    const client = createClient();
    return await client.getAllByType('project_category', {
        lang: 'fr-fr',
        pageSize: 10,
    })
}

async function fetchProjects() {
    const client = createClient();
    return await client.getAllByType('project', {
        lang: 'fr-fr',
        pageSize: 10,
        orderings: [{field: 'my.project.date', direction: 'desc'}],
    })
}


export default async function Projects() {
    const projectPageResponse = fetchProjectPage();
    const categoriesResponse = fetchProjectCategories()
    const projectsResponse = fetchProjects()
    const [page, categories, projects] = await Promise.all([projectPageResponse, categoriesResponse, projectsResponse])

    const {data: PageData} = page;
    const {featured_projects, top_videos} = PageData

    const categoriesWithProjects = categories.map(category => {
        const projectsForCategory = filterProjectsByCategory(category.id, projects);
        return {category, projects: projectsForCategory};
    });

    return (
        <>
            <div className="h-0">
                <h1 className="invisible">Découvrez les projets du Studio Katra</h1>
            </div>
            <ProjectsFeaturedCarousel projects={featured_projects}/>
            <div className="z-10 space-y-16 py-12">
                {categoriesWithProjects ? <LatestProjectsCarousel projects={categoriesWithProjects}/> : null}
                {categories ? <ProjectsCategoriesList categories={categories}/> : null}
                {top_videos ? <LatestVideos videos={top_videos}/> : null}
            </div>
        </>
    )
}

export async function generateMetadata({params: {locale},}: {
    params: { locale: string };
}): Promise<Metadata> {
    const client = createClient();
    const projectsPage = await client.getSingle("projects", {lang: locale});
    return {
        title: projectsPage.data.meta_title,
        description: projectsPage.data.meta_description,
        openGraph: {
            title: projectsPage.data.meta_title || "",
            description: projectsPage.data.meta_description || "",
            type: "website",
            locale: locale,
            images: [
                {
                    url: projectsPage.data.meta_image.url || "",
                    width: projectsPage?.data?.meta_image?.dimensions?.width || 0,
                    height: projectsPage?.data?.meta_image?.dimensions?.height || 0,
                    alt: projectsPage.data.meta_image.alt || "Og Image Alt",
                },
            ],
        }
    };
}