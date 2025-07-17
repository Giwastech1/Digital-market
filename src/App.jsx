import Header from "./components/Header";
import UpperHero from "./components/UpperHero";

function App() {
  return (
    <div className="parent-container">
      <div className="upper-hero">
        <Header />
        <UpperHero />
      </div>
    </div>
  );
}

export default App;