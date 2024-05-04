import Image from "next/image";
import { ImageField } from "@prismicio/types";

interface IntroProps {
  bgImg: ImageField;
}

export default function HomepageIntro({ bgImg }: IntroProps) {
  const { url: bgUrl } = bgImg;

  return (
    <section
      id="intro"
      className="relative z-10 flex h-screen w-full items-center justify-center overflow-hidden bg-black"
    >
      <video
        poster="/katra_video_min.png"
        width="411"
        height="261"
        autoPlay
        muted
        loop
        playsInline
        className="relative z-10 mx-auto max-w-[280px] mix-blend-lighten md:max-w-full"
      >
        <source src="/assets/videos/katra_video_min.mp4" type="video/mp4" />
        <source src="/assets/videos/katra_video_min.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div id="ScrollDown" className="absolute bottom-0 z-10 mb-8 opacity-100">
        <div className="scroll-down-helper mx-auto"></div>
      </div>
      <div className="absolute inset-0 z-0 h-screen opacity-30">
        <Image src={bgUrl || ""} alt="Menu" fill={true} />
      </div>
    </section>
  );
}
