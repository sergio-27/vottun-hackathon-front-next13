import { RouterOutputs, api } from "@/utils/api";
import { TRPCError } from "@trpc/server";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { mutate: createdUser } = api.user.createUser.useMutation({
    onSuccess: onSuccessCreateUser, 
    onError: onError
  });
  const { data, refetch } = api.user.getUser.useQuery(
    { email: email },
    { enabled: false },
  );

  const { mutate: createWallet } =
    api.user.getUserNewHash.useMutation({
      onSuccess: onCreateWalletSuccess,
      onError: onError,
    });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }
    // Aquí enviarías los datos a tu servidor o API
    await onClickRegister();
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-md">
        <h1 className="mb-8 text-center text-3xl text-white">Registro</h1>
        {error && (
          <p className="rounded bg-red-200 p-3 text-red-600">{error}</p>
        )}
        <form
          onSubmit={handleSubmit}
          className="mb-4 rounded bg-gray-700 px-8 pb-8 pt-6"
        >
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-white"
              htmlFor="username"
            >
              Username:
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-white"
              htmlFor="email"
            >
              Email:
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="mb-2 block text-sm font-bold text-white"
              htmlFor="password"
            >
              Password:
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="mb-2 block text-sm font-bold text-white"
              htmlFor="confirm-password"
            >
              Confirm Password:
            </label>
            <input
              className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            {isLoading ? (
              <p className="text-xl text-white">Loading...</p>
            ) : (
              <>
                <button
                  onClick={() => handleSubmit}
                  className="focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
                  type="submit"
                >
                  Sign up
                </button>
                <Link href="/" passHref>
                  <button className="focus:shadow-outline rounded bg-gray-500 px-4 py-2 font-bold text-white hover:bg-gray-600 focus:outline-none">
                    Back
                  </button>
                </Link>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );

  function onError(exception: any) {
    setIsLoading(false);
    setError(exception.message);
  }

  async function onSuccessCreateUser(user: RouterOutputs['user']['createUser']) {
    if (user.createdUser) {
      createWallet({
        email: user.createdUser.email
      });
      
    }
  }

  async function onCreateWalletSuccess(response: RouterOutputs['user']['getUserNewHash']) {
    if (response) {
      router.push(
        "https://wallet.vottun.io/?hash=" +
          response.getNewHashResponse.hash +
          "&username=" +
          response.email,
      );
    }
  }

  async function onClickRegister() {
    setIsLoading(true);

    const responseGetUser = await refetch();

    if (data != null || data != undefined) {
      setError("Error ya existe");
    } else {
       createdUser({
          username: username,
          email: email,
        });
    }

    //
  }
};

export default Signup;
