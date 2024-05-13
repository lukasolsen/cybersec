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
          <p className="dark:text-gray-400 text-lg w-8/12 text-center">
            Cyber Security Services er et amerikansk basert
            cybersikkerhetsselskap som leverer tjenester og håndterer
            cyberrisiko på vegne av våre verdifulle distribusjons- og
            teknologipartnere.
          </p>

          <button className="bg-gradient-to-b from-teal-600 to-teal-700 text-white rounded-lg py-3 px-4 mt-4 font-semibold">
            Start nå!
          </button>
        </div>
      </section>

      <section className="p-20" id="brief">
        <div className="grid grid-cols-4 gap-8">
          <Card
            title="Administrert Deteksjon og Respons"
            descripton="Vi tar den beste programvaren for bruddforebygging, CrowdStrike, og kobler den med 100% amerikanske tjenester for trusseljakt og respons 24x7x365..."
            link="/cyber-security"
            icon={<FaCloudDownloadAlt className="text-teal-300" />}
          />
          <Card
            title="Virtual CISO"
            descripton="Vi kan fungere som din virtuelle sjef for informasjonssikkerhet (vCiso) og bringe spesialisert cybersikkerhetskompetanse til organisasjonen din. Vi designer et moden cybersikkerhetsprogram og reduserer risikoen betydelig."
            link="/cyber-security"
            icon={<FaCloudDownloadAlt className="text-teal-300" />}
          />
          <Card
            title="Penetrasjonstesting"
            descripton="Vårt penetrasjonstestingteam kan identifisere sårbarheter innen cybersikkerhet før en inntrenger har muligheten til å infiltrere nettverket eller datasystemet ditt. Vi avdekker svakheter i nettverket ditt eller innen applikasjoner."
            link="/cyber-security"
            icon={<FaCloudDownloadAlt className="text-teal-300" />}
          />
          <Card
            title="Cyber Security"
            descripton="Vårt penetrasjonstestingteam kan identifisere sårbarheter innen cybersikkerhet før en inntrenger har muligheten til å infiltrere nettverket eller datasystemet ditt. Vi avdekker svakheter i nettverket ditt eller innen applikasjoner."
            link="/cyber-security"
            icon={<FaCloudDownloadAlt className="text-teal-300" />}
          />
        </div>
      </section>
    </div>
  );
};

export const Route = createFileRoute("/")({
  component: Index,
});
