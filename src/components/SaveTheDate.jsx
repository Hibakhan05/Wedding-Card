const SaveTheDate = () => {
  const saveDate = () => {
    const title = encodeURIComponent("Minha & Asad - Wedding");
    const details = encodeURIComponent(
      "Join us as we celebrate the wedding of Minha & Asad."
    );
    const location = encodeURIComponent("Wedding Venue, Karachi");

    const calendarUrl =
      `https://calendar.google.com/calendar/render?action=TEMPLATE` +
      `&text=${title}` +
      `&dates=20261212T190000/20261212T230000` +
      `&details=${details}` +
      `&location=${location}`;

    window.open(calendarUrl, "_blank");
  };

  return (
    <section className="save-section section">

      <p className="section-label">
        DON'T FORGET
      </p>

      <h2 className="save-title">
        Save the Date
      </h2>

      <p className="save-text">
        Keep this beautiful day in your calendar.
      </p>

      <button
        className="save-date-btn"
        onClick={saveDate}
      >
        Add to Calendar
      </button>

    </section>
  );
};

export default SaveTheDate;