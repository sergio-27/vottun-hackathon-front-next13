import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Link href="/">
                <p className="nav-link">Inicio</p>
            </Link>
            <Link href="/about">
                <p className="nav-link">Acerca de</p>
            </Link>
            <Link href="/contact">
                <p className="nav-link">Contacto</p>
            </Link>
        </nav>
    );
};

export default Navbar;
