import {createClient} from '@/prismicio';
import ProjectsFeaturedCarousel from "@/app/components/projects/FeaturedCarousel";

export default async function Projects() {
    const client = createClient();
    const projects = await client.getSingle('projects', {
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
    const {data} = projects;
    const {featured_projects} = data
    return (
        <div>
            <div className="h-0">
                <h1 className="invisible">Découvrez les projets du Studio Katra</h1>
            </div>
            <ProjectsFeaturedCarousel projects={featured_projects}/>
        </div>
    )
}