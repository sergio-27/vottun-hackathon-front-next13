import Link from "next/link";
import React from "react";

const contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="p-8 bg-gray-700 rounded-lg shadow-md w-1/2">
        <h1 className="text-4xl mb-6 text-center font-bold">Contacto</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Nombre:
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Mensaje:
            </label>
            <textarea
              id="message"
              className="w-full h-32 px-4 py-2 mt-2 text-black rounded-md focus:outline-none focus:ring focus:ring-opacity-50"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 mt-4 text-sm font-medium text-black bg-gray-300 rounded-md hover:bg-gray-400 focus:outline-none focus:ring focus:ring-opacity-50"
          >
            Enviar Mensaje
          </button>
          <Link href="/" passHref>
              <button className="focus:shadow-outline rounded bg-gray-500 my-8 px-4 py-2 font-bold text-white hover:bg-gray-600 focus:outline-none">
                Back
              </button>
            </Link>
        </form>
      </div>
    </div>
  );
};

export default contact;
