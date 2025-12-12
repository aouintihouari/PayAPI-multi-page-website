import { NavLink } from "react-router";

import phoneMockup from "../../assets/home/desktop/illustration-phone-mockup.svg";
import Subscribe from "../features/Subscribe";

const Hero = () => {
  return (
    <section className="mb-15 flex flex-col items-center justify-between px-4 pt-20 lg:my-20 lg:flex-row-reverse lg:p-40 xl:py-8">
      <div className="z-30 -mt-20 ml-10 md:-mt-15">
        <img src={phoneMockup} alt="phone mockup" />
      </div>
      <div className="text-center lg:text-left">
        <h1 className="font-dm text-sun-juan-blue text-dm-h3--line-height text-dm-h3 md:text-dm-h2 md:text-dm-h2--line-height lg:text-dm-h1 lg:text-dm-h1--line-height tracking-[-0.25px] md:mx-auto md:w-10/12 md:tracking-[-0.37px] lg:-mt-30 lg:w-140 lg:tracking-[-0.55px]">
          Start building with our APIs for absolutely free.
        </h1>
        <div className="flex md:justify-center lg:justify-start">
          <Subscribe />
        </div>
        <p className="text-light-sun-juan-blue mt-5 lg:mr-5">
          Have any questions?{" "}
          <NavLink to="/contact">
            <b>Contact Us</b>
          </NavLink>
        </p>
      </div>
    </section>
  );
};

export default Hero;
