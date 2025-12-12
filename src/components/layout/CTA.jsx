import Subscribe from "../features/Subscribe";

const CTA = () => {
  return (
    <section className="-mt-10 mb-10 flex w-full flex-col items-center justify-between gap-10 p-4 py-20 md:p-10 lg:flex-row lg:px-40">
      <h5 className="text-sun-juan-blue font-dm text-dm-h3 md:text-dm-h2 text-center lg:text-left">
        Ready to start?
      </h5>

      <Subscribe />
    </section>
  );
};

export default CTA;
