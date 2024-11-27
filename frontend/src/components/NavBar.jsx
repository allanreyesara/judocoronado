
const NavBar = () => {
    return (
            <header>
                <div className="navbar bg-base-100">
                    <div className="navbar-start">
                        <a className="btn btn-ghost text-xl" href="/">Judo Coronado</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><a href="/">Inicio</a></li>
                            <li><a href='/lecheros'>Los Lecheros</a></li>
                            <li><a href="/contact">Contáctanos</a></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn btn-outline btn-primary" href="/login">Login</a>
                    </div>
                </div>
            </header>
            );
        }


export default NavBar;