// App.tsx
import React, { useEffect, useRef } from "react";
import TopNav from "./components/TopNav.tsx";
import Weddings from "./components/Weddings.tsx";
import AboutMe from "./components/About_Me.tsx";
import Categories from "./components/Categories.tsx";
import Footer from "./components/Footer.tsx";
import Restoration from "./components/Restoration.tsx";
import BottomBanner from "./components/Bottom_banner.tsx";
import Flowers from "./components/Flowers.tsx";
import Childrens from "./components/Childrens.tsx";
import Photosessions from "./components/Photosessions.tsx";
import Hospital from "./components/Hospital.tsx";
import AID from "./components/AID.tsx";
import bg_image from "./components/img/1.jpg";

function App() {
  const weddingRef = useRef(null);
  const wedding2Ref = useRef(null);
  const flowersRef = useRef(null);
  const childrensRef = useRef(null);
  const restorationRef = useRef(null);
  const aboutMeRef = useRef(null);
  const photosessionsRef = useRef(null);
  const hospitalRef = useRef(null);
  const aidRef = useRef(null);

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
      case 5:
        targetRef = photosessionsRef;
        break;
      case 6:
        targetRef = aidRef;
        break;
      case 7:
         targetRef = hospitalRef;
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
        <Photosessions ref={photosessionsRef} /> 
        <AID ref={aidRef} /> 
        <Hospital ref={hospitalRef} />
        <Restoration ref={restorationRef} />
        <AboutMe ref={aboutMeRef} />
        <Footer />
        <div className="fixed bottom-0 w-full ssm:flex z-51">
          <BottomBanner />
        </div>
      </div>
    </div>
  );
}

export default App;
