import Image from "next/image";

export default function FeedCard({media}: { media: any }) {

    const openFeedModal = () => {
        openFeedModal();
    }
    return (
        <div className="relative" onClick={openFeedModal}>
            <Image src={media.media.url} alt={"Feed"}
                   loading="lazy"
                   className="relative block w-full"
                   fill={true}
            />
        </div>
    )
}