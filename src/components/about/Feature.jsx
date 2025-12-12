import bgPattern from "../../assets/shared/desktop/bg-pattern-circle.svg";

const Feature = () => {
  const sections = [
    {
      title: "Our Vision",
      content:
        "Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology.",
    },
    {
      title: "Our Business",
      content:
        "At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers.",
    },
  ];

  return (
    <div className="text-sun-juan-blue relative min-h-screen font-sans lg:px-80">
      <div className="absolute -top-180 -right-120 z-0 md:-top-150">
        <img src={bgPattern} alt="background pattern" />
      </div>
      <div className="absolute z-0 hidden lg:-bottom-60 lg:block xl:-bottom-150 xl:-left-100">
        <img src={bgPattern} alt="background pattern" />
      </div>
      <div className="relative z-10 max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-16 max-w-3xl md:mb-24">
          <h1 className="font-dm text-dm-h4 md:text-dm-h3 text-sun-juan-blue text-center leading-tight md:text-center lg:text-left">
            We empower innovators by delivering access to the financial system
          </h1>
        </div>
        <div className="space-y-12 md:space-y-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="flex flex-col gap-4 md:flex-row md:items-start md:gap-12"
            >
              <div className="md:w-1/3">
                <h2 className="text-sun-juan-blue text-center font-serif text-2xl font-bold md:text-left md:text-3xl">
                  {section.title}
                </h2>
              </div>
              <div className="md:w-2/3">
                <p className="text-light-sun-juan-blue font-pb-sans text-center text-sm leading-relaxed md:text-left md:text-base">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feature;
