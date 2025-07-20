import Header from "./components/Header";
import SecondHeroSec from "./components/SecondHeroSec";
import ThirdHeroSec from "./components/ThirdHeroSec";
import UpperFooter from "./components/UpperFooter";
import UpperHero from "./components/UpperHero";

function App() {
  return (
    <div className="parent-container">
      <div className="upper-hero">
        <Header />
        <UpperHero />
      </div>
      <UpperFooter />
      <SecondHeroSec />
      <ThirdHeroSec />
    </div>
  );
}

export default App;