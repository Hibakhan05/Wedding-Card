const events = [
  {
    number: "01",
    title: "Mehendi",
    date: "10 December 2026",
    time: "7:00 PM",
  },
  {
    number: "02",
    title: "Barat",
    date: "11 December 2026",
    time: "7:00 PM",
  },
  {
    number: "03",
    title: "Walima",
    date: "12 December 2026",
    time: "8:00 PM",
  },
];

const Events = () => {
  return (
    <section className="events-section section">

      <p className="section-label">
        THE CELEBRATIONS
      </p>

      <h2>Wedding Events</h2>

      <div className="events-container">

        {events.map((event) => (
          <div className="event-card" key={event.number}>

            <p className="event-number">
              {event.number}
            </p>

            <h3>{event.title}</h3>

            <p className="event-date">
              {event.date}
            </p>

            <span className="event-time">
              {event.time}
            </span>

            <button
              className="event-location-btn"
              onClick={() =>
                window.open(
                  "https://www.google.com/maps",
                  "_blank"
                )
              }
            >
              View Location
            </button>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Events;