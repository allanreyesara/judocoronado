import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

import {APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

const ContactPage = () => {
    const GOOGLE = import.meta.env.VITE_GOOGLE_API;

    return(
        <div>
            <section className="Header">
                <NavBar/>
            </section>
            <section className="bg-gray-900 items-center justify-items-center">
                <div className="contact-title">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white z-30 tracking-wide mt-6">Contáctanos</h1>
                </div>
                <div className="container items-center text-center ">
                    <div className="info-container flex mt-10 w-full">
                        <div className="h-full w-3/6 space-y-6 left-4 mx-4 mb-3 flex-1">
                            <h1 className="text-4xl font-extrabold dark:text-white tracking-wide">Ubicación</h1>
                            <div className="map-container h-96 mb-3">
                                <APIProvider apiKey={GOOGLE}>
                                    <Map
                                        defaultZoom={19}
                                        defaultCenter={{lat: 9.971296425943725, lng: -84.00893886012153}}>
                                    <Marker position={{lat: 9.971296425943725, lng: -84.00893886012153}} />
                                    </Map>
                                </APIProvider>
                            </div>
                        </div>
                        <div className="contact-information flex-1 items-center place-items-center space-y-10">
                            <div className="w-full space-y-10">
                                <h1 className="text-4xl font-extrabold dark:text-white tracking-wide">Teléfono</h1>
                                <a href="https://wa.me/50688346235" target="_blank">
                                    <h2 className="hover:cursor-pointer mt-4">+506 8834-6235</h2>
                                </a>
                            </div>
                            <div className="w-full">
                                <h1 className="text-4xl font-extrabold dark:text-white tracking-wide">Correo</h1>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rodolfodura@gmail.com" target="_blank">
                                    <h2 className="hover:cursor-pointer mt-4"> rodolfodura@gmail.com </h2>
                                </a>
                            </div>
                            <div className="w-full">
                                <h1 className="text-4xl font-extrabold dark:text-white tracking-wide">Dirección</h1>
                                <h2 className="mt-4">C/ 153, San Isidro, Vázquez de Coronado, Costa Rica</h2>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-4xl font-extrabold dark:text-white tracking-wide'>Horarios</h1>
                            <div className="divider divider-accent">Judo Coronado</div>
                            <div>
                                <div className='w-full'>
                                    <h2 className='font-bold  mt-4'>Martes: 5:00pm-7:00pm Principiantes | 7:00pm-9:00pm
                                        Avanzados</h2>
                                </div>
                                <div className='w-full'>
                                    <h2 className='font-bold  mt-4 text-start'>Miércoles: 5:00pm-7:00pm Grupo
                                        Completo</h2>
                                </div>
                                <div className='w-full'>
                                    <h2 className='font-bold  mt-4'>Jueves: 5:00pm-7:00pm Principiantes | 7:00pm-9:00pm
                                        Avanzados</h2>
                                </div>
                                <div className="divider divider-accent">Judo Yorusti</div>
                                <h2 className='text-start italic'>Entrenamientos para niños y niñas menores de 10
                                    años </h2>
                                <div className='w-full'>
                                    <h2 className='font-bold  mt-4 text-start'>Miércoles: 5:00pm-6:00pm</h2>
                                </div>
                                <div className='w-full'>
                                    <h2 className='font-bold  mt-4 text-start'>Jueves: 5:00pm-6:00pm</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer">
                <Footer/>
            </section>
        </div>
    );
}

export default ContactPage;