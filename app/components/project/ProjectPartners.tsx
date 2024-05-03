import { ProjectDocumentDataPartnersItem } from "@/prismicio-types";
import { ColorField } from "@prismicio/types";
import { asText } from "@prismicio/client";

export default function ProjectPartners({
  partners,
  text_color,
}: {
  partners: ProjectDocumentDataPartnersItem[];
  text_color?: ColorField;
}) {
  return (
    <div className="flex w-full justify-start md:justify-end">
      <div className="flex w-full justify-start md:justify-end">
        <div className="flex flex-col gap-2 text-white md:flex-row md:items-baseline md:gap-12">
          <span
            className="text-sm font-medium uppercase"
            style={{ color: text_color || "#fff" }}
          >
            Partenaires
          </span>
          <div className="flex gap-4">
            {partners.map((partner: any) => (
              <span
                style={{ color: text_color || "#fff" }}
                className="font-bold"
                key={partner.id}
              >
                {asText(partner.name)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
