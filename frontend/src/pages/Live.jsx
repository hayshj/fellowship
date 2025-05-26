import React, { useState, useEffect } from "react";
import BlackNavbar from "../components/BlackNavbar";

function Live() {
    const [isLive, setIsLive] = useState(false);
    const [countdown, setCountdown] = useState("");

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

            // Determine the date of the next Sunday
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
                const hrs = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
                const mins = Math.floor((totalSeconds % (60 * 60)) / 60);
                const secs = totalSeconds % 60;

                setCountdown(`${days}d ${hrs}h ${mins}m ${secs}s`);
            } else {
                setCountdown("Starting soon...");
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

    return (
        <>
            <BlackNavbar />
            {isLive ? (
                <div 
                    className="w-full bg-black flex items-center justify-center pt-[80px]"
                    style={{ height: "100svh" }}
                >
                    <div className="w-full h-full max-w-7xl aspect-video">
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
            ) : (
                <div 
                    className="w-full min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 text-center"
                >
                    <div className="max-w-xl">
                        <h1 className="text-4xl font-bold mb-4">Next Live Stream</h1>
                        <p className="text-2xl mb-2">Sunday at 10:55am CST</p>
                        <p className="text-lg text-gray-300">Starts in:</p>
                        <p className="text-3xl font-mono mt-2 text-green-400">
                            {countdown || "Calculating..."}
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Live;
