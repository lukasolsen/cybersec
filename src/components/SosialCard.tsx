type Props = {
  image: string;
  link: string;
};

export const SosialCard: React.FC<Props> = ({ image, link }) => {
  return (
    <a
      className="border-2 border-gray-800 rounded-md dark:hover:border-teal-800 transition-all duration-300"
      href={link}
    >
      <img src={image} className="max-w-44" alt="sosial card" />
    </a>
  );
};
