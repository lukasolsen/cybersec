type CardProps = {
  title: string;
  icon: React.ReactNode;

  descripton: string;

  link: string;
};

export const Card: React.FC<CardProps> = ({
  descripton,
  icon,
  link,
  title,
}) => {
  return (
    <div className="p-4 border-2 border-[#15282F90] rounded-lg bg-card flex flex-col gap-8">
      <span className="text-2xl font-bold bg-[#99F6E415] p-1 rounded-xl w-10 h-10 flex items-center justify-center">
        {icon}
      </span>

      <h1 className="text-2xl font-bold">{title}</h1>

      <p>{descripton}</p>

      <a
        className="w-full text-teal-400 flex flex-row items-center justify-between"
        href={link}
      >
        <span>Read More</span>
        <span className="text-2xl font-bold">→</span>
      </a>
    </div>
  );
};
