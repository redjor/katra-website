'use client'
import SectionCarousel from "@/app/components/shared/SectionCarousel";
import {SwiperSlide} from "swiper/react";
import VideoCard from "@/app/components/videos/VideoCard";
import MarqueeBlock from "@/app/components/shared/MarqueeBlock";

export default function LatestVideos({videos}: { videos: any[] }) {
    return (
        <div>
            <MarqueeBlock text="Vidéos" icon="videos-icon-aluminium"/>
            <SectionCarousel>
                {videos.map(({video}, index) => (
                    <SwiperSlide key={index}>
                        <VideoCard video={video}/>
                    </SwiperSlide>
                ))}
            </SectionCarousel>
        </div>
    )
}