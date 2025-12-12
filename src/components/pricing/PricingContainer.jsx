import PricingCard from "./PricingCard";

import pattern from "../../assets/shared/desktop/bg-pattern-circle.svg";

const plans = [
  {
    title: "Free Plan",
    description:
      "Build and test using our core set of products with up to 100 API requests",
    price: "0.00",
    features: [
      { name: "Transactions", included: true },
      { name: "Auth", included: true },
      { name: "Identity", included: true },
      { name: "Investments", included: false },
      { name: "Assets", included: false },
      { name: "Liabilities", included: false },
      { name: "Income", included: false },
    ],
  },
  {
    title: "Basic Plan",
    description:
      "Launch your project with unlimited requests and no contractual minimums",
    price: "249.00",
    features: [
      { name: "Transactions", included: true },
      { name: "Auth", included: true },
      { name: "Identity", included: true },
      { name: "Investments", included: true },
      { name: "Assets", included: true },
      { name: "Liabilities", included: false },
      { name: "Income", included: false },
    ],
  },
  {
    title: "Premium Plan",
    description:
      "Get tailored solutions, volume pricing, and dedicated support for your team",
    price: "499.00",
    features: [
      { name: "Transactions", included: true },
      { name: "Auth", included: true },
      { name: "Identity", included: true },
      { name: "Investments", included: true },
      { name: "Assets", included: true },
      { name: "Liabilities", included: true },
      { name: "Income", included: true },
    ],
  },
];

const PricingContainer = () => {
  return (
    <section className="relative min-h-screen px-4 py-20 md:-mb-50 lg:mb-0 lg:p-40 xl:py-8">
      <img
        className="absolute -top-100 -right-50 z-0 md:-top-160 md:-right-120 lg:-top-160 lg:-right-20"
        src={pattern}
        alt="pattern"
      />
      <div className="max-w-7xl">
        <h1 className="font-dm text-dm-h3 md:text-dm-h2 lg:text-dm-h1 mb-16 text-center text-slate-700 lg:text-left">
          Pricing
        </h1>
        <div className="grid grid-cols-1 gap-8 divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0 lg:text-left">
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              title={plan.title}
              description={plan.description}
              price={plan.price}
              features={plan.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingContainer;
