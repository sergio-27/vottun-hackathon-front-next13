import Image from "next/image";
import Link from "next/link";
import heroImage from "../../public/hero-image.png"; // Asegúrate de reemplazar con la ruta correcta

const Hero = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black">
      <Image
        src={heroImage}
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        className="opacity-75"
      />
      <div className="absolute">
        <Link href="/login" passHref>
          <button className="mb-4 transform rounded-md bg-sky-500 px-10 py-4 font-semibold text-black transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-sky-600">
            Login
          </button>
        </Link>
        <br />
        <Link href="/signup" passHref>
          <button className="transform rounded-md bg-sky-500 px-10 py-4 font-semibold text-black transition duration-300 ease-in-out hover:-translate-y-1 hover:bg-sky-600">
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
