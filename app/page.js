import Header from "@/components/custom/Header";
import Contact from "@/components/custom/Home/Contact";
import Footer from "@/components/custom/Home/Footer";
import Gallery from "@/components/custom/Home/Gallery";
import Hero from "@/components/custom/Home/Hero";
import Statistics from "@/components/custom/Home/Statistics";
import Steps from "@/components/custom/Home/Steps";
import Testimonials from "@/components/custom/Home/Testimonials";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Gallery />
      <Statistics />
      <Steps />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
