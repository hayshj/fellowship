import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import { Calendar, Clock, MapPin, Users, Heart, Mail, ArrowRight } from 'lucide-react';

function Espanol() {
  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900">
      <HomeNavbar />

      {/* Hero Section - Dark Gradient Background instead of Image */}
      <header className="bg-neutral-900 py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-5xl z-10 space-y-6 animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs md:text-sm font-medium tracking-widest text-neutral-400 uppercase backdrop-blur-sm">
            Bienvenidos
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter">
            FELLOWSHIP<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-100">ESPAÑOL</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Una comunidad de fe, esperanza y amor para toda la familia.
          </p>
        </div>
      </header>

      {/* Main Content - Modern Grid Layout */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">Nuestra Comunidad</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">Únete a Nosotros</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card */}
            <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-orange-600 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio Dominical</h3>
              <div className="space-y-4 text-gray-600 mb-8">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-orange-500" />
                  <span className="font-medium">11:00 AM</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-orange-500" />
                  <span>Auditorio Norte</span>
                </div>
              </div>
              <p className="text-gray-500 leading-relaxed text-sm">
                Únete a nosotros cada domingo para un tiempo de adoración vibrante y enseñanza bíblica práctica.
              </p>
            </div>

            {/* Community Card */}
            <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-blue-600 shadow-sm group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Somos Familia</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Fellowship Español es más que un servicio; es una familia. Aquí encontrarás personas que te apoyarán, orarán por ti y caminarán contigo en tu fe.
              </p>
              <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm uppercase tracking-wide">
                <Heart className="w-4 h-4 fill-current" />
                <span>Ama a Dios, Ama a Otros</span>
              </div>
            </div>

            {/* Connect Card */}
            <div className="bg-stone-50 p-10 rounded-[2.5rem] border border-stone-100 shadow-lg hover:shadow-2xl transition-all duration-300 group hover:-translate-y-2 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-green-600 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Conecta Con Nosotros</h3>
                <p className="text-gray-600 leading-relaxed mb-8">
                  ¿Tienes preguntas o quieres saber más sobre nuestras actividades? ¡Nos encantaría saber de ti!
                </p>
              </div>
              <a
                href="mailto:info@fbrc.org"
                className="group/btn inline-flex items-center justify-center gap-2 w-full py-4 bg-neutral-900 text-white rounded-xl font-bold hover:bg-black transition-colors"
              >
                Contáctanos <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quote/Scripture Section (Optional Filler for vibe) */}
      <section className="py-24 bg-neutral-900 text-center px-6">
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl md:text-4xl font-serif italic text-white/90 leading-relaxed mb-8">
            "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos."
          </blockquote>
          <cite className="text-orange-400 font-bold tracking-widest uppercase not-italic">
            Mateo 18:20
          </cite>
        </div>
      </section>
    </div>
  );
}

export default Espanol;
