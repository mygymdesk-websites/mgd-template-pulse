import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Programs from "@/components/sections/Programs";
import Features from "@/components/sections/Features";
import Trainers from "@/components/sections/Trainers";
import Transformations from "@/components/sections/Transformations";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Schedule from "@/components/sections/Schedule";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Features />
        <Trainers />
        <Transformations />
        <Testimonials />
        <Pricing />
        <Schedule />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
