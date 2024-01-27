import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 bg-black p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <div className="flex-grow text-xl font-bold text-white">
            Disruptive Management
          </div>
        </Link>
        <div className="flex items-center">
          <a
            href="tu-url-de-contacto"
            className="mr-4 rounded-lg px-4 py-2 text-white hover:text-gray-300"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
