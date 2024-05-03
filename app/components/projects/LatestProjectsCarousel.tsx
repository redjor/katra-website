'use client'
import SectionCarousel from "@/app/components/shared/SectionCarousel";
import {SwiperSlide} from "swiper/react";
import Link from "next/link";
import Image from "next/image";
import MarqueeBlock from "@/app/components/shared/MarqueeBlock";

export default function LatestProjectsCarousel({projects}: { projects: Array<any> }) {

    return (
        <>
            <MarqueeBlock text="Projets" icon="projets-icon-aluminium"/>
            {projects && projects.map((item: any, index: number) => (
                <div key={item.category?.data?.title || index}>
                    <SectionCarousel title={item.category?.data?.title || ''}>
                        {item.projects.map((project: any) => (
                            <SwiperSlide key={project.uid}>
                                <Link href={`/projects/${project?.data?.categories[0]?.category?.slug}/${project.uid}`}
                                      className="project-card block">
                                    <div className="project-card-carousel aspect-video">
                                        <Image src={project.data.cover.url} alt={project.data.title}
                                               fill={true}
                                               sizes="(max-width: 320px) 100vw"/>
                                    </div>
                                    <div className="line-clamp-1 pt-3 text-sm font-extrabold uppercase text-white">
                                        {project.data.title[0].text}
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </SectionCarousel>
                </div>
            ))}
        </>
    )
}