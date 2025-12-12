import { NavLink } from "react-router";

import logo from "../../assets/shared/desktop/logo-light.svg";
import SocialMediaIcons from "../features/SocialMediaIcons";
import bgPattern from "../../assets/shared/desktop/bg-pattern-circle.svg";

const Footer = () => {
  return (
    <footer className="text-link-water-white bg-mirage-blue relative flex flex-col justify-between overflow-hidden p-4 pt-20 md:flex-row md:p-10 lg:px-40 lg:py-5">
      <img
        className="absolute -bottom-50 md:top-0 md:-right-70"
        src={bgPattern}
        alt="pattern image"
      />
      <div className="font-pb-sans-1 flex flex-col items-center md:flex-row">
        <img src={logo} alt="logo" className="-mt-5 mb-10 md:mt-0 md:mb-0" />
        <NavLink className="mb-5 cursor-pointer opacity-70 hover:opacity-100 md:mb-0 md:ml-20">
          Pricing
        </NavLink>
        <NavLink className="mb-5 cursor-pointer opacity-70 hover:opacity-100 md:mb-0 md:ml-10">
          About
        </NavLink>
        <NavLink className="mb-5 cursor-pointer opacity-70 hover:opacity-100 md:mb-0 md:ml-10">
          Contact
        </NavLink>
      </div>
      <SocialMediaIcons />
    </footer>
  );
};

export default Footer;
