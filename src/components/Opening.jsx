import { useEffect, useRef, useState } from "react";
import "./opening.css";
import openingVideo from "../assets/opening-door.mp4";
import flowers from "../assets/side-flowers.jpg";

const Opening = ({ onReveal }) => {
  const videoRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [closing, setClosing] = useState(false);

  const handleStart = () => {
    setStarted(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };

  const handleVideoEnd = () => {
    setRevealed(true);

    setTimeout(() => {
      setClosing(true);

      setTimeout(() => {
        onReveal?.();
      }, 900);
    }, 2000);
  };

  return (
    <div
      className={`opening-screen ${
        closing ? "opening-closing" : ""
      }`}
    >
      <video
        ref={videoRef}
        className={`opening-video ${started ? "video-started" : ""}`}
        src={openingVideo}
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
      />

      {!started && (
        <div className="opening-content">
          <p className="opening-subtitle">
            A BEAUTIFUL BEGINNING
          </p>

          <button
            className="opening-button"
            onClick={handleStart}
          >
            TAP TO OPEN
          </button>
        </div>
      )}


      <div
        className={`reveal-content ${
          revealed ? "reveal-active" : ""
        }`}
      >
        <div className="top-flowers">
          <img
          src={flowers}
            alt=""
          />
        </div>

        <div className="pink-glow"></div>

        <div className="reveal-names">
          <h1>Minha</h1>

          <span>&</span>

          <h1>Asad</h1>
        </div>
      </div>
    </div>
  );
};

export default Opening;