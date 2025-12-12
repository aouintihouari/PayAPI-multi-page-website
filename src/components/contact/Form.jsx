import { useForm } from "react-hook-form";

import Button from "../ui/Button";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => alert(JSON.stringify(data, null, 2));

  return (
    <div className="flex items-center justify-center px-6 py-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
        <div className="relative">
          <input
            placeholder="Name"
            id="name"
            type="text"
            {...register("name")}
            className="w-full border-b border-slate-400 bg-transparent py-2 text-slate-700 placeholder-slate-400 transition-colors focus:border-slate-800 focus:outline-none"
          />
        </div>
        <div className="relative">
          <label
            htmlFor="email"
            className={`mb-1 block text-sm ${errors.email ? "text-red-400" : "text-slate-500"}`}
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            {...register("email", {
              required: "This field can't be empty",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            className={`w-full border-b bg-transparent py-2 transition-colors focus:outline-none ${
              errors.email
                ? "border-red-400 text-red-500 placeholder-red-300"
                : "border-slate-300 text-slate-700 focus:border-slate-800"
            }`}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
        <div className="relative">
          <input
            id="company"
            type="text"
            placeholder="Company Name"
            {...register("company")}
            className="w-full border-b border-slate-300 bg-transparent py-2 text-slate-700 placeholder-slate-400 transition-colors focus:border-slate-800 focus:outline-none"
          />
        </div>
        <div className="relative">
          <input
            id="title"
            type="text"
            placeholder="Title"
            {...register("title")}
            className="w-full border-b border-slate-300 bg-transparent py-2 text-slate-700 placeholder-slate-400 transition-colors focus:border-slate-800 focus:outline-none"
          />
        </div>
        <div className="relative">
          <textarea
            id="message"
            placeholder="Message"
            rows="4"
            {...register("message")}
            className="w-full resize-none border-b border-slate-300 bg-transparent py-2 text-slate-700 placeholder-slate-400 transition-colors focus:border-slate-800 focus:outline-none"
          ></textarea>
        </div>
        <div className="flex items-start space-x-3 pt-2">
          <div className="flex h-5 items-center">
            <input
              id="newsletter"
              type="checkbox"
              {...register("newsletter")}
              className="h-5 w-5 cursor-pointer rounded border-gray-300 text-pink-600 accent-pink-600 focus:ring-pink-500"
            />
          </div>
          <div className="text-sm">
            <label
              htmlFor="newsletter"
              className="font-pb-sans cursor-pointer text-slate-600"
            >
              Stay up-to-date with company announcements and updates to our API
            </label>
          </div>
        </div>
        <div className="pt-4">
          <Button
            variant="secondaryInverse"
            className="border-sun-juan-blue hover:text-link-water-white text-sun-juan-blue hover:bg-sun-juan-blue w-32 cursor-pointer rounded-full px-6 py-3 text-sm font-bold shadow-lg transition-colors"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
