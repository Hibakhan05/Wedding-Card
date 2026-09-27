const Venue = () => {
  const openMap = () => {
    window.open(
      "https://www.google.com/maps",
      "_blank"
    );
  };

  return (
    <section className="venue-section section">

      <p className="section-label">
        THE VENUE
      </p>

      <h2 className="venue-title">
        Where We Celebrate
      </h2>

      <div className="venue-card">

        <div className="venue-icon">
          ♡
        </div>

        <h3>
          The Grand Marquee
        </h3>

        <p className="venue-address">
          Main Boulevard, Karachi
        </p>

        <p className="venue-description">
          We can't wait to celebrate this
          beautiful beginning with you.
        </p>

        <button
          className="venue-map-btn"
          onClick={openMap}
        >
          View on Google Maps
        </button>

      </div>

    </section>
  );
};

export default Venue;