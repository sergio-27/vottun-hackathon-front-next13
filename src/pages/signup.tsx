import { GetNewHashConvert } from '@/server/models/get-new-hash-response-model';
import { api } from '@/utils/api';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { boolean } from 'zod';

const Signup: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const {mutate: createdUser} = api.user.createUser.useMutation({});
  const {data, refetch} = api.user.getUser.useQuery({email: email}, {enabled: false});
  const {data: userResponse, refetch: userRefetch} = api.user.getUser.useQuery({email: email}, {enabled: false});
  const {data: createWalletResponse, refetch: createWalletRefetch} = api.user.getUserNewHash.useQuery({email: email}, {enabled: false});


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }
    // Aquí enviarías los datos a tu servidor o API
    await onClickRegister();
  };
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-3xl text-center text-white">Registro</h1>
        {error && <p className="p-3 text-red-600 bg-red-200 rounded">{error}</p>}
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
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="email">
              Email:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="password">
              Password:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-white" htmlFor="confirm-password">
              Confirm Password:
            </label>
            <input
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            {
              isLoading ? 
              <p className='text-white text-xl'>Loading...</p>
              : (
                <>
            <button
              onClick={() => handleSubmit}
              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
              >
              Sign up
            </button>
            <Link href="/" passHref>
              <button className="px-4 py-2 font-bold text-white bg-gray-500 rounded hover:bg-gray-600 focus:outline-none focus:shadow-outline">
                Back to Home
              </button>
            </Link>
              </>
              )
            }
          </div>
        </form>
      </div>
    </div>
  );

  async function onClickRegister() {

    setIsLoading(true);

    const responseGetUser = await refetch();

    if (data != null || data != undefined) {
      setError('Error ya existe');
    } else {
      const response = createdUser({
        username: username,
        email: email
      });

      const responseGetUser2 = await userRefetch();
      if (!userResponse) {
        console.log("responseGetUser2", responseGetUser2.data);
        const response = await createWalletRefetch();
        router.push("https://wallet.vottun.io/?hash=" + response.data.hash + "&username=" + email);
      } else {
        setError('Error creando usuario');
      }
    }
        
    //
  }
};

export default Signup;
