'use client'
import SectionCarousel from "@/app/components/shared/SectionCarousel";
import Link from "next/link";
import {ProjectCategoryDocument} from "@/prismicio-types";
import {SwiperSlide} from "swiper/react";

type Props = {
    categories: ProjectCategoryDocument[],
}

export default function ProjectsCategoriesList({categories}: Props) {
    return (
        
        <SectionCarousel title="Catégories">
            {categories.map((category: ProjectCategoryDocument) => (
                <SwiperSlide key={category.uid}>
                    <Link href={`/projets/${category.uid}`} key={category.uid}
                          className="flex items-center justify-center border border-gray-700 p-6 text-aluminium
                     transition-all hover:border-white hover:text-white">
                    <span
                        className="whitespace-nowrap font-bold uppercase">{category.data.title}</span>
                    </Link>
                </SwiperSlide>
            ))}
        </SectionCarousel>
    )
}