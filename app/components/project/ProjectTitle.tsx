export default function ProjectTitle({
  title,
  customer,
}: {
  title: string;
  customer?: string | null;
}) {
  return (
    <div>
      {customer && (
        <span className="block text-base uppercase text-white mix-blend-difference md:text-lg md:leading-6 md:mix-blend-normal">
          {customer}
        </span>
      )}
      <h1 className="block text-3xl font-black uppercase leading-none mix-blend-difference md:text-4xl md:mix-blend-normal lg:text-5xl xl:text-6xl">
        {title}
      </h1>
    </div>
  );
}
