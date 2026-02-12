import React from "react";
import HomeNavbar from "../components/HomeNavbar";
import pedroImg from "../assets/espanol/pedro.webp";
import davidImg from "../assets/espanol/david.webp";

function Espanol() {
  return (
    <div className="font-sans antialiased bg-stone-50 text-gray-900">
      <HomeNavbar />

      {/* Hero Section */}
      <header className="bg-neutral-900 py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

        <div className="max-w-5xl z-10 space-y-6 animate-fade-in-up">
          <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-xs md:text-sm font-medium tracking-widest text-neutral-400 uppercase backdrop-blur-sm">
            Bienvenidos
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white tracking-tighter">
            FELLOWSHIP<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-amber-100 pr-2">ESPAÑOL</span>
          </h1>
        </div>
      </header>

      {/* Spanish Section - David photo on left, text on right */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[2/3] overflow-hidden rounded-2xl shadow-lg">
            <img src={davidImg} alt="David" className="w-full h-full object-cover" />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">En Español</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">¡Bienvenidos a Fellowship Church en Español!</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 md:mx-0 mx-auto mb-12 rounded-full"></div>

            <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed">
              <p>
                Somos un ministerio en Fellowship Church. Somos una iglesia unida para alcanzar almas para Dios. Venga y sea parte de nuestro grupo que está dedicado a mover la fe Cristiana hacia el frente. Nuestros sermones regularmente son en Español y Ingles para que su joven o persona que no entienda Español pueda también disfrutar de la Palabra de Dios.
              </p>

              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 pt-4">¿Cuándo Nos Reunimos?</h4>

              <p>
                Los Jueves tenemos grupos pequeños a la 7 pm en la iglesia en el segundo piso. Los Domingos tenemos el Estudio Bíblico a la 1 pm y el Servicio General a las 2 pm en el santuario principal del primer piso. Los invitamos a continuar a crecer con nosotros. Venga y goce de buena enseñanza Bíblica, compañerismo, y Palabra de Dios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* English Section - text on left, Pedro photo on right */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-stone-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <h2 className="text-sm font-bold tracking-widest text-neutral-500 uppercase mb-3">In English</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Welcome to Fellowship Church en Español!</h3>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-500 md:mx-0 mx-auto mb-12 rounded-full"></div>

            <div className="space-y-8 text-lg md:text-xl text-gray-600 leading-relaxed">
              <p>
                We are a ministry at Fellowship Church. We are a church united to reach souls for God. Come and be part of our group that is dedicated to moving the Christian faith forward. Our sermons are regularly in Spanish and English so that your young person or non-Spanish speaker can also enjoy God's Word.
              </p>

              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 pt-4">When Do We Meet?</h4>

              <p>
                On Thursdays we have small groups at 7 pm at the church upstairs. On Sundays we have Bible study at 1 p.m. and the General Service at 2 p.m. in the main sanctuary on the first floor. We invite you to come and grow with us. Come and enjoy good Bible teaching, fellowship, and God's Word.
              </p>
            </div>
          </div>
          <div className="aspect-[2/3] overflow-hidden rounded-2xl shadow-lg order-1 md:order-2">
            <img src={pedroImg} alt="Pedro" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Quote/Scripture Section */}
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
