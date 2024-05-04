import { DateField } from "@prismicio/types";

export default function ProjectPublicationDate({
  date,
}: {
  date: Date | DateField;
}) {
  const publicationDate = () => {
    //@ts-ignore
    const newDate = new Date(date);
    return date
      ? newDate.toLocaleDateString(undefined, {
          year: "numeric",
          month: "long",
        })
      : null;
  };

  return (
    <div className="text-sm uppercase text-aluminium mix-blend-difference md:mix-blend-normal">
      {publicationDate()}
    </div>
  );
}
