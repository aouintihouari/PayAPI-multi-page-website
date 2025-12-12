import Tesla from "../../assets/shared/desktop/tesla.svg";
import Microsoft from "../../assets/shared/desktop/microsoft.svg";
import HP from "../../assets/shared/desktop/hewlett-packard.svg";
import Oracle from "../../assets/shared/desktop/oracle.svg";
import Google from "../../assets/shared/desktop/google.svg";
import Nvidia from "../../assets/shared/desktop/nvidia.svg";

const Clients = () => {
  const brands = [Tesla, Microsoft, HP, Oracle, Google, Nvidia];

  return (
    <div className="text-dm p-4 text-center lg:text-left">
      <h2 className="font-dm text-dm-h5 text-sun-juan-blue mx-auto w-9/12 lg:mx-0 lg:w-8/12">
        Join the thousands of innovators that are already building with us
      </h2>
      <div className="my-10 grid grid-cols-2 grid-rows-3 gap-10 md:grid-cols-3 md:grid-rows-2">
        {brands.map((brand) => (
          <img src={brand} alt="brand" key={brand} className="brand" />
        ))}
      </div>
    </div>
  );
};

export default Clients;
