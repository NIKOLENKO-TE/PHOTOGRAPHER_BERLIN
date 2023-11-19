import TopNav from "./components/1_TopNav.tsx";
import Featured from "./components/2_Featured.tsx";
import AboutMe from "./components/3_About_Me.tsx";
import Meal from "./components/5_Meal.tsx";
import Categories from "./components/6_Categories.tsx";
import Footer from "./components/8_Footer.tsx";
import Restoration from "./components/4_Restoration.tsx";
import BottomBanner from "./components/9_Bottom_banner.tsx";
import bg_image from "./components/img/1.jpg";

function App() {
  const dg_image_style = {
    backgroundImage: `url(${bg_image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="relative">
      <div className="absolute inset-1 blur-sm m-[-4px]" style={dg_image_style} />
      <div className="relative bg-origin-content ">
        <TopNav />
        <Featured />
        <AboutMe /> 
        <Restoration/>
        <Categories />
        <div className="fixed bottom-0 w-full ssm:flex "><BottomBanner />
        </div> 
        {/*
        <Footer /> 
        <Meal />
        */}
      </div>
    </div>
  );
}

export default App;
