import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

//import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";



const HomePage = () => {
    return (
        /*HEADER*/
        <div>
            <section className="Header>">
                <NavBar />
            </section>
            <section className="content">
                <div className="hero min-h-screen  rounded-md my-5 bg-cover bg-center" style={{backgroundImage: "url(https://i.ibb.co/dc93wmN/hero.jpg)",}}>
                   <div className="hero-overlay bg-opacity-60 rounded-md"></div>
                   <div className="hero-content text-neutral-content text-center" >
                       <div className="max-w-lg w-full ">
                           <h1 className="mb-5 text-4xl font-bold " >Experimenta el Judo en el Corazón de Coronado</h1>
                           <p className="mb-5">
                               Entrena con los mejores de Costa Rica
                           </p>
                           <a href="/contact">
                               <button className="btn btn-primary">Contáctanos</button>
                           </a>
                   </div>
                   </div>
                </div>
            </section>
            <section className="footer">
                <Footer />
            </section>
        </div>
    );
};

export default HomePage;