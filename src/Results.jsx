import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Results from "./components/results";
import "./css/home.css";

export default function Result_main() {
  return (
    <div>
      <Navbar />
      <Results />
      <Footer />
    </div>
  );
}