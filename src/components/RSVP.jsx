import { useState } from "react";

const RSVP = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you for your response <3");

    setIsOpen(false);
  };

  return (
    <section className="rsvp-section section">

      <p className="section-label">
        WE WOULD LOVE TO HAVE YOU
      </p>

      <h2>Will you join us?</h2>

      <p className="rsvp-intro">
        Your presence would make our celebration
        even more special.
      </p>

      <button
        className="outline-btn"
        onClick={() => setIsOpen(true)}
      >
        RSVP
      </button>

      {isOpen && (
        <div
          className="rsvp-overlay"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="rsvp-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="rsvp-close"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>

            <p className="section-label">
              RSVP
            </p>

            <h3>Will you be attending?</h3>

            <form onSubmit={handleSubmit}>

              <label>
                Will you be attending?
              </label>

              <select required>
                <option value="">
                  Select an option
                </option>

                <option value="attending">
                  I'll come
                </option>

                <option value="not-attending">
                  I can't make it
                </option>
              </select>

              <label>
                Your name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                required
              />

              <label>
                Your message for us
              </label>

              <textarea
                rows="4"
                placeholder="Leave us a little message..."
              />

              <button
                type="submit"
                className="rsvp-submit"
              >
                Send RSVP
              </button>

            </form>

          </div>
        </div>
      )}

    </section>
  );
};

export default RSVP;