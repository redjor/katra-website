import Marquee from "react-fast-marquee";
import Image from "next/image";

export default function MarqueeBlock({ text, icon }: any) {
  const MarqueeText = () => {
    return (
      <div className="flex items-center justify-between whitespace-nowrap text-xl uppercase leading-none md:text-2xl">
        <div className="text-[6vw] font-bold text-white sm:text-[4vw] md:text-[2vw] lg:text-[1.5vw]">
          {text}
        </div>
        <div className="block w-[14vw] sm:w-[12vw] md:w-[8vw] lg:w-[6vw]"></div>

        <div className="block w-[6vw] sm:w-[4vw] md:w-[2vw] lg:w-[1.5vw]">
          <Image
            src={`/assets/img/${icon}.svg`}
            alt={icon}
            width={100}
            height={64}
          />
        </div>
        <div className="block w-[14vw] sm:w-[12vw] md:w-[8vw] lg:w-[6vw]"></div>
        <div className="text-[6vw] font-light text-aluminium sm:text-[4vw] md:text-[2vw] lg:text-[1.5vw]">
          {text}
        </div>
        <div className="block w-[14vw] sm:w-[12vw] md:w-[8vw] lg:w-[6vw]"></div>

        <div className="block w-[6vw] sm:w-[4vw] md:w-[2vw] lg:w-[1.5vw]">
          <Image
            src={`/assets/img/${icon}.svg`}
            alt={icon}
            width={100}
            height={64}
          />
        </div>
        <div className="block w-[14vw] sm:w-[12vw] md:w-[8vw] lg:w-[6vw]"></div>
      </div>
    );
  };

  return (
    <div className="py-6 md:py-12">
      <Marquee>
        <MarqueeText />
        <MarqueeText />
        <MarqueeText />
        <MarqueeText />
        <MarqueeText />
        <MarqueeText />
        <MarqueeText />
      </Marquee>
    </div>
  );
}
