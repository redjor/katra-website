import ScaledCard from "@/app/components/videos/ScaledCard";
import VideoThumb from "@/app/components/videos/VideoThumb";

export default function VideoCard({video}: any) {

    const HoverComponent = () => {
        return (
            <>
                <div>
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 48 49"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M24 48.3513C37.2548 48.3513 48 37.6062 48 24.3513C48 11.0965 37.2548 0.351318 24 0.351318C10.7452 0.351318 0 11.0965 0 24.3513C0 37.6062 10.7452 48.3513 24 48.3513ZM19.157 15.9002C19.2588 15.676 19.3916 15.5366 19.5641 15.459C19.8854 15.3196 20.0028 15.3196 20.3396 15.4356C20.8485 15.6137 33.3656 22.8675 33.6865 23.1774C33.9685 23.4481 34 23.5103 34 23.8586C34 24.2069 33.9685 24.2687 33.6865 24.5398C33.3026 24.9116 20.6838 32.1887 20.2219 32.3128C19.744 32.4368 19.3601 32.2586 19.1566 31.8174C19.0078 31.4926 19 31.2526 19 23.859C19 16.4731 19.0082 16.2255 19.157 15.9002Z"
                            fill="white"
                        />
                    </svg>
                </div>
                <div className="line-clamp-1 text-xs font-extrabold uppercase text-white">
                    {video.data.video.title}
                </div>
            </>
        )
    }


    return (
        <ScaledCard
            thumb={<VideoThumb
                title={video.data.video.title}
                cover={video.data.video.thumbnail_url}
                duration={video.data.video.duration}/>}
            hover={<HoverComponent/>}
        />
    )
}