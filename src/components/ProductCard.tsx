import { AnimatePresence } from "framer-motion";
import { MovingBorder } from "./MovingBorder";
import { motion } from "framer-motion";

type ProductCardProps = {
  title: string;
  icon: React.ReactNode;
  description: string;

  active?: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({
  description,
  icon,
  title,

  active,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="relative group"
      onMouseEnter={onMouseEnter}
      onMouseDown={onMouseLeave}
    >
      <AnimatePresence>
        {active && (
          <motion.span
            className="absolute inset-0 h-full w-full bg-card/[0.8] block rounded-3xl border border-[#15282F90]"
            layoutId="hoverBackground"
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { duration: 0.15 },
            }}
            exit={{
              opacity: 0,
              transition: { duration: 0.15, delay: 0.2 },
            }}
          />
        )}
      </AnimatePresence>

      <div className="invisible inset-0 group-hover:visible absolute">
        <MovingBorder duration={10000} rx="10%" ry="10%">
          <div className="size-2 opacity-[0.8] bg-teal-400 rounded-full z-20" />
        </MovingBorder>
      </div>

      <div className="relative border border-[#15282F90] rounded-lg overflow-hidden backdrop-blur-xl h-full bg-card z-10">
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
