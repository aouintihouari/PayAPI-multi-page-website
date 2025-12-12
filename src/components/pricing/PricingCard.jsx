import Button from "../ui/Button";
import Feature from "./Feature";

const PricingCard = ({ title, description, price, features }) => {
  return (
    <div className="flex w-full flex-col items-center p-6 md:items-center lg:items-start">
      <h3 className="font-dm text-dm-h3 md:text-dm-h5 text-dark-pink mb-4 text-center font-bold lg:text-left">
        {title}
      </h3>
      <p className="font-pb-sans text-sun-juan-blue mb-8 hidden h-12 px-4 text-center text-sm leading-relaxed md:block lg:px-0 lg:text-left">
        {description}
      </p>
      <div className="font-dm text-sun-juan-blue mb-8 text-5xl md:my-6">
        ${price}
      </div>
      <div className="mb-8 w-full border-t border-slate-200"></div>
      <div className="mb-10 flex w-full flex-col items-start px-4 pl-8 md:pl-12 lg:pl-0">
        {features.map((feature, index) => (
          <Feature
            key={index}
            text={feature.name}
            included={feature.included}
          />
        ))}
      </div>
      <Button variant="secondary" className="cursor-pointer">
        Request Access
      </Button>
    </div>
  );
};

export default PricingCard;
