const Footer = () => {
    return (
        <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
            <nav className="grid grid-flow-col gap-4">
                <a className="link link-hover" href="/contact">Contáctanos</a>
                <a className="link link-hover">Los Lecheros</a>
            </nav>
            <nav>
                <div className="grid grid-flow-col gap-4">
                    <a href="https://www.facebook.com/judocoronado" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                        </svg>
                    </a>
                    <a href="https://wa.me/50688346235" target="_blank">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 32 32"
                            className="fill-current">
                            <path
                                d="M16 3C9.373 3 4 8.373 4 15c0 2.628.81 5.066 2.185 7.102L4.726 28.78a1 1 0 001.137 1.267l6.56-1.636A12.951 12.951 0 0016 27c6.627 0 12-5.373 12-12S22.627 3 16 3zm6.167 16.295c-.267.75-1.323 1.387-2.186 1.563-.58.12-1.306.214-3.801-1.067-3.197-1.403-5.267-4.82-5.426-5.037-.16-.217-1.294-1.717-1.294-3.277 0-1.56.814-2.328 1.1-2.648.287-.32.637-.4.85-.4.213 0 .426.002.615.011.197.01.46-.074.718.548.267.642.908 2.227.987 2.388.08.16.133.346.02.563-.107.217-.16.347-.32.535-.16.187-.344.417-.492.56-.16.16-.327.334-.14.655.187.32.833 1.36 1.784 2.203 1.223 1.08 2.253 1.415 2.567 1.556.32.147.5.133.686-.08.213-.227.959-1.113 1.223-1.494.267-.374.533-.32.889-.187.347.133 2.14 1.007 2.507 1.187.374.187.627.267.72.42.093.16.093.748-.174 1.498z"/>
                        </svg>
                    </a>
                </div>
            </nav>
            <aside>
                <p>Copyright © {new Date().getFullYear()} - Pagina creada por Allan Araya Reyes	</p>
            </aside>
        </footer>
    );

}

export default Footer;