import { MovingBorder } from "./MovingBorder";

type ProductCardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  description,
  icon,
  title,
}) => {
  return (
    <div className="relative group">
      <div className="invisible inset-0 group-hover:visible absolute">
        <MovingBorder duration={10000} rx="10%" ry="10%">
          <div className="size-2 opacity-[0.8] bg-teal-400 rounded-full z-20" />
        </MovingBorder>
      </div>

      <div className="relative border rounded-lg overflow-hidden backdrop-blur-xl h-full">
        <span className="z-10 size-16 flex justify-center items-center w-full">
          {icon}
        </span>

        <div className="p-4 flex flex-col justify-between py-8 h-full">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );
};
