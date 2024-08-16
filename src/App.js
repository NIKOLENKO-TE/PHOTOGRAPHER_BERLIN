import React, { useEffect, useRef, Suspense, lazy, forwardRef } from "react";
import { Toaster } from 'react-hot-toast';
import { useInView } from 'react-intersection-observer';
import { RotatingLines  } from 'react-loader-spinner';  // Импортируем индикатор загрузки
import TopNav from "./components/TopNav.tsx";
import Categories from "./components/Categories.tsx";
import Footer from "./components/Footer.tsx";
import BottomBanner from "./components/Bottom_banner.tsx";
import bg_image from "./components/img/1.jpg";

const Weddings = lazy(() => import("./components/Weddings.tsx"));
const AboutMe = lazy(() => import("./components/About_Me.tsx"));
const Restoration = lazy(() => import("./components/Restoration.tsx"));
const Flowers = lazy(() => import("./components/Flowers.tsx"));
const Childrens = lazy(() => import("./components/Childrens.tsx"));
const Photosessions = lazy(() => import("./components/Photosessions.tsx"));
const Hospital = lazy(() => import("./components/Hospital.tsx"));
const AID = lazy(() => import("./components/AID.tsx"));

const LazyLoadComponent = forwardRef(({ component: Component, ...rest }, ref) => {
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Объединение refs: forwarded ref и inView ref
  const setRefs = (node) => {
    inViewRef(node);
    if (ref) ref.current = node;
  };

  return (
      <div ref={setRefs} style={{ minHeight: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {inView ? (
            <Suspense fallback={<RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />} >
              <Component {...rest} />
            </Suspense>
        ) : (
            <RotatingLines
                visible={true}
                height="96"
                width="96"
                color="grey"
                strokeWidth="5"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        )}
      </div>
  );
});

function App() {
  const weddingRef = useRef(null);
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
        <Toaster />
        <div className="parallax-bg" style={dg_image_style} />
        <div className="relative bg-origin-content">
          <TopNav />
          <Categories scrollToBlock={scrollToBlock} />
          <LazyLoadComponent component={Weddings} ref={weddingRef} />
          <LazyLoadComponent component={Flowers} ref={flowersRef} />
          <LazyLoadComponent component={Childrens} ref={childrensRef} />
          <LazyLoadComponent component={Photosessions} ref={photosessionsRef} />
          <LazyLoadComponent component={AID} ref={aidRef} />
          <LazyLoadComponent component={Hospital} ref={hospitalRef} />
          <LazyLoadComponent component={Restoration} ref={restorationRef} />
          <LazyLoadComponent component={AboutMe} ref={aboutMeRef} />
          <Footer />
          <div className="fixed bottom-0 w-full ssm:flex z-51">
            <BottomBanner />
          </div>
        </div>
      </div>
  );
}

export default App;
