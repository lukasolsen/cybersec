import { Link } from "@tanstack/react-router";

type Fields = {
  title: string;
  links: {
    title: string;
    value?: string;

    link?: string;
  }[];
};

export const Footer: React.FC = () => {
  const Fields: Fields[] = [
    {
      title: "About Us",
      links: [
        {
          title: "About Us",
          link: "/aboutus",
        },
        {
          title: "Contact",
          link: "/contact",
        },
        {
          title: "Review Us",
          link: "/review",
        },
      ],
    },
  ];

  return (
    <div className="p-16 w-full">
      <div className="grid grid-cols-5 w-full gap-8">
        <div className="flex flex-col gap-2 items-start justify-center">
          <img
            src="/logo.png"
            alt="logo"
            className="max-h-36 max-w-36 object-cover inline"
          />
          <p className="text-gray-500 dark:text-gray-400 text-center">
            A leading provider of cybersecurity services and solutions for
            distribution and technology partners around the United States.
          </p>
        </div>
        {Fields.map((field) => (
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold">{field.title}</h1>
            {field.links.map((link) => {
              if (link.value)
                return (
                  <span className="text-gray-500 dark:text-gray-400">
                    {link.title}

                    <span className="text-teal-500 dark:text-teal-400">
                      {link.value}
                    </span>
                  </span>
                );

              return (
                <Link
                  to={link.link}
                  className="text-gray-500 dark:text-gray-400 dark:hover:text-teal-400 transition-colors duration-300"
                >
                  {link.title}
                </Link>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
