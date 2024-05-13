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
    {
      title: "Contact Us",
      links: [
        {
          title: "Address",
          value: "Satkhira, Kaliganji, BD",
        },
        {
          title: "Email",
          value: "aburaihan.it009@gmail.com",
        },
        {
          title: "Phone",
          value: "+88 01407152619",
        },
      ],
    },
    {
      title: "Follow Us",
      links: [
        {
          title: "Facebook",
          link: "https://facebook.com",
        },
        {
          title: "Twitter",
          link: "https://twitter.com",
        },
        {
          title: "Linkedin",
          link: "https://linkedin.com",
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
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="flex flex-col gap-1 justify-center">
              <h1 className="text-2xl font-bold justify-start">
                {field.title}
              </h1>
              {field.links.map((link) => {
                if (link.value)
                  return (
                    <span className="text-gray-500 dark:text-gray-400">
                      {link.title}: <span className="ml-4">{link.value}</span>
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
          </div>
        ))}
      </div>
    </div>
  );
};
