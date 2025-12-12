import Button from "../ui/Button";

const Subscribe = () => {
  return (
    <form className="relative mt-5 flex w-full max-w-[500px] flex-col gap-4 md:flex-row md:items-center md:gap-0 md:rounded-full md:bg-white md:p-1 md:shadow-lg">
      <input
        className="h-12 w-full rounded-full bg-white px-6 py-3 outline-none placeholder:text-gray-400 md:h-auto md:flex-1 md:bg-transparent md:shadow-none"
        type="email"
        placeholder="Enter email address"
      />

      <Button
        type="submit"
        className="h-full w-full cursor-pointer rounded-full shadow-xl md:w-auto md:px-8 md:shadow-none"
      >
        Schedule a Demo
      </Button>
    </form>
  );
};

export default Subscribe;
