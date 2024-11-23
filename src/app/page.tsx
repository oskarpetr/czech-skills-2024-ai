import Navbar from "@/app/components/Navbar/Navbar";
import Features from "./components/Features/Features";
import Pricing from "./components/pricing/Pricing";
import FAQ from "./components/FAQ/FAQ";
import Reviews from "./components/Reviews/Reviews";
import Footer from "./components/Footer/Footer";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="hero" id="hero">
          <div className="container">
            <div className="row">
              <div className="item flex flex-col items-center">
                <h1 className="text-center mt-8">
                  Bring Your Imagination to Life with AI-Driven 3D Character
                  Creation
                </h1>
                <p className="text-center xl:w-1/2">
                  Describe your vision, and let our AI transform your words into
                  stunning, customizable 3D characters—effortlessly and in
                  seconds
                </p>
                <img
                  src="/images/example.webp"
                  loading="lazy"
                  className="w-4/5 mt-14"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="features">
          <Features />
        </section>

        <section id="pricing">
          <Pricing />
        </section>

        <section id="reviews">
          <Reviews />
        </section>

        <section id="faq">
          <FAQ />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </>
  );
}
