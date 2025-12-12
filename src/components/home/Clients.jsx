import { NavLink } from "react-router";

import Tesla from "../../assets/shared/desktop/tesla-light.svg";
import Microsoft from "../../assets/shared/desktop/microsoft-light.svg";
import HP from "../../assets/shared/desktop/hewlett-packard-light.svg";
import Oracle from "../../assets/shared/desktop/oracle-light.svg";
import Google from "../../assets/shared/desktop/google-light.svg";
import Nvidia from "../../assets/shared/desktop/nvidia-light.svg";
import bgPattern from "../../assets/shared/desktop/bg-pattern-circle.svg";

import Button from "../ui/Button";

const Clients = () => {
  const brands = [
    { src: Tesla, alt: "Tesla" },
    { src: Microsoft, alt: "Microsoft" },
    { src: HP, alt: "HP" },
    { src: Oracle, alt: "Oracle" },
    { src: Google, alt: "Google" },
    { src: Nvidia, alt: "Nvidia" },
  ];

  return (
    <section className="bg-mirage-blue text-link-water-white relative flex flex-col-reverse overflow-hidden p-4 py-20 pt-20 text-center md:p-10 lg:-mt-20 lg:flex-row lg:px-40 lg:text-left">
      <img
        className="absolute -top-60 md:-top-150 lg:-top-120 lg:-left-100"
        src={bgPattern}
        alt="bg pattern"
      />
      <article className="relative z-30 lg:w-1/2">
        <h2 className="text text-dm-h3 font-dm my-10">Who we work with</h2>
        <p className="text-pb-sans-1 text-link-water-white md:mx-auto md:w-8/12 lg:mx-0">
          Today, millions of people around the world have successfully connected
          their accounts to apps they love using our API. We provide developers
          with the tools they need to create easy and accessible experiences for
          their users.{" "}
        </p>
        <Button variant="secondaryInverse" className="my-5 cursor-pointer">
          <NavLink to="/about">About</NavLink>
        </Button>
      </article>
      <div className="mx-auto grid grid-cols-2 grid-rows-3 content-center gap-10 md:grid-cols-3 md:grid-rows-2 lg:my-28">
        {brands.map((brand) => (
          <img src={brand.src} alt={brand.alt} />
        ))}
      </div>
    </section>
  );
};

export default Clients;
