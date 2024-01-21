// App.tsx
import React, { useEffect, useRef } from "react";
import TopNav from "./components/1_TopNav.tsx";
import Weddings from "./components/2_Weddings.tsx";
import AboutMe from "./components/3_About_Me.tsx";
import Categories from "./components/6_Categories.tsx";
import Footer from "./components/8_Footer.tsx";
import Restoration from "./components/4_Restoration.tsx";
import BottomBanner from "./components/9_Bottom_banner.tsx";
import Flowers from "./components/Flowers.tsx";
import Childrens from "./components/Childrens.tsx";
import bg_image from "./components/img/1.jpg";

function App() {
  const weddingRef = useRef(null);
  const flowersRef = useRef(null);
  const childrensRef = useRef(null);
  const restorationRef = useRef(null);
  const aboutMeRef = useRef(null);

  const scrollToBlock = (index) => {
    let targetRef;
    switch (index) {
      case 1:
        targetRef = weddingRef;
        break;
      case 2:
        targetRef = flowersRef;
        break;
      case 3:
        targetRef = childrensRef;
        break;
      case 4:
        targetRef = restorationRef;
        break;
      case 8:
        targetRef = aboutMeRef;
        break;
      default:
        break;
    }

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const parallaxBg = document.querySelector(".parallax-bg");
      const scrollPosition = window.pageYOffset;
      parallaxBg.style.transform = `translateY(${scrollPosition * 0.5}px)`;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const dg_image_style = {
    backgroundImage: `url(${bg_image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    position: "absolute",
    inset: "-5px",
    filter: "blur(7px)"
  };

  return (
    <div className="relative" style={{ overflow: "hidden" }}>
      <div className="parallax-bg " style={dg_image_style} />
      <div className="relative bg-origin-content ">
        <TopNav />
        <Categories scrollToBlock={scrollToBlock} />
        <Weddings ref={weddingRef} />
        <Flowers ref={flowersRef} />
        <Childrens ref={childrensRef} />
        <Restoration ref={restorationRef} />
        <AboutMe ref={aboutMeRef} />
        <Footer />
        <div className="fixed bottom-0 w-full ssm:flex z-49">
          <BottomBanner />
        </div>
      </div>
    </div>
  );
}

export default App;
