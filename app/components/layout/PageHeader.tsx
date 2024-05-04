export default function PageHeader({
  title,
  description,
}: {
  title: string;
  description?: string | null;
}) {
  return (
    <>
      <div className="mt-12 flex w-full flex-col gap-8 py-12">
        <div className="relative block overflow-hidden">
          <h1 className=" pointer-events-auto grid w-full self-start text-3xl font-extrabold uppercase md:text-5xl">
            {title}
          </h1>
        </div>
        {description && (
          <div className=" relative flex w-full justify-start overflow-hidden md:justify-end">
            <div className=" max-w-[600px] translate-y-0 text-left text-sm uppercase leading-tight text-aluminium opacity-100 md:text-right">
              {description}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
