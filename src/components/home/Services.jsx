import personalFinances from "../../assets/home/desktop/icon-personal-finances.svg";
import bankingCoverage from "../../assets/home/desktop/icon-banking-and-coverage.svg";
import consumerPayments from "../../assets/home/desktop/icon-consumer-payments.svg";

const services = [
  {
    img: personalFinances,
    title: "Personal Finances",
    description:
      "Consolidate financial data from multiple sources and categorize transactions up to 2 years of history. Analyze reports to reconcile activities in your account. ",
  },
  {
    img: bankingCoverage,
    title: "Banking & Coverage",
    description:
      "With our platform, you can speed up account onboarding and support ongoing payments for checking, savings, credit card, and brokerage accounts.",
  },
  {
    img: consumerPayments,
    title: "Consumer Payments",
    description:
      "It’s easier to set up secure bank payments with us through a flow designed with the user experience in mind. Customers could instantly authenticate their account.",
  },
];

const Services = () => {
  return (
    <section className="my-20 flex flex-col justify-between text-center md:flex-row lg:px-40">
      {services.map((service) => (
        <div className="m-10" key={service.title}>
          <img className="mx-auto" src={service.img} alt={service.title} />
          <h4 className="text-sun-juan-blue text-pb-sans-1 my-5 font-bold">
            {service.title}
          </h4>
          <p className="text-light-sun-juan-blue text-pb-sans-2">
            {service.description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Services;
