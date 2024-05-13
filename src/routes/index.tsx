import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: () => (
    <div>
      <section className="p-20" id="home">
        <div className="flex flex-col justify-center items-center gap-8">
          <h1 className="text-8xl font-bold text-center w-full tracking-wide">
            Cyber Security Services
          </h1>
          <p className="dark:text-gray-400 text-lg w-8/12">
            Cyber Security Services is a U.S. based cybersecurity company
            delivering services and managing cyber risk on behalf of our valued
            distribution and technology partners.
          </p>

          <button className="bg-gradient-to-b from-teal-500 to-teal-600 text-white rounded-lg py-3 px-4 mt-4 font-semibold">
            Get Started Now
          </button>
        </div>
      </section>
    </div>
  ),
});
