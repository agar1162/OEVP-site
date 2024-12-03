import Navbar from "@/components/ui/Navbar";
import "./globals.css";
import Footer from "@/components/ui/Footer";
import Cover from "@/components/ui/Cover";
import Subscription from "@/components/ui/Subscription"
import Stats from "@/components/ui/Stats"
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
