import { Link } from 'react-router-dom';

const EasterHero = () => {
    return (
        <header className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-[#151719] pt-20">
            {/* Abstract Background Effects to mimic image */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Lower left green gradient */}
                <div className="absolute -bottom-[20%] -left-[10%] w-[80%] h-[80%] bg-[radial-gradient(circle_at_center,_rgba(45,180,140,0.15)_0%,_transparent_60%)] blur-[80px]"></div>
                {/* Lower right blueish gradient */}
                <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-[radial-gradient(circle_at_center,_rgba(45,130,180,0.1)_0%,_transparent_60%)] blur-[80px]"></div>
                {/* Noise overlay */}
                <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MDAiIGhlaWdodD0iNDAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIvPjwvc3ZnPg==')]"></div>

            </div>

            <div className="relative z-10 w-full px-4 md:px-8 flex flex-col items-center">

                <div className="flex flex-col items-center mb-8 md:mb-16 select-none cursor-default text-center animate-fade-in-up">
                    <span className="font-serif italic text-4xl sm:text-5xl md:text-8xl lg:text-[7rem] tracking-tight z-10 drop-shadow-lg" style={{ color: '#E3C16F' }}>
                        FELLOWSHIP
                    </span>
                    <h1 className="font-black text-6xl sm:text-[5.5rem] md:text-[8rem] lg:text-[12rem] text-white tracking-tighter leading-[0.8] mt-[-5px] md:mt-[-15px] drop-shadow-2xl uppercase">
                        Easter.
                    </h1>
                </div>

                {/* Event Info + CTA */}
                <div className="flex flex-col items-center gap-6 animate-fade-in-up mt-4 md:mt-0" style={{ animationDelay: '200ms' }}>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-center">
                        <div>
                            <span className="text-[10px] md:text-xs font-black tracking-widest uppercase block mb-1" style={{ color: '#E3C16F' }}>Easter Service</span>
                            <span className="text-sm sm:text-lg md:text-xl font-black text-white tracking-widest">APRIL 05 &mdash; 9 &amp; 11 AM</span>
                        </div>
                        <div className="hidden sm:block w-px bg-white/20 self-stretch"></div>
                        <div>
                            <span className="text-[10px] md:text-xs font-black tracking-widest uppercase block mb-1" style={{ color: '#E3C16F' }}>Egg Hunt</span>
                            <span className="text-sm sm:text-lg md:text-xl font-black text-white tracking-widest">APRIL 05 &mdash; 10:15 AM</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link
                            to="/easter"
                            className="px-10 py-4 font-black uppercase tracking-widest text-sm md:text-base text-[#151719] hover:scale-105 transition-all duration-300 text-center"
                            style={{ backgroundColor: '#E3C16F' }}
                        >
                            Learn More
                        </Link>
                        <Link
                            to="/plan-your-visit"
                            className="px-10 py-4 font-black uppercase tracking-widest text-sm md:text-base text-white border-2 border-white/40 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                        >
                            Plan Your Visit
                        </Link>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default EasterHero;
