import Connect from "../components/Connect";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Services from "../components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Services />
      <Connect />
      <Footer />
    </div>
  );
}
