import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { MainContent } from "./components/MainContent/MainContent";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
