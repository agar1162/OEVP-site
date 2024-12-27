import Navbar from "../components/ui/Navbar";
import Cover from "../components/ui/Cover";
import Stats from "../components/ui/Stats";
import Subscription from "../components/ui/Subscription";
import Footer from "../components/ui/Footer";
import "./globals.css";



export default function Home() {
  return (
    <div>
      <Navbar />
      <Cover />
      <Stats />
      <Subscription />
      <Footer />
      
    </div>
  );
}
