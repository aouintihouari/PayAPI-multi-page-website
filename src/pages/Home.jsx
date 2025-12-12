import Hero from "../components/home/Hero";
import bgPattern from "../assets/shared/desktop/bg-pattern-circle.svg";
import Clients from "../components/home/Clients";
import Features from "../components/home/Features";
import Services from "../components/home/Services";

const Home = () => {
  return (
    <div className="relative">
      <img
        src={bgPattern}
        alt="background pattern"
        className="absolute -top-40 z-30 md:-top-100 lg:-top-50 lg:-right-80"
      />
      <Hero />
      <Clients />
      <Features />
      <Services />
    </div>
  );
};

export default Home;
