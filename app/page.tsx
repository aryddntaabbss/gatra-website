import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import About from "@/components/sections/About";
import Events from "@/components/sections/Events";
import Gallery from "@/components/sections/Gallery";
import StravaConnect from "@/components/sections/StravaConnect";
import Members from "@/components/sections/Members";
import Activities from "@/components/sections/Activities";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBar />
      <About />
      <Events />
      <Gallery />
      <StravaConnect />
      <Members />
      <Activities />
      <Footer />
    </main>
  );
}
