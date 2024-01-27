const Footer = () => {
  return (
      <footer className="bg-black text-white py-6">
          <div className="container mx-auto px-4">
              <div className="flex flex-wrap justify-between items-center">
                  <div className="w-full md:w-auto mb-6 md:mb-0">
                      <a href="#" className="text-xl font-bold">Disruptive Management</a>
                  </div>
                  <div className="flex flex-wrap items-center">
                      <a href="https://twitter.com" className="mr-4 hover:text-gray-400">Twitter</a>
                      <a href="https://facebook.com" className="mr-4 hover:text-gray-400">Facebook</a>
                      <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
                  </div>
              </div>
              <div className="text-center mt-6">
                  <p>&copy; {(new Date().getFullYear())} Disruptive Management. Todos los derechos reservados.</p>
              </div>
          </div>
      </footer>
  );
};

export default Footer;
