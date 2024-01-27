import React, { useState } from 'react';
import Image from 'next/image';
import menuIcon from '../../public/menu-icon.png'; // Reemplaza con la ruta de tu imagen

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black p-4 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl flex-grow">Disruptive Management</div>
                <div className="flex items-center">
                    <a href="tu-url-de-contacto" className="text-white mr-4 hover:text-gray-300 py-2 px-4 rounded-lg">Contact</a>
                </div>
            
            </div>
        </nav>
    );
};

export default Navbar;
