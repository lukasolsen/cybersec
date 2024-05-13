import { createFileRoute } from "@tanstack/react-router";
import { Card } from "../components/Card";
import { FaCloudDownloadAlt } from "react-icons/fa";

const Index: React.FC = () => {
  return (
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

          <button className="bg-gradient-to-b from-teal-600 to-teal-700 text-white rounded-lg py-3 px-4 mt-4 font-semibold">
            Get Started Now
          </button>
        </div>
      </section>

      <section className="p-20" id="brief">
        <div className="grid grid-cols-4 gap-8">
          <Card
            title="Managed Detection and Response"
            descripton="We take the #1 breach prevention software, CrowdStrike, and couple it with 100% U.S. threat hunting and response services 24x7x365..."
            link="/cyber-security"
            icon={<FaCloudDownloadAlt />}
          />
          <Card
            title="Managed Detection and Response"
            descripton="We take the #1 breach prevention software, CrowdStrike, and couple it with 100% U.S. threat hunting and response services 24x7x365..."
            link="/cyber-security"
            icon={<FaCloudDownloadAlt />}
          />
          <Card
            title="Managed Detection and Response"
            descripton="We take the #1 breach prevention software, CrowdStrike, and couple it with 100% U.S. threat hunting and response services 24x7x365..."
            link="/cyber-security"
            icon={<FaCloudDownloadAlt />}
          />
          <Card
            title="Managed Detection and Response"
            descripton="We take the #1 breach prevention software, CrowdStrike, and couple it with 100% U.S. threat hunting and response services 24x7x365..."
            link="/cyber-security"
            icon={<FaCloudDownloadAlt />}
          />
        </div>
      </section>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
