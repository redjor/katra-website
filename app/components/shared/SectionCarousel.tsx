import Container from "@/app/components/layout/Container";
import FeaturedCarousel from "@/app/components/shared/FeaturedCarousel";
import { ReactNode } from "react";

type SectionCarouselProps = {
  title?: string;
  description?: string;
  children: ReactNode;
};

export default function SectionCarousel({
  title,
  description,
  children,
}: SectionCarouselProps) {
  return (
    <Container>
      <div className="pb-3 md:pb-4">
        <div className="max-w-[800px] text-xl font-light uppercase text-aluminium md:text-4xl">
          {title}
        </div>
        <div className="max-w-[600px] pt-4 text-white">{description}</div>
      </div>
      <FeaturedCarousel>{children}</FeaturedCarousel>
    </Container>
  );
}
