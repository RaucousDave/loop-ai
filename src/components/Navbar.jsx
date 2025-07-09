"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // optional icons

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Join Waitlist", href: "#cta" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-20">
      <div className="flex justify-between items-center px-6 py-2 md:px-12 text-primary">
        {/* <h1 className="text-2xl font-bold tracking-wide">Loop.AI</h1> */}
        <div className="w-16">
          <img src="/logo.png" alt="" />
        </div>
        {/* Desktop Links */}
        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-purple-400 transition"
            >
              {link.name}
            </a>
          ))}
        </div>

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
              className="text-white text-lg hover:text-purple-400"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
