export default function RowTitle({
  title,
  description,
  icon,
}: {
  title: string;
  description?: string;
  icon?: string;
}) {
  return (
    <div className="flex w-full">
      {icon && <div>{icon}</div>}
      <div>
        <div className="py-6 text-base font-extrabold uppercase md:text-2xl">
          {title}
        </div>
        {description && <div>{description}</div>}
      </div>
    </div>
  );
}
