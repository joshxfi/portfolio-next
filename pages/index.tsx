import React, { useState } from "react";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Navbar } from "../components/Navbar";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Homepage } from "../components/Homepage";
import { Projects } from "../components/Projects";
import { Technologies } from "../components/Technologies";

const App: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div>
      <Navbar showMenu={showMenu} setShowMenu={setShowMenu} />

      <div
        onClick={() => setShowMenu(false)}
        style={{ overflow: "hidden", filter: showMenu ? "blur(4px)" : "" }}
      >
        <Homepage />
        <About />
        <Technologies />
        <Projects />
        <Contact />
        <Footer />
      </div>

      <GlobalStyle />
    </div>
  );
};

export default App;
