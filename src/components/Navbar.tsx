import { Link } from "@tanstack/react-router";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const Navbar: React.FC = () => {
  const Links = [
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Industries", path: "/industries" },
    { name: "About us", path: "/aboutus" },
  ];

  const SocialLinks = [
    {
      name: "Twitter",
      path: "https://twitter.com/",
      icon: <FaTwitter className="text-teal-500" />,
    },
    {
      name: "Linkedin",
      path: "https://linkedin.com/",
      icon: <FaLinkedin className="text-teal-500" />,
    },
    {
      name: "Instagram",
      path: "https://instagram.com/",
      icon: <RiInstagramFill className="text-teal-500" />,
    },
    {
      name: "Facebook",
      path: "https://facebook.com/",
      icon: <FaFacebookF className="text-teal-500" />,
    },
  ];

  return (
    <div className="flex flex-row items-center justify-between w-full p-4 px-16">
      <div>
        <Link className="text-2xl font-bold w-full" to="/">
          <img
            src="/logo.png"
            alt="logo"
            className="max-h-32 max-w-32 object-cover inline"
          />
        </Link>
      </div>

      <div className="flex flex-row items-center gap-4">
        {Links.map((link) => (
          <Link
            to={link.path}
            activeProps={{
              className: "dark:text-teal-400",
            }}
            className="text-gray-300 dark:text-gray-400 dark:hover:text-teal-400 transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-row items-center gap-4">
        {SocialLinks.map((link) => (
          <a href={link.path}>
            <button className="border border-teal-500 rounded-full h-8 w-8 flex items-center justify-center">
              {link.icon}
            </button>
          </a>
        ))}
      </div>
    </div>
  );
};
