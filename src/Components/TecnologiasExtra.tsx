import React from "react";

function TecnologiasExtra() {
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
    <>
      <h1
        className="mt-10 font-bold text-3xl text-center scroll-mt-20"
        id="tecnologias"
      >
        Otras tecnologías que manejo
      </h1>
      <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5 p-1 sm:p-6 text-sm sm:text-md sm:mt-0 mt-4">
        {tecnologias.map((t: string) => (
          <div className="border-2 overflow-hidden border-white rounded-xl sm:py-2 sm:px-3 p-1 hover:scale-105 hover:bg-zinc-400 transition-all">
            {t}
          </div>
        ))}
      </div>
    </>
  );
}

export default TecnologiasExtra;
