import Link from "next/link";
import { Logo } from "@/components/Logo";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

interface NavItemProps {
  href: string;
  title: string;
}

const socialLinks = [
  {
    icon: <FaFacebook />,
    href: "https://www.facebook.com/profile.php?id=61559667573420",
  },
  { icon: <FaInstagram />, href: "https://www.instagram.com/big0.dev/" },
  {
    icon: <FaYoutube />,
    href: "https://www.youtube.com/channel/UCdFdgYjRGC53PPmE2XTlPhw",
  },
  { icon: <FaLinkedin />, href: "https://www.linkedin.com/company/big0-dev/" },
];

export function Footer() {
  const staticNavbar: NavItemProps[] = [
    { title: "Home", href: "/" },
    { title: "About", href: "/" },
    { title: "What we think", href: "/" },
    { title: "Services", href: "/" },
    { title: "Contact Us", href: "/" },
    { title: "Careers", href: "/" },
  ];

  const servicesNavbar: NavItemProps[] = [
    { title: "Market Research", href: "/" },
    { title: "Market Analysis", href: "/" },
    { title: "SEO Consultancy", href: "/" },
    { title: "Page Ranking", href: "/" },
    { title: "SMM", href: "/" },
  ];

  const featuresNavbar: NavItemProps[] = [
    { title: "Brand  Strategy", href: "/" },
    { title: "Audience Analytics", href: "/" },
    { title: "Copywriting", href: "/" },
    { title: "Team Training", href: "/" },
    { title: "Email Marketing", href: "/" },
  ];

  return (
    <footer className="bg-custom-dark text-white space-y-2 sm:space-y-8">
      <div className="p-8 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8">
        {/* Logo with text */}
        <div className="space-y-4 xl:justify-self-center">
          <Logo />
          <p className="text-white/85">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <ul className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <li
                key={index}
                className="text-white hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
              >
                <Link href={link.href} target="_blank">
                  {link.icon}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/*  Static Navbar  */}
        <div className="space-y-4 xl:justify-self-center">
          <h4 className="font-jakarta font-bold text-white text-lg">
            Our Company
          </h4>

          <ul className="space-y-4">
            {staticNavbar.map((item, index) => (
              <li
                key={index}
                className="font-lexend text-white/70 hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/*  Services Navbar  */}
        <div className="space-y-4 xl:justify-self-center">
          <h4 className="font-jakarta font-bold text-white text-lg">
            Services
          </h4>

          <ul className="space-y-4">
            {servicesNavbar.map((item, index) => (
              <li
                key={index}
                className="font-lexend text-white/70 hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/*  Features Navbar  */}
        <div className="space-y-4 xl:justify-self-center">
          <h4 className="font-jakarta font-bold text-white text-lg">
            Features
          </h4>

          <ul className="space-y-4">
            {featuresNavbar.map((item, index) => (
              <li
                key={index}
                className="font-lexend text-white/70 hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4 xl:justify-self-center">
          <h4 className="font-jakarta font-bold text-white text-lg">Contact</h4>

          <ul className="space-y-4">
            <li className="flex items-center gap-4 font-lexend text-white">
              <FaPhone size={20} />
              <Link
                href="tel:+921231231234"
                className="text-white/80 hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
              >
                +92-123-123-1234
              </Link>
            </li>
            <li className="flex items-center gap-4 font-lexend text-white">
              <FaLocationDot size={20} />
              <Link
                href="https://maps.app.goo.gl/"
                target="_blank"
                className="text-white/80 hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
              >
                2508 TX 78746 UK
              </Link>
            </li>
            <li className="flex items-center gap-4 font-lexend text-white">
              <MdOutlineMail size={20} />
              <Link
                href="mailto:owrdigital@gmail.com"
                className="text-white/80 hover:text-custom-emerald focus-within:text-custom-emerald transition-all duration-300"
              >
                owrdigital@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full text-center py-2 bg-custom-emerald">
        <h6 className="text-custom-dark capitalize">
          All Copyrights are reserved
        </h6>
      </div>
    </footer>
  );
}
