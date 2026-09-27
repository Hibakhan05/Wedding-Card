import { useEffect, useState } from "react";

const weddingDate = new Date(
  "December 12, 2026 19:00:00"
).getTime();

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(
    weddingDate - Date.now()
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(weddingDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = Math.max(
    0,
    Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  );

  const hours = Math.max(
    0,
    Math.floor(
      (timeLeft / (1000 * 60 * 60)) % 24
    )
  );

  const minutes = Math.max(
    0,
    Math.floor(
      (timeLeft / (1000 * 60)) % 60
    )
  );

  const seconds = Math.max(
    0,
    Math.floor((timeLeft / 1000) % 60)
  );

  return (
    <section className="countdown-section section">
      <p className="section-label">THE COUNTDOWN</p>

      <h2>Until forever...</h2>

      <div className="countdown">
        <div>
          <strong>{days}</strong>
          <span>DAYS</span>
        </div>

        <div>
          <strong>{String(hours).padStart(2, "0")}</strong>
          <span>HOURS</span>
        </div>

        <div>
          <strong>{String(minutes).padStart(2, "0")}</strong>
          <span>MINUTES</span>
        </div>

        <div>
          <strong>{String(seconds).padStart(2, "0")}</strong>
          <span>SECONDS</span>
        </div>
      </div>
    </section>
  );
};

export default Countdown;