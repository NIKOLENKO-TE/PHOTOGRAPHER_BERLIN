import TopNav from "./components/1_TopNav";
import Featured from "./components/2_Featured";
import Delivery from "./components/3_Delivery";
import TopPicks from "./components/4_TopPicks";
import Meal from "./components/5_Meal";
import Categories from "./components/6_Categories";
import NewsLetter from "./components/7_NewsLetter";
import Footer from "./components/8_Footer";

function App() {
  return (
    <div className="App">
      <TopNav/>
      <Featured/>  
      <Delivery/>
      <TopPicks/>  
      <Meal/>
      <Categories/>
      <NewsLetter/>
      <Footer/>
    </div>
  );
}

export default App;
