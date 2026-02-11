import React, { useState, useEffect } from "react";
import HomeNavbar from "../components/HomeNavbar";
import { Radio, Clock, Play, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function Live() {
    const [isLive, setIsLive] = useState(false);
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const getTargetUtcHour = () => {
            const now = new Date();
            const jan = new Date(now.getFullYear(), 0, 1).getTimezoneOffset();
            const jul = new Date(now.getFullYear(), 6, 1).getTimezoneOffset();
            const isDST = Math.min(jan, jul) !== now.getTimezoneOffset();
            return isDST ? 14 : 15; // 10:55 AM CDT/CST in UTC
        };

        const checkLiveStatus = () => {
            const now = new Date();
            const utcDay = now.getUTCDay(); // 0 = Sunday
            const utcHours = now.getUTCHours();
            const utcMinutes = now.getUTCMinutes();

            const isSunday = utcDay === 0;
            const targetUtcHour = getTargetUtcHour();

            const isInLiveWindow =
                (utcHours === targetUtcHour && utcMinutes >= 55) ||
                (utcHours === targetUtcHour + 1) ||
                (utcHours === targetUtcHour + 2 && utcMinutes <= 30);

            setIsLive(isSunday && isInLiveWindow);
        };

        const updateCountdown = () => {
            const now = new Date();
            const targetUtcHour = getTargetUtcHour();

            const utcDay = now.getUTCDay();
            const isSunday = utcDay === 0;

            let targetDate = new Date(now);
            if (!isSunday) {
                const daysUntilSunday = 7 - utcDay;
                targetDate.setUTCDate(targetDate.getUTCDate() + daysUntilSunday);
            } else {
                const nowUTCMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
                const streamStartUTCMinutes = targetUtcHour * 60 + 55;
                if (nowUTCMinutes >= streamStartUTCMinutes) {
                    targetDate.setUTCDate(targetDate.getUTCDate() + 7);
                }
            }

            const streamTime = new Date(Date.UTC(
                targetDate.getUTCFullYear(),
                targetDate.getUTCMonth(),
                targetDate.getUTCDate(),
                targetUtcHour,
                55,
                0
            ));

            const diff = streamTime.getTime() - now.getTime();

            if (diff > 0) {
                const totalSeconds = Math.floor(diff / 1000);
                const days = Math.floor(totalSeconds / (60 * 60 * 24));
                const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
                const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
                const seconds = totalSeconds % 60;
                setCountdown({ days, hours, minutes, seconds });
            } else {
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        }

        checkLiveStatus();
        updateCountdown();

        const interval = setInterval(() => {
            checkLiveStatus();
            updateCountdown();
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const CountdownUnit = ({ value, label }) => (
        <div className="flex flex-col items-center">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-2 md:mb-3">
                <span className="text-2xl sm:text-3xl md:text-5xl font-black text-white tabular-nums">
                    {String(value).padStart(2, '0')}
                </span>
            </div>
            <span className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-neutral-400 uppercase">{label}</span>
        </div>
    );

    return (
        <div className="font-sans antialiased bg-stone-50 text-gray-900 min-h-screen">
            <HomeNavbar />

            {isLive ? (
                <>
                    {/* Live Hero */}
                    <header className="bg-neutral-900 pt-[80px] pb-12 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                        <div className="z-10 space-y-4 animate-fade-in-up mt-8">
                            <div className="inline-flex items-center gap-2 py-1 px-4 bg-red-500/20 border border-red-500/40 rounded-full">
                                <span className="relative flex h-3 w-3">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                </span>
                                <span className="text-sm font-bold tracking-widest text-red-300 uppercase">We're Live Now</span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                                WATCH <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-orange-300 pr-2">LIVE</span>
                            </h1>
                        </div>
                    </header>

                    {/* Live Stream Video */}
                    <section className="bg-neutral-900 px-6 pb-24">
                        <div className="max-w-6xl mx-auto">
                            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video">
                                <iframe
                                    className="w-full h-full"
                                    src="https://www.youtube.com/embed/live_stream?channel=UCOQMLKUsbcawmwWQMFnHYIw&autoplay=1"
                                    title="YouTube Live Stream"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    </section>
                </>
            ) : (
                <>
                    {/* Countdown Hero */}
                    <header className="bg-neutral-900 min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 relative overflow-hidden">
                        {/* Decorative background */}
                        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>

                        <div className="z-10 space-y-10 animate-fade-in-up max-w-3xl">
                            <div className="space-y-6">
                                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter">
                                    NEXT LIVE<br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300 pr-2">STREAM</span>
                                </h1>
                                <p className="text-lg md:text-xl text-gray-400 max-w-xl mx-auto leading-relaxed font-light">
                                    Join us every Sunday at <span className="text-white font-semibold">10:55 AM CST</span> for our live worship service.
                                </p>
                            </div>

                            {/* Countdown Timer */}
                            <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-6">
                                <CountdownUnit value={countdown.days} label="Days" />
                                <span className="text-xl sm:text-3xl md:text-5xl font-light text-white/20 -mt-6 md:-mt-8">:</span>
                                <CountdownUnit value={countdown.hours} label="Hours" />
                                <span className="text-xl sm:text-3xl md:text-5xl font-light text-white/20 -mt-6 md:-mt-8">:</span>
                                <CountdownUnit value={countdown.minutes} label="Min" />
                                <span className="text-xl sm:text-3xl md:text-5xl font-light text-white/20 -mt-6 md:-mt-8">:</span>
                                <CountdownUnit value={countdown.seconds} label="Sec" />
                            </div>

                            {/* CTA */}
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                                <Link
                                    to="/sermons"
                                    className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                                >
                                    Watch Past Sermons <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                </Link>
                                <Link
                                    to="/plan-your-visit"
                                    className="group px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold uppercase tracking-wider rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                                >
                                    Plan Your Visit
                                </Link>
                            </div>
                        </div>
                    </header>
                </>
            )}
        </div>
    );
}

export default Live;
