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
              Olá, eu sou{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Kevin Juliano",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Desenvolvedor Front-End",
                1000,
                "Desenvolvedor Mobile",
                1000,
                "Desenvolvedor Flutter",
                1000,
                "Desenvolvedor React",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Olá, eu sou Kevin, sou formado como Técnico de Informática e estou
            cursando Análise e Desenvolvimento de Sistemas na FATEC de Mogi das
            Cruzes. Programo nas linguagens Dart/Flutter, C#,
            Javascript/Typescript ReactJS e React Native, além de ter
            conhecimento de banco de dados MySQL.
          </p>
          <div>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-green-300 via-green-600 to-green-900 hover:bg-slate-200 text-white">
              <span className="block px-5 py-2">Me Contrate</span>
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-green-300 via-green-600 to-green-900 hover:bg-slate-800 text-white  mt-3">
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Baixar CV
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
