import { ProjectDocumentDataPhotographesItem } from "@/prismicio-types";
import { ColorField } from "@prismicio/types";

export default function ProjectPhotographers({
  photographers,
  text_color,
}: {
  photographers: ProjectDocumentDataPhotographesItem[];
  text_color: ColorField;
}) {
  return (
    <div className="flex w-full justify-start md:justify-end">
      <div className="flex w-full justify-start md:justify-end">
        <div className="flex flex-col gap-2 text-white md:flex-row md:items-baseline md:gap-12">
          <span
            className="text-sm font-medium uppercase"
            style={{ color: text_color || "#fff" }}
          >
            Photographes
          </span>
          <div className="flex gap-4">
            {photographers.map((photographer: any) => (
              <span
                style={{ color: text_color || "#fff" }}
                className="font-bold"
                key={photographer.id}
              >
                {photographer.photograph_name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
