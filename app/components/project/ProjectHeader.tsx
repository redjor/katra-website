import Container from "@/app/components/layout/Container";
import Row from "@/app/components/layout/Row";
import { ReactNode } from "react";

export default function ProjectHeader({
  children,
  cover,
}: {
  children: ReactNode;
  cover: ReactNode;
}) {
  return (
    <header className="relative block size-full">
      <div className="relative z-0 block max-h-screen overflow-hidden">
        <div className="absolute inset-x-0 z-10"></div>
        {cover}
      </div>
      <div className="relative bottom-0 left-0 z-[1] max-h-screen w-full max-w-[800px] overflow-hidden py-8 mix-blend-difference md:pb-[44px] lg:absolute lg:w-1/2 lg:mix-blend-normal">
        <Container>
          <Row>{children}</Row>
        </Container>
      </div>
    </header>
  );
}
