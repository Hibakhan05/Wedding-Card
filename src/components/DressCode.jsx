const DressCode = () => {
  return (
    <section className="dress-code-section section">

      <p className="section-label">
        WHAT TO WEAR
      </p>

      <h2>Dress Code</h2>

      <p className="dress-code-intro">
        Come dressed for the celebration.
      </p>

      <div className="dress-code-card">

        <div className="dress-code-item">
          <span className="dress-code-label">
            FOR HER
          </span>

          <h3>Elegant & Traditional</h3>

          <p>
            Festive traditional wear in
            soft, elegant tones.
          </p>
        </div>

        <div className="dress-divider" />

        <div className="dress-code-item">
          <span className="dress-code-label">
            FOR HIM
          </span>

          <h3>Classic & Formal</h3>

          <p>
            Traditional or formal
            evening wear.
          </p>
        </div>

      </div>

    </section>
  );
};

export default DressCode;