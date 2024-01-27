import Image from 'next/image';
import heroImage from '../../public/hero-image.png'; // Asegúrate de reemplazar con la ruta correcta

const Hero = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center bg-black">
            <Image src={heroImage} alt="Hero Background" layout="fill" objectFit="cover" className="opacity-75"/>
            <div className="absolute">
                <a href="tu-url-de-login">
                    <button className="mb-4 px-10 py-4 bg-sky-500 text-black font-semibold rounded-md hover:bg-sky-600 transition duration-300 ease-in-out transform hover:-translate-y-1">Login</button>
                </a>
                <br/>
                <a href="tu-url-de-sign-in">
                    <button className="px-10 py-4 bg-sky-500 text-black font-semibold rounded-md hover:bg-sky-600 transition duration-300 ease-in-out transform hover:-translate-y-1">Sign in</button>
                </a>
            </div>
        </div>
    );
};


export default Hero;