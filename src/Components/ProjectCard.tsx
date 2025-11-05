import { Project } from "@/types";
import React from "react";
import Image from "next/image";
import calendar from "@/assets/icons8-calendario-50.png";
import settings from "@/assets/icons8-ingeniería-50.png";
import about from "@/assets/icons8-signo-de-interrogación-50.png";
import github from "@/assets/icons8-github-50.png";
import world from "@/assets/icons8-globo-50.png";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-zinc-900 p-5 rounded-xl shadow-xl flex flex-col gap-2 relative">
      <h1 className="text-xl font-bold">{project.name}</h1>
      <img src={project.pic} className="rounded-xl" />
      <div className="bg-orange-500 rounded-full p-3 absolute right-5 hidden sm:block">
        <img src={project.icon} className=" w-12 h-12" />
      </div>
      <p className="text-green-500 font-bold">PROTOTIPO</p>
      <div className="flex flex-row gap-2 items-center">
        <Image src={calendar} alt="fecha" className="w-5" />
        <p>
          <span className="font-extrabold">Fecha: </span>
          {project.date}
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <Image src={about} alt="fecha" className="w-5 h-5 mt-2" />
        <p>
          <span className="font-extrabold">Descripción: </span>
          {project.desc}
        </p>
      </div>
      <div className="flex flex-row gap-2">
        <Image src={settings} alt="fecha" className="w-5 h-5 mt-2" />
        <p>
          <span className="font-extrabold">Tecnologías: </span>
          {project.tech}
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-4">
        <a
          target="_blank"
          className="flex flex-row gap-2 border-2 px-3 border-white p-2 rounded-2xl items-center justify-center transition-all hover:bg-zinc-500 hover:scale-105"
          href={project.url}
        >
          <Image src={world} alt="Github" className="w-8 h-8" />
          Visitar
        </a>
        <a
          target="_blank"
          className="flex flex-row gap-2 border-2 px-3 border-white p-2 rounded-2xl items-center justify-center transition-all hover:bg-zinc-500 hover:scale-105"
          href={project.git}
        >
          <Image src={github} alt="Github" className="w-8 h-8" />
          Github
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
