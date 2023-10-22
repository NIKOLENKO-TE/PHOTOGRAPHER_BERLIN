import TopNav from "./components/1_TopNav";
import Featured from "./components/2_Featured";
import AboutMe from "./components/3_About_Me";
import TopPicks from "./components/4_TopPicks";
import Meal from "./components/5_Meal";
import Categories from "./components/6_Categories";
import Footer from "./components/8_Footer";
import BottomBanner from "./components/9_Bottom_banner";
import dg_image from "./components/img/1.jpg";

function App() {
  const dg_image_style = {
    backgroundImage: `url(${dg_image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div className="relative">
      <div className="absolute inset-0 blur-sm " style={dg_image_style} />
      <div className="relative bg-origin-content ">
        <TopNav />
        <Featured />
        <AboutMe />
        <div className="fixed bottom-0 w-full ssm:flex ">
        <BottomBanner />
        </div> 
        <Footer /> 
        {/* 
        <TopPicks />
        <Meal />
        <Categories /> 
        */}
       
           
      </div>
    </div>
  );
}

export default App;
