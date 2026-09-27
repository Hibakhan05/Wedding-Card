import "./App.css";
import Hero from "./components/Hero";
import Story from "./components/Story";
import ScratchReveal from "./components/ScratchReveal";
import Events from "./components/Events";
import SaveTheDate from "./components/SaveTheDate";
import Gallery from "./components/Gallery";
import Venue from "./components/Venue";
import Countdown from "./components/Countdown";
import DressCode from "./components/DressCode";
import RSVP from "./components/RSVP";
import Footer from "./components/Footer";
import Opening from "./components/Opening";
import { useState } from "react";

function App() {
  const [openingRevealed, setOpeningRevealed] = useState(false);

  return (
    <>
      <Opening onReveal={() => setOpeningRevealed(true)} />

      <main>
        <Hero openingRevealed={openingRevealed} />

        <Story />
        <ScratchReveal />
        <Events />
        <SaveTheDate />
        <Gallery />
        <Venue />
        <Countdown />
        <DressCode />
        <RSVP />
        <Footer />
      </main>
    </>
  );
}

export default App;