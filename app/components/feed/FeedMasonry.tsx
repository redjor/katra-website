'use client'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";

export default function FeedMasonry({cards}: { cards: any[] }) {
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
        >
            <Masonry>
                {cards.map((card: any, index: any) => (
                    <img src={card.media.url}/>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}

