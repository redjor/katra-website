'use client'
import SectionCarousel from "@/app/components/shared/SectionCarousel";
import {SwiperSlide} from "swiper/react";

export default function LatestVideos({videos}: { videos: Array<any> }) {
    return (
        <SectionCarousel>
            {videos.map(({video}, index) => (
                <SwiperSlide key={index}>
                    {video.uid}
                </SwiperSlide>
            ))}
        </SectionCarousel>
    )
}