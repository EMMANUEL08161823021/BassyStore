import Image from "next/image";

import {
  Phone,
  Globe,
  Mail,
  Hand,
  Smartphone,
  Laptop,
  Cable,
  Gamepad2,
} from "lucide-react";

import {
  FaInstagram,
  FaFacebookF,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const services = [
  {
    name: "Phones",
    icon: Smartphone,
  },
  {
    name: "Laptops",
    icon: Laptop,
  },
  {
    name: "Accessories",
    icon: Cable,
  },
  {
    name: "Games",
    icon: Gamepad2,
  },
];

const socialLinks = [
  {
    label: "JiJi",
    icon: Hand,
    href: "https://jiji.ng/shop/mrbgadgets",
    bg: "#EA3323",
    iconColor: "#ffffff",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/mrbgadgets?stkn=Y3hlcHEzNDEzY2Zl&utm_source=qr",
    bg: "linear-gradient(45deg, #FEDA75, #FA7E1E, #D62976, #962FBF, #4F5BD5)",
    iconColor: "#ffffff",
  },
  {
    label: "TikTok",
    icon: FaTiktok,
    href: "https://www.tiktok.com/@mrbgadgets?_r=1&_t=ZS-9A7DKLKj1Db",
    bg: "#000000",
    iconColor: "#ffffff",
  },
  {
    label: "SnapChat",
    icon: FaSnapchatGhost,
    href: "https://www.snapchat.com/add/bassyvibesz?share_id=rzw8ma2KS9qfc1lbuvSA8Q&locale=en_NG",
    bg: "#FFFC00",
    iconColor: "#000000",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      {/* Phone container */}
      <div className="relative w-full max-w-[500px] overflow-hidden bg-white shadow-2xl">
        {/* Top header */}
        <header 
          style={{
            backgroundImage: "url('/bassy-cac.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top",
            // backgroundAttachment: "fixed",
          }}
        
          className="relative h-[265px] overflow-hidden bg-black">
          {/* Orange divider */}

          
          {/* <Image
            src="/bassy-cac.jpg"
            alt="Edson Marques"
            fill
            className="object-cover"
            priority
          /> */}
          {/* <div className="absolute bottom-0 h-5 w-full border-t-4 border-black" /> */}
        </header>

        {/* Main profile section */}
        <section
          className="relative overflow-hidden px-5 pb-8"
          style={{
            backgroundImage: "url('/gadgets-background.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            // backgroundAttachment: "fixed",
          }}
        >
          {/* Background overlay */}
          <div className="absolute inset-0 bg-white/85" />

          {/* Section content */}
          <div className="relative z-10">
            {/* Name and profession */}
            <div className="mt-3 bg-white text-center">
              <h1 className="text-[22px] font-bold text-gray-700">
                MrB Gadgets
              </h1>

              <p className="text-sm leading-5 font-bold text-gray-600">
                Address: Goodness Plaza, 10 Pepple Street, Computer Village,
                Ikeja, Lagos. Opposite Keystone Bank
              </p>
            </div>

            {/* Services */}
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4">
              {services.map(({ name, icon: Icon }) => (
                <div
                  key={name}
                  className="flex items-center font-semibold justify-center gap-2 text-[13px] text-gray-500"
                >
                  <Icon
                    size={17}
                    strokeWidth={1.8}
                    className="text-black"
                  />

                  <span>{name}</span>
                </div>
              ))}
            </div>
            
            {/* WhatsApp */}

            {/* Social media links */}
            <div className="mt-8 space-y-3">
              <div className="">
                <a
                  href="https://wa.me/2348082183770"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="
                    group flex h-[68px] w-full items-center
                    justify-between
                    border border-gray-100 bg-white/95
                    px-4 shadow-sm backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-gray-200
                    hover:bg-white
                    hover:shadow-md
                  "
                >
                  {/* Logo + Name */}
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl
                        bg-[#25D366]
                        transition-transform duration-300
                        group-hover:scale-105
                      "
                    >
                      <FaWhatsapp size={22} color="white" />
                    </span>

                    <span className="text-sm font-semibold text-gray-800">
                      WhatsApp
                    </span>
                  </div>

                  {/* Chat button */}
                  <span
                    className="
                      bg-[#25D366]
                      px-4 py-2
                      text-[11px] font-bold text-white
                      transition-all duration-300
                      group-hover:bg-[#20bd5a]
                      group-active:scale-95
                    "
                  >
                    Chat
                  </span>
                </a>
              </div>
              {socialLinks.map(({ label, icon: Icon, href, bg, iconColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${label}`}
                  className="
                    group flex h-[68px] w-full items-center
                    justify-between
                    border border-gray-100 bg-white/95
                    px-4 shadow-sm backdrop-blur-sm
                    transition-all duration-300
                    hover:-translate-y-0.5
                    hover:border-gray-200
                    hover:bg-white
                    hover:shadow-md
                  "
                >
                  {/* Logo + Social name */}
                  <div className="flex items-center gap-3">
                    <span
                      className="
                        flex h-11 w-11 shrink-0
                        items-center justify-center
                        rounded-xl
                        transition-transform duration-300
                        group-hover:scale-105
                      "
                      style={{ background: bg }}
                    >
                      <Icon size={21} color={iconColor} />
                    </span>

                    <span
                      className="
                        text-sm font-semibold text-gray-800
                        transition-colors duration-300
                        group-hover:text-gray-950
                      "
                    >
                      {label}
                    </span>
                  </div>

                  {/* Visit button */}
                  <span
                    className="
                      bg-gray-900
                      px-4 py-2
                      text-[11px] font-bold text-white
                      transition-all duration-300
                      group-hover:bg-gray-700
                      group-active:scale-95
                    "
                  >
                    Visit
                  </span>
                </a>
              ))}
            </div>

          </div>
        </section>

        {/* Bottom call to action */}
        <footer className="relative flex h-[88px] items-center justify-center border-t-[7px] border">
          <p className="flex items-center gap-2 text-[9px] font-medium uppercase text-black">
            <Hand size={15} />
            ...Maximizing value for money
          </p>
        </footer>
      </div>
    </main>
  );
}