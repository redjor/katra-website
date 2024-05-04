"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

export default function FeedMasonry({ cards }: { cards: any[] }) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {cards.map((card: any, index: any) => (
          <Image src={card.media.url} alt={card.media.title} />
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
}
