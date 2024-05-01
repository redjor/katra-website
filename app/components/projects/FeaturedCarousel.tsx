'use client'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Autoplay, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {PrismicRichText} from "@prismicio/react";
import Image from "next/image";
import Link from "next/link";

function truncateText(text: string, maxLength: number) {
    if (text.length <= maxLength) {
        return text;
    } else {
        return text.substring(0, maxLength) + '...';
    }
}

export default function ProjectsFeaturedCarousel({projects}: { projects: Array<any> }) {
    return (
        <div
            className="relative block max-h-screen w-full overflow-hidden"
        >
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                speed={1200}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    enabled: true,
                    clickable: true,
                }}
                simulateTouch={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="featured-projects-carousel relative top-auto w-full"
            >
                {projects.map(project => (
                    <SwiperSlide key={project.project.uid}>
                        <article
                            className="relative flex max-h-[80vh] min-h-[75vh] w-full overflow-hidden"
                        >
                            <div className="absolute bottom-0 left-0 z-[1] w-full">
                                <div
                                    className="xxl:w-1/3 absolute bottom-0 left-0 w-full max-w-[600px] py-4 pl-5 pr-[120px] md:py-12 md:pl-16 lg:w-1/2"
                                >
                                    <div className="text-4xl font-black uppercase leading-none md:text-6xl">
                                        <PrismicRichText
                                            field={project.project.data.short_title || project.project.data.title}/>
                                    </div>
                                    <div
                                        className="mt-2 text-sm leading-tight text-aluminium md:text-base"
                                    >
                                        {truncateText(project.project.data.description, 144)}
                                    </div>
                                    <Link
                                        href={`/projets/${project.project.data.categories[0]?.category?.slug}/${project.project.uid}`}
                                        className="cta mt-6 inline-block bg-black">
                                        Voir le projet
                                    </Link>
                                </div>
                            </div>
                            <div className="aspect-video overflow-hidden">
                                <div className="absolute inset-0 z-0 w-full overflow-hidden">
                                    <Image src={project.project.data.cover.url} alt={project.project.uid}
                                           className="absolute inset-0 size-full object-cover" width={1280}
                                           height={720}/>
                                    <div className="featuredProjectOverlay"></div>
                                </div>
                            </div>
                        </article>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="selecta-badge right-5 md:right-16">
                <img
                    src="/assets/img/selecta-icon-white.svg"
                    alt="icon selecta"
                    className="infinite-rotate"
                    width="80"
                    height="80"
                />
            </div>
        </div>
    )
}