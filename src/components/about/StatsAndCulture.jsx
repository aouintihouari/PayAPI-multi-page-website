const StatsAndCulture = () => {
  const stats = [
    { label: "Team Members", value: "300+" },
    { label: "Offices in the US", value: "3" },
    { label: "Transactions analyzed", value: "10M+" },
  ];

  const content = [
    {
      title: "The Culture",
      text: "We strongly believe there's always an opportunity to learn from each other outside of day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. We always value cross-team collaboration and diversity of thought, no matter the job title.",
    },
    {
      title: "The People",
      text: "We're all passionate about building a more efficient and inclusive financial infrastructure together. At PayAPI, we have diverse backgrounds and skills.",
    },
  ];

  return (
    <section className="-mt-20 mb-10 w-full px-6 py-12 font-sans md:-mt-20 md:px-16 lg:px-32">
      <div className="mb-16 grid grid-cols-1 gap-8 border-b border-gray-200 pb-12 md:grid-cols-3 md:gap-0 md:border-none md:pb-0">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`text-center md:text-left ${
              index < stats.length - 1
                ? "border-gray-200 md:border-r md:pr-12 lg:pr-24"
                : ""
            } ${index > 0 ? "md:pl-12 lg:pl-24" : ""} ${index < stats.length - 1 ? "border-b pb-8 md:border-b-0 md:pb-0" : ""}`}
          >
            <p className="mb-2 text-sm font-medium text-gray-500">
              {stat.label}
            </p>
            <p className="font-serif text-5xl font-bold text-[#be5272] md:text-6xl lg:text-7xl">
              {stat.value}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-12 md:gap-8">
        {content.map((item, index) => (
          <div
            key={index}
            className="flex flex-col text-center md:flex-row md:text-left lg:px-20 xl:gap-30"
          >
            <h3 className="mb-4 font-serif text-2xl font-bold text-[#2c3e50] md:flex-3 md:text-3xl">
              {item.title}
            </h3>
            <p className="w-full leading-relaxed text-gray-500 md:flex-5 lg:flex-10">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsAndCulture;
