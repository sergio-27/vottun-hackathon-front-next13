import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            {/* Asegúrate de que las dimensiones asignadas a width y height correspondan al tamaño de tu logo */}
            <Image src="/logo-disrup3.png" alt="Disruptive Management Logo" width={100} height={40} />
          </div>
        </Link>
        <div className="flex items-center">
          {/* Actualiza tu URL de contacto aquí */}
          <Link href="/contact">
            <div className="rounded-lg px-4 py-2 text-white hover:text-gray-300 cursor-pointer">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
