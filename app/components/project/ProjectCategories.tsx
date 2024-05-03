import { ColorField } from "@prismicio/types";

export default function ProjectCategories({
  categories,
  color,
}: {
  categories: any;
  color: ColorField;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category: any) => (
        <div key={category.category.uid}>
          <span
            className="inline-block border px-[8px] py-[6px] text-sm font-bold uppercase leading-none opacity-75"
            //@ts-ignore
            style={{
              borderColor: color || "#ffffff",
              color: color || "#ffffff",
            }}
          >
            {category?.category?.data?.title}
          </span>
        </div>
      ))}
    </div>
  );
}
