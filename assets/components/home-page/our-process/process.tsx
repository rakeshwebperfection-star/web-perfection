import React from "react";
import Image from "next/image";
import finalimagebanner from "@/assets/images/home/finalimagebanner.gif";
import finalMob from "@/assets/images/home/final-GIF-mob.gif";

function ProcessSec() {
  return (
    <section className="relative overflow-hidden px-5 py-16 bg-[#2a2a2a] text-white sm:px-8 lg:px-14 lg:py-20">
      <div className="relative mx-auto max-w-[1400px]">
        <header className="mb-8 text-center sm:mb-10">
          <h2 className="text-3xl font-medium sm:text-4xl lg:text-5xl">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
        </header>

        {/* Desktop Image */}
        <Image
          src={finalimagebanner}
          alt="Our process desktop view"
          width={finalimagebanner.width}
          height={finalimagebanner.height}
          className="hidden h-auto w-full rounded-2xl md:block"
          priority
        />

        {/* Mobile Image */}
        <Image
          src={finalMob}
          alt="Our process mobile view"
          width={finalMob.width}
          height={finalMob.height}
          className="block h-auto w-full rounded-2xl md:hidden"
          priority
        />
      </div>
    </section>
  );
}

export default ProcessSec;