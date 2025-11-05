import React from "react";
import Image from "next/image";
import phone from "@/assets/icons8-teléfono-50.png";
import mail from "@/assets/icons8-correo-50.png";
import github from "@/assets/icons8-github-50.png";
import cv from "@/assets/icons8-plan-de-estudios-50.png";
import world from "@/assets/icons8-globo-50.png";

function Intro() {
  return (
    <div className=" flex sm:flex-row flex-col gap-10 justify-center sm:items-start items-center">
      <div className="flex flex-col justify-center gap-4 order-2 sm:order1">
        <h1 className="md:text-4xl text-3xl font-bold">
          José Manuel Fong López
        </h1>
        <h2 className="md:text-2xl text-xl">
          Licenciado en Sistemas Computacionales
        </h2>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-4 items-center">
            <Image src={phone} alt="Teléfono" className="w-6 h-6" />
            <p>+52 686 233 8904</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Image src={mail} alt="Correo" className="w-6 h-6" />
            <p>fomi03@gmail.com</p>
          </div>
          <div className="flex flex-row gap-4 items-center">
            <Image src={world} alt="Correo" className="w-6 h-6" />
            <p>Mexicali, B.C., México</p>
          </div>
        </div>
        <div className="flex flex-row text-md sm:text-lg gap-4 justify-center sm:justify-start">
          <a
            target="_blank"
            className="flex flex-row gap-2 border-2 px-3 border-white p-2 rounded-2xl items-center justify-center transition-all hover:bg-zinc-500 hover:scale-105"
            href="https://www.github.com/JoseFong"
          >
            <Image src={github} alt="Github" className="w-8 h-8" />
            <p className="hidden sm:block">Github</p>
          </a>
          <a
            target="_blank"
            className="flex flex-row gap-2 border-2 px-3 border-white p-2 rounded-2xl items-center justify-center transition-all hover:bg-zinc-500 hover:scale-105"
            href="https://drive.google.com/drive/folders/17rQIWSyHRJTkYLEvOWNr3ylztansTFFM?usp=sharing"
          >
            <Image src={cv} alt="Github" className="w-8 h-8" />
            <p className="hidden sm:block">Currículum</p>
          </a>
        </div>
      </div>
      <img
        src="https://i.imgur.com/bdRllK3.jpg"
        className="rounded-full border-white border-8 md:h-80 md:w-80 shadow-xl sm:h-64 sm:w-64 h-44 w-44 order-1 sm:order-2"
      />
    </div>
  );
}

export default Intro;
