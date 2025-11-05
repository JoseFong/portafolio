import { Project } from "@/types";
import React from "react";
import Image from "next/image";
import phone from "@/assets/icons8-teléfono-50.png";
import mail from "@/assets/icons8-correo-50.png";
import github from "@/assets/icons8-github-50.png";
import cv from "@/assets/icons8-plan-de-estudios-50.png";
import world from "@/assets/icons8-globo-50.png";
import ProjectCard from "@/Components/ProjectCard";

function Homepage() {
  const projects: Project[] = [
    {
      id: 1,
      name: "Tablero de tarjetas",
      icon: "https://cdn-icons-png.freepik.com/256/4161/4161941.png?semt=ais_white_label",
      pic: "https://i.imgur.com/VR0fFBO.png",
      date: "Sep 2025",
      desc: "Un tablero tipo Trello para organizar actividades en estados y columnas",
      tech: "Next, Typescript, Prisma, Vercel, Netlify, Tailwind",
      url: "https://tablerodetarjetas.netlify.app/",
      git: "https://github.com/JoseFong/tablero-trello",
    },
    {
      id: 2,
      name: "Inventario para tiendas",
      icon: "https://cdn-icons-png.flaticon.com/512/2897/2897785.png",
      pic: "https://i.imgur.com/dc26c3a.png",
      date: "Jun 2025",
      desc: "Sistema de gestión de inventarios para productos, proveedores y ventas para tiendas o negocios.",
      tech: "Next, Typescript, Prisma, Vercel, Netlify, Tailwind",
      url: "https://inventario-tienda-fong.netlify.app",
      git: "https://github.com/JoseFong/inventario-tienda",
    },
    {
      id: 3,
      name: "Agenda",
      icon: "https://images.vexels.com/media/users/3/206164/isolated/preview/9c2166c157dce721fdaaeec772e03c0b-icono-de-trazo-de-agenda-rosa.png",
      pic: "https://i.imgur.com/QjmtCpU.png",
      date: "Abr-May 2025",
      desc: "Agenda para llevar control de eventos o pendientes de forma organizada y estilizada.",
      tech: "Next, Typescript, Prisma, Vercel, Netlify, Tailwind",
      url: "https://agendajosefong.netlify.app/",
      git: "https://github.com/JoseFong/event-test",
    },
  ];

  const tecnologias = [
    "JavaScript",
    "TypeScript",
    "Java",
    "C",
    "C#",
    "SQL",
    "MySQL",
    "HTML",
    "CSS",
    "React",
    "Next",
    "Tailwind CSS",
    "NodeJs",
    "Prisma ORM",
    "PostgreSQL",
    "Vercel",
    "Netlify",
    "Figma",
    "Canva",
    "JWT",
    "REST APIs",
  ];

  return (
    <div className="max-w-screen min-h-screen p-8 pt-20 bg-zinc-800 text-white">
      <div className="z-10 w-screen bg-zinc-900 shadow-xl h-14 flex flex-row gap-8 text-lg items-center justify-center fixed top-0 left-0">
        <a href="#sobremi" className="hover:scale-110 transition-all">
          Sobre mi
        </a>
        <a href="#proyectos" className="hover:scale-110 transition-all">
          Proyectos
        </a>
        <a href="#experiencia" className="hover:scale-110 transition-all">
          Experiencia
        </a>
        <a href="#tecnologias" className="hover:scale-110 transition-all">
          Tecnologías
        </a>
      </div>
      <div className=" flex flex-row gap-10 justify-center">
        <div className="flex flex-col justify-center gap-4">
          <h1 className="text-4xl font-bold">José Manuel Fong López</h1>
          <h2 className="text-2xl">Licenciado en Sistemas Computacionales</h2>
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
          <div className="flex flex-row text-lg gap-4">
            <a
              target="_blank"
              className="flex flex-row gap-2 border-2 px-3 border-white p-2 rounded-2xl items-center justify-center transition-all hover:bg-zinc-500 hover:scale-105"
              href="https://www.github.com/JoseFong"
            >
              <Image src={github} alt="Github" className="w-8 h-8" />
              Github
            </a>
            <a
              target="_blank"
              className="flex flex-row gap-2 border-2 px-3 border-white p-2 rounded-2xl items-center justify-center transition-all hover:bg-zinc-500 hover:scale-105"
              href="https://drive.google.com/drive/folders/17rQIWSyHRJTkYLEvOWNr3ylztansTFFM?usp=sharing"
            >
              <Image src={cv} alt="Github" className="w-8 h-8" />
              Currículum
            </a>
          </div>
        </div>
        <img
          src="https://i.imgur.com/bdRllK3.jpg"
          className="rounded-full border-white border-8 h-80 shadow-xl"
        />
      </div>
      <h1
        className="mt-10 font-bold text-3xl text-center scroll-mt-20"
        id="sobremi"
      >
        Sobre mi
      </h1>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-row gap-6 items-center justify-center w-2/3">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
            className="w-32"
          />
          <p className="mt-5 w-2/3 text-justify">
            Soy José Fong, desarrollador web enfocado en crear aplicaciones
            funcionales y organizadas con tecnologías como Next.js, TypeScript,
            Prisma y Tailwind. Me apasiona transformar ideas en proyectos
            reales, cuidando tanto la lógica del código como la experiencia
            visual del usuario. Busco oportunidades para seguir creciendo
            profesionalmente, colaborar en proyectos desafiantes y aportar
            soluciones prácticas que generen impacto.
          </p>
        </div>
      </div>

      <h1
        className="mt-10 font-bold text-3xl text-center scroll-mt-20"
        id="proyectos"
      >
        Proyectos Personales
      </h1>
      <div className="w-full flex items-center justify-center">
        <p className="text-center w-2/3 mt-5 mb-6">
          Los siguientes proyectos son prototipos que he desarrollado como
          pasatiempo y para poner en práctica mis habilidades en el desarrollo
          de aplicaciones con Next, TypeScript y la gestión de datos con el ORM
          Prisma
        </p>
      </div>

      <div className="grid grid-cols-3 gap-8">
        {projects.map((p: Project) => (
          <ProjectCard project={p} />
        ))}
      </div>
      <h1
        className="mt-10 font-bold text-3xl text-center scroll-mt-20"
        id="experiencia"
      >
        Experiencia
      </h1>
      <div className="grid grid-cols-2 gap-6 p-6">
        <div className="border-2 rounded-xl p-4 flex flex-col gap-3">
          <h1 className="text-xl font-bold">Analista y Desarollador (2024)</h1>
          <h2 className="font-bold">Fundación Synapsis</h2>
          <ul className="list-disc list-inside">
            <li>Desarrollo de un ChatBot para atención al cliente.</li>
            <li>Configuración de punto de venta para servicio al cliente.</li>
            <li>
              Configuración de herramientas Zoho para la gestión empresarial.
            </li>
            <li>Automatización del proceso de ventas.</li>
            <li>Integración de aplicaciones mediante APIs y WebHooks</li>
          </ul>
        </div>
        <div className="border-2 rounded-xl p-4 flex flex-col gap-3">
          <h1 className="text-xl font-bold">
            Docente y Organizador de Eventos (2023-)
          </h1>
          <h2 className="font-bold">ImMusik</h2>
          <ul className="list-disc list-inside">
            <li>
              Docente de clases de guitarra, teclado y bajo para grupos de 6 a 8
              jóvenes.
            </li>
            <li>
              Planificador de ensayos, eventos y administración de equipo.
            </li>
          </ul>
        </div>
      </div>
      <h1
        className="mt-10 font-bold text-3xl text-center scroll-mt-20"
        id="tecnologias"
      >
        Otras tecnologías que manejo
      </h1>
      <div className="grid grid-cols-6 gap-5 p-6">
        {tecnologias.map((t: string) => (
          <div className="border-2 border-white rounded-xl py-2 px-3 hover:scale-105 hover:bg-zinc-400 transition-all">
            {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
