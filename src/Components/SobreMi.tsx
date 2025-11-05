import React from "react";

function SobreMi() {
  return (
    <>
      <h1
        className="mt-10 font-bold text-3xl text-center scroll-mt-20"
        id="sobremi"
      >
        Sobre mi
      </h1>
      <div className="w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row md:gap-6 items-center justify-center md:w-2/3 sm:w-3/4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/6062/6062646.png"
            className="w-32 sm:block hidden"
          />
          <p className="mt-5 text-justify">
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
    </>
  );
}

export default SobreMi;
