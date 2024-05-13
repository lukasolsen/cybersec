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
    <div className="border rounded-lg h-full">
      <span className="z-10 size-16 flex justify-center items-center w-full">
        {icon}
      </span>

      <div className="p-4 flex flex-col justify-between h-full">
        <h1 className="text-2xl font-bold">{title}</h1>

        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};
