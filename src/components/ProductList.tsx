import { FaCloudDownloadAlt } from "react-icons/fa";
import { ProductCard } from "./ProductCard";
import { useState } from "react";

export const ProductList: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    {
      title: "Administrert Deteksjon og Respons",
      description:
        "Vi tar den beste programvaren for bruddforebygging, CrowdStrike, og kobler den med 100% amerikanske tjenester for trusseljakt og respons 24x7x365...",
      icon: <FaCloudDownloadAlt className="text-teal-300 size-16" />,
    },
    {
      title: "Virtual CISO",
      description:
        "Vi kan fungere som din virtuelle sjef for informasjonssikkerhet (vCiso) og bringe spesialisert cybersikkerhetskompetanse til organisasjonen din. Vi designer et moden cybersikkerhetsprogram og reduserer risikoen betydelig.",
      icon: <FaCloudDownloadAlt className="text-teal-300" />,
    },
    {
      title: "Penetrasjonstesting",
      description:
        "Vårt penetrasjonstestingteam kan identifisere sårbarheter innen cybersikkerhet før en inntrenger har muligheten til å infiltrere nettverket eller datasystemet ditt. Vi avdekker svakheter i nettverket ditt eller innen applikasjoner.",
      icon: <FaCloudDownloadAlt className="text-teal-300" />,
    },
    {
      title: "Cyber Security",
      description:
        "Vårt penetrasjonstestingteam kan identifisere sårbarheter innen cybersikkerhet før en inntrenger har muligheten til å infiltrere nettverket eller datasystemet ditt. Vi avdekker svakheter i nettverket ditt eller innen applikasjoner.",
      icon: <FaCloudDownloadAlt className="text-teal-300" />,
    },
    {
      title: "Cyber Security",
      description:
        "Vårt penetrasjonstestingteam kan identifisere sårbarheter innen cybersikkerhet før en inntrenger har muligheten til å infiltrere nettverket eller datasystemet ditt. Vi avdekker svakheter i nettverket ditt eller innen applikasjoner.",
      icon: <FaCloudDownloadAlt className="text-teal-300" />,
    },
    {
      title: "Cyber Security",
      description:
        "Vårt penetrasjonstestingteam kan identifisere sårbarheter innen cybersikkerhet før en inntrenger har muligheten til å infiltrere nettverket eller datasystemet ditt. Vi avdekker svakheter i nettverket ditt eller innen applikasjoner.",
      icon: <FaCloudDownloadAlt className="text-teal-300" />,
    },
    {
      title: "Cyber Security",
      description:
        "Vårt penetrasjonstestingteam kan identifisere sårbarheter innen cybersikkerhet før en inntrenger har muligheten til å infiltrere nettverket eller datasystemet ditt. Vi avdekker svakheter i nettverket ditt eller innen applikasjoner.",
      icon: <FaCloudDownloadAlt className="text-teal-300" />,
    },
    {
      title: "Cyber Security",
      description:
        "Vårt penetrasjonstestingteam kan identifisere sårbarheter innen cybersikkerhet før en inntrenger har muligheten til å infiltrere nettverket eller datasystemet ditt. Vi avdekker svakheter i nettverket ditt eller innen applikasjoner.",
      icon: <FaCloudDownloadAlt className="text-teal-300" />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard
          key={product.title}
          title={product.title}
          description={product.description}
          icon={product.icon}
          active={hoveredIndex === index}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        />
      ))}
    </div>
  );
};
