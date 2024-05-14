import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { FaBars, FaLinkedin } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

export const Navbar: React.FC = () => {
  const [displayNavbar, setDisplayNavbar] = useState(false);
  const Links = [
    { name: "Produkter", path: "/products" },
    { name: "Tjenester", path: "/services" },
    { name: "Bransjer", path: "/industries" },
    { name: "Om oss", path: "/aboutus" },
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

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDisplayNavbar(false);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setDisplayNavbar(false);
      });
    };
  }, []);

  return (
    <nav className="flex flex-wrap flex-row items-center justify-between w-full p-4 px-28">
      <div>
        <Link className="text-2xl font-bold w-full" to="/">
          <img
            src="/logo.png"
            alt="logo"
            className="max-h-32 max-w-32 object-cover inline"
          />
        </Link>
      </div>

      <button
        className="cursor-pointer lg:hidden block"
        onClick={() => setDisplayNavbar(!displayNavbar)}
      >
        <FaBars size={"1.5rem"} />
      </button>

      <div
        className={
          displayNavbar
            ? "block lg:hidden flex flex-col gap-4"
            : `hidden lg:flex flex-row items-center gap-12`
        }
      >
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

      <div className="hidden lg:flex flex-row items-center gap-4">
        {SocialLinks.map((link) => (
          <a href={link.path}>
            <button className="border border-teal-500 rounded-full h-8 w-8 flex items-center justify-center">
              {link.icon}
            </button>
          </a>
        ))}
      </div>
    </nav>
  );
};
