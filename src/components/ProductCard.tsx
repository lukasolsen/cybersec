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
    <div className="relative border border-r- rounded-lg overflow-hidden">
      {/* Border gradient */}
      <div className="absolute inset-0 from-[#fca5a5] to-[#9cdbff] mix-blend-multiply"></div>

      <span className="z-10 size-16 flex justify-center items-center w-full">
        {icon}
      </span>

      <div className="p-4 flex flex-col justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};
