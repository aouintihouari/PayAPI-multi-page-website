import EasyToImplement from "../../assets/home/desktop/illustration-easy-to-implement.svg";
import simpleUi from "../../assets/home/desktop/illustration-simple-ui.svg";
import pattern from "../../assets/shared/desktop/bg-pattern-circle.svg";

const Features = () => {
  return (
    <section className="relative lg:px-40">
      <img
        className="absolute -right-80 -bottom-10 z-0 hidden lg:block"
        src={pattern}
        alt="pattern"
      />
      <div className="z-30 mt-10 flex flex-col lg:flex-row">
        <div className="mx-auto lg:w-400">
          <img src={EasyToImplement} alt="Easy to implement" />
        </div>
        <div className="text-center md:-mt-10 lg:mt-20 lg:ml-20 lg:text-left">
          <h3 className="text-dm-h4 md:text-dm-h3 font-dm text-sun-juan-blue">
            Easy to implement
          </h3>
          <p className="text-pb-sans-2 md:text-pb-sans-1 text-light-sun-juan-blue mt-5 lg:w-10/12">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>
      <div className="z-30 mt-10 flex flex-col lg:flex-row-reverse">
        <div className="z-30 mx-auto lg:w-400">
          <img src={simpleUi} alt="Easy to implement" />
        </div>
        <div className="text-center md:-mt-10 lg:mt-20 lg:ml-20 lg:text-left">
          <h3 className="text-dm-h4 md:text-dm-h3 font-dm text-sun-juan-blue">
            Easy to implement
          </h3>
          <p className="text-pb-sans-2 md:text-pb-sans-1 text-light-sun-juan-blue mt-5 lg:w-10/12">
            Our API comes with just a few lines of code. You’ll be up and
            running in no time. We built our documentation page to integrate
            payments functionality with ease.
          </p>
        </div>
      </div>{" "}
    </section>
  );
};

export default Features;
