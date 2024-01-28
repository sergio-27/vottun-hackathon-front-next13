import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from '../../public/hero2.png'; 

const Hero = () => {
    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen text-white bg-gradient-to-b from-black via-black to-gray-800">
            <Image
                src={heroImage}
                alt="Hero"
                layout="fill"
                objectFit="contain"
                className="opacity-60 shadow-lg rounded-lg -m-5 filter"
            />

            <div className="z-10 flex flex-col items-center p-4 text-center">
                <h1 className="mb-4 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl 2xl:text-8xl">
                    Disruptive Management
                </h1>

                <div className="flex gap-5">
                    <Link href="/login" className="px-8 py-3 text-sm font-medium transition duration-300 ease-in-out transform bg-white text-black rounded-md hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50">
                        Login
                    </Link>

                    <Link href="/signup" className="px-8 py-3 text-sm font-medium transition duration-300 ease-in-out transform border border-white rounded-md hover:-translate-y-1 hover:bg-white hover:text-black focus:outline-none focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
