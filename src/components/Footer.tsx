const Footer = () => {
  return (
    <footer className="bg-black py-6 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="mb-6 w-full md:mb-0 md:w-auto">
            <a href="#" className="text-xl font-bold">
              Disruptive Management
            </a>
          </div>
          <div className="flex flex-wrap items-center">
            <a href="https://twitter.com" className="mr-4 hover:text-gray-400">
              Twitter
            </a>
            <a href="https://facebook.com" className="mr-4 hover:text-gray-400">
              Facebook
            </a>
            <a href="https://instagram.com" className="hover:text-gray-400">
              Instagram
            </a>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} Disruptive Management. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
