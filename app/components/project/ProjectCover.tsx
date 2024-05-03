import Image from "next/image";
import { ImageField } from "@prismicio/types";

export default function ProjectCover({
  cover,
  title,
}: {
  cover: ImageField;
  title: string;
}) {
  return (
    <div className="project-cover relative aspect-video overflow-hidden">
      <Image
        src={cover.url || ""}
        alt={title}
        width={cover?.dimensions?.width}
        height={cover?.dimensions?.height}
      />
    </div>
  );
}
