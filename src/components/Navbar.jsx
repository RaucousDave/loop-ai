"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Why Loop AI?", href: "#whyloopai" },
  ];

  return (
    <nav className="top-0 left-0 w-full z-20">
      <div className="flex bg-gray-200 rounded-full shadow justify-between items-center px-6 py-1 md:px-12 text-black">
        {/* <h1 className="text-2xl font-bold tracking-wide">Loop.AI</h1> */}
        <div className="w-12">
          <img src="/logos/logo-2.png" alt="" />
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-accent-dark font-medium transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        <button className="bg-black hidden md:flex text-white px-5 py-2 rounded-full font-medium">
          Launch
        </button>

        {/* Mobile Menu Icon */}
        <button className="md:hidden" onClick={() => setOpen((prev) => !prev)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center bg-black/80 backdrop-blur-md py-6 space-y-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-lg hover:text-accent-dark"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="bg-white text-black px-5 py-2 rounded-full font-medium">
            Launch
          </button>
        </div>
      )}
    </nav>
  );
}
