import React, { useState } from 'react';
import Link from 'next/link';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Aquí manejarías la lógica del inicio de sesión
    console.log({ username, password });
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-3xl text-center text-white">Inicio de Sesión</h1>
        <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-gray-700 rounded">
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="username">
              Username:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Iniciar Sesión
            </button>
            <Link href="/" passHref>
              <button className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline">
                Volver al Home
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
