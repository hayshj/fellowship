import React from "react";
import Navbar from "../components/Navbar";

function Live() {
    return (
        <>
            <Navbar />

            <div className="w-full h-screen bg-black flex items-center justify-center pt-[80px]">
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
        </>
    );
}

export default Live;
