'use client'
import {Navigation} from 'swiper/modules';
import {Swiper} from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {ReactNode} from "react";

type FeaturedCarouselProps = {
    slidesPerView?: number;
    children: ReactNode;
}

export default function FeaturedCarousel({slidesPerView, children}: FeaturedCarouselProps) {
    const breakpoints = {
        1536: {
            slidesPerView: 5,
            slidesPerGroup: 5,
            spaceBetween: 16,
        },
        1280: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 16,
        },
        1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 6,
        },
        640: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 4,
        },
        320: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 6,
        },
    }
    return (
        <Swiper
            className="featured-carousel relative overflow-hidden"
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={slidesPerView || 6}
            pagination={{clickable: true}}
            scrollbar={{draggable: true}}
            freeMode={{
                enabled: true,
                sticky: true
            }}
            navigation={{
                nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev',
            }}
            speed={800}
            watchSlidesProgress={true}
            breakpoints={breakpoints}
        >
            <button className="swiper-button swiper-button-prev">
                <div
                    className="duration-400 absolute right-0 top-1/2 hidden w-16 -translate-y-1/2 cursor-pointer items-center justify-center bg-opacity-50 transition-all hover:scale-105 sm:block md:flex"
                >
                    <img
                        src="/assets/img/left-arrow.svg"
                        alt="left-arrow"
                        width="16px"
                        height="16px"
                    />
                </div>
            </button>
            {children}
            <button className="swiper-button swiper-button-next">
                <div
                    className="duration-400 absolute left-0 top-1/2 hidden w-16 -translate-y-1/2 cursor-pointer items-center justify-center bg-opacity-50 transition-all hover:scale-105 sm:block md:flex"
                >
                    <img
                        src="/assets/img/right-arrow.svg"
                        alt="right-arrow"
                        width="16px"
                        height="16px"
                    />
                </div>
            </button>
        </Swiper>
    )
}