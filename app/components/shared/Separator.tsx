import Image from "next/image";

export default function Separator() {
  return (
    <div className="flex w-full justify-center py-8">
      <Image
        src="/assets/img/separator.svg"
        alt="separator"
        width="446"
        height="17"
      />
    </div>
  );
}
