"use client";

import Lottie from "react-lottie";
import * as animationData from "@/public/assets/loader/loader_min.json";
import { useEffect } from "react";

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    document.body.classList.add("menu-modal-open");

    return () => {
      document.body.classList.remove("menu-modal-open");
    };
  }, []);

  return (
    <div className="absolute inset-x-0 z-[100] flex h-screen w-screen items-center justify-center bg-black">
      <div className="max-w-[240px]">
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
}
