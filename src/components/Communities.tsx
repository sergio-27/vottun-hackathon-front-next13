const Home = () => {
    return (
        <div className="bg-black min-h-screen text-white">
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-8">Communities</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Primer Elemento */}
                    <a href="tu-url-1" className="bg-sky-500 border-2 border-white rounded-lg p-4 text-center font-bold">
                        Community 1
                    </a>
                    {/* Segundo Elemento */}
                    <a href="tu-url-2" className="bg-sky-500 border-2 border-white rounded-lg p-4 text-center font-bold">
                        Community 2
                    </a>
                    {/* Tercer Elemento */}
                    <a href="tu-url-3" className="bg-sky-500 border-2 border-white rounded-lg p-4 text-center font-bold">
                        Community 3
                    </a>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    {/* Cuarto Elemento */}
                    <a href="tu-url-4" className="bg-sky-500 border-2 border-white rounded-lg p-4 text-center font-bold">
                        Community 4
                    </a>
                    {/* Quinto Elemento */}
                    <a href="tu-url-5" className="bg-sky-500 border-2 border-white rounded-lg p-4 text-center font-bold">
                        Community 5
                    </a>
                    {/* Sexto Elemento */}
                    <a href="tu-url-6" className="bg-sky-500 border-2 border-white rounded-lg p-4 text-center font-bold">
                        Community 6
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home;
