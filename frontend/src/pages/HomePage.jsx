

const HomePage = () => {
    return (
        /*HEADER*/
        <header>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Judo Coronado</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Item 1</a></li>
                        <li><a>Item 2</a></li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-outline btn-primary">Login</a>
                </div>
            </div>
        </header>
        /*CONTENT*/

    );
};

export default HomePage;