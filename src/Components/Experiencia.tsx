import React from "react";

function Experiencia() {
  return (
    <>
      <h1
        className="mt-10 font-bold text-3xl text-center scroll-mt-20"
        id="experiencia"
      >
        Experiencia
      </h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-6 p-6">
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
    </>
  );
}

export default Experiencia;
