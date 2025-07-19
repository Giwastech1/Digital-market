import Header from "./components/Header";
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
      
    </div>
  );
}

export default App;