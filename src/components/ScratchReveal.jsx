import { useEffect, useRef } from "react";

const ScratchReveal = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = 500;
    const height = 450;

    canvas.width = width;
    canvas.height = height;

    const drawHeart = () => {
      ctx.beginPath();

      ctx.moveTo(250, 390);

      ctx.bezierCurveTo(
        230, 365,
        70, 270,
        70, 145
      );

      ctx.bezierCurveTo(
        70, 65,
        170, 45,
        250, 120
      );

      ctx.bezierCurveTo(
        330, 45,
        430, 65,
        430, 145
      );

      ctx.bezierCurveTo(
        430, 270,
        270, 365,
        250, 390
      );

      ctx.closePath();
    };

    drawHeart();

    ctx.save();

    ctx.clip();

    ctx.fillStyle = "#d8899b";
    ctx.fillRect(0, 0, width, height);

    // Text
    ctx.fillStyle = "#fff8f5";
    ctx.font = "13px Arial";
    ctx.textAlign = "center";
    ctx.letterSpacing = "4px";

    ctx.fillText(
      "SCRATCH TO REVEAL",
      250,
      225
    );

    ctx.restore();

    let scratching = false;

    const scratch = (clientX, clientY) => {
      const rect = canvas.getBoundingClientRect();

      const x =
        (clientX - rect.left) *
        (canvas.width / rect.width);

      const y =
        (clientY - rect.top) *
        (canvas.height / rect.height);

      ctx.save();

      drawHeart();
      ctx.clip();

      ctx.globalCompositeOperation =
        "destination-out";

      ctx.beginPath();
      ctx.arc(x, y, 28, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    };

    const mouseDown = () => {
      scratching = true;
    };

    const mouseMove = (e) => {
      if (!scratching) return;

      scratch(
        e.clientX,
        e.clientY
      );
    };

    const mouseUp = () => {
      scratching = false;
    };

    const touchStart = () => {
      scratching = true;
    };

    const touchMove = (e) => {
      if (!scratching) return;

      e.preventDefault();

      const touch = e.touches[0];

      scratch(
        touch.clientX,
        touch.clientY
      );
    };

    canvas.addEventListener(
      "mousedown",
      mouseDown
    );

    canvas.addEventListener(
      "mousemove",
      mouseMove
    );

    window.addEventListener(
      "mouseup",
      mouseUp
    );

    canvas.addEventListener(
      "touchstart",
      touchStart
    );

    canvas.addEventListener(
      "touchmove",
      touchMove,
      { passive: false }
    );

    canvas.addEventListener(
      "touchend",
      mouseUp
    );

    return () => {
      canvas.removeEventListener(
        "mousedown",
        mouseDown
      );

      canvas.removeEventListener(
        "mousemove",
        mouseMove
      );

      window.removeEventListener(
        "mouseup",
        mouseUp
      );

      canvas.removeEventListener(
        "touchstart",
        touchStart
      );

      canvas.removeEventListener(
        "touchmove",
        touchMove
      );

      canvas.removeEventListener(
        "touchend",
        mouseUp
      );
    };
  }, []);

  return (
    <section className="scratch-section section">

      <p className="section-label">
        A LITTLE SURPRISE
      </p>

      <h2>When is the big day?</h2>

      <div className="heart-scratch-wrapper">

        <div className="heart-date">

          <span>12</span>

          <small>DECEMBER</small>

          <span>2026</span>

        </div>

        <canvas
          ref={canvasRef}
          className="scratch-canvas"
        />

      </div>

      <p className="scratch-hint">
        Use your finger or mouse to reveal
      </p>

    </section>
  );
};

export default ScratchReveal;