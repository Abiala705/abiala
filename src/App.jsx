import NavBar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Blog from "./scenes/Blog";
import Contact from "./scenes/Contact";
import React, { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Footer from "./scenes/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setIsTopOfPage(true);
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <NavBar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={selectedPage}
      />
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
        <LineGradient />
        <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto mt-32">
          <Projects />
        </div>

        <div className="w-5/6 mx-auto mt-32">
          <Blog />
        </div>
        <LineGradient />
        <div className="w-5/6 mx-auto mt-32">
          <Contact />
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;
