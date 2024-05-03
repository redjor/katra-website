import { ColorField, KeyTextField } from "@prismicio/types";

export default function ProjectDescription({
  description,
  color,
}: {
  description?: KeyTextField | undefined;
  color?: ColorField | null;
}) {
  // @ts-ignore
  return (
    <section>
      <div
        className="text-lg font-semibold text-white"
        style={{ color: color || "#ffffff" }}
      >
        {description}
      </div>
    </section>
  );
}
