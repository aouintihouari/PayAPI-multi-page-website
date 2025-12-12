import Form from "../components/contact/Form";
import Clients from "../components/contact/Clients";

import bgPattern from "../assets/shared/desktop/bg-pattern-circle.svg";

const Contact = () => {
  return (
    <section className="relative">
      <img
        src={bgPattern}
        alt="background pattern"
        className="absolute -top-100 -right-60 md:-top-150 md:-right-120 lg:-top-150 lg:-right-30"
      />
      <h1 className="font-dm md:text-dm-h2 text-dm-h3 lg:text-dm-h1 text-sun-juan-blue mx-auto p-4 text-center md:w-10/12 md:p-10 lg:mx-0 lg:w-8/12 lg:px-40 lg:text-left">
        Submit a help request and we’ll get in touch shortly.
      </h1>
      <div className="flex flex-col justify-between p-4 md:p-10 lg:w-full lg:flex-row lg:items-center lg:gap-10 lg:px-40">
        <Form />
        <Clients />
      </div>
    </section>
  );
};

export default Contact;
