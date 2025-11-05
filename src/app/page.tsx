import React from "react";
import Intro from "@/Components/Intro";
import SobreMi from "@/Components/SobreMi";
import Proyectos from "@/Components/Proyectos";
import TecnologiasExtra from "@/Components/TecnologiasExtra";
import Experiencia from "@/Components/Experiencia";

function Homepage() {
  return (
    <div className="max-w-screen min-h-screen p-8 pt-20 bg-zinc-800 text-white">
      <div className="z-10 w-screen bg-zinc-900 shadow-xl h-14 sm:flex flex-row gap-8 text-lg items-center justify-center fixed top-0 left-0 hidden">
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
      <Intro />
      <SobreMi />
      <Proyectos />
      <Experiencia />
      <TecnologiasExtra />
    </div>
  );
}

export default Homepage;
