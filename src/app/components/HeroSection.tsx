"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-green-500 to-green-700">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Kevin",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Front-End Developer",
                1000,
                "Mobile Developer",
                1000,
                "Flutter and React Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum placeat
            nesciunt veritatis velit, repellendus, similique ab, quam autem
            saepe sunt repellat maxime dolor. Commodi quis vero tenetur,
            possimus unde repellendus.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-300 via-green-600 to-green-900 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-[1px] py-[1px] w-full sm:w-fit rounded-full bg-gradient-to-br from-green-300 via-green-600 to-green-900 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] rounded-full relative">
            <Image
              src="/images/midoriya-mac.png"
              alt="Profile Picture"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={400}
              height={400}
            />
            {/* <Image
              src="/images/anime-kevin.jpeg"
              alt="Profile Picture"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
