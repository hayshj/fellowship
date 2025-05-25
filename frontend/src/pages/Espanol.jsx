import React from "react";
import HomeNavbar from "../components/HomeNavbar";

function Espanol() {
  return (
    <div>
      <HomeNavbar />

      {/* Hero Section */}
      <div className="bg-black text-white py-24 flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-5xl text-center">
          <h1 className="text-6xl sm:text-6xl lg:text-9xl font-extrabold tracking-tight text-transparent stroke-text mb-4">
            FELLOWSHIP
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold italic">
            en Español
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="py-16 px-6 md:px-12 lg:px-24 bg-white text-neutral-800 space-y-16">
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">SERVICIO EN ESPAÑOL</h2>
          <p className="max-w-3xl mx-auto text-lg">
            ¡Todos son bienvenidos! Nuestra comunidad hispana se reúne para adorar y crecer juntos en la fe cada semana.
          </p>
          <ul className="text-lg space-y-1">
            <li><strong>Día:</strong> Domingo</li>
            <li><strong>Hora:</strong> 11:00 AM</li>
            <li><strong>Lugar:</strong> Auditorio Norte</li>
          </ul>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">SOMOS FAMILIA</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Fellowship Español es una comunidad de creyentes que busca seguir a Jesús y amar a los demás. Aquí encontrarás adoración, enseñanza bíblica, y una familia que te apoya.
          </p>
        </section>

        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">CONECTA CON NOSOTROS</h2>
          <p className="max-w-3xl mx-auto text-lg">
            ¿Quieres saber más o visitar por primera vez? ¡Estamos emocionados por conocerte!
          </p>
          <a
            href="mailto:info@fbrc.org"
            className="inline-block bg-black text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-gray-800 transition"
          >
            Contáctanos
          </a>
        </section>
      </div>
    </div>
  );
}

export default Espanol;
