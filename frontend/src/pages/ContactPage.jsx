import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

import {APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const ContactPage = () => {
    const GOOGLE = import.meta.env.VITE_GOOGLE_API;
    const mapId = import.meta.env.VITE_MAP_ID;

    return(
        <div>
            <section className="Header">
                <NavBar/>
            </section>
            <section className="bg-gray-900 items-center justify-items-center flex flex-col">
                <div className="contact-title">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl z-30 tracking-wide mt-6">Contáctanos</h1>
                </div>
                <div className="container items-center text-center flex">
                    <div className="info-container flex flex-col md:flex-row mt-10 w-full items-center">
                        <div className="h-full w-3/6 space-y-6 left-4 mx-4 mb-6 flex-1 ">
                            <h1 className="text-4xl font-extrabold dark:text-white tracking-wide">Ubicación</h1>
                            <div className="map-container md:h-96 md:mb-3 h-64">
                                <APIProvider apiKey={GOOGLE}>
                                    <Map
                                        mapId={mapId}
                                        defaultZoom={19}
                                        defaultCenter={{lat: 9.971296425943725, lng: -84.00893886012153}}>

                                        <AdvancedMarker
                                                  key = "judoCoronado"
                                                  position={{lat: 9.971296425943725, lng: -84.00893886012153}}>
                                                <Pin background={'red'} glyphColor={'black'} borderColor={'#000'} />
                                                </AdvancedMarker>
                                    </Map>
                                </APIProvider>
                            </div>
                        </div>
                        <div className="contact-information flex-1 items-center place-items-center space-y-10 mb-6">
                            <div className="w-full space-y-10">
                                <h1 className="text-4xl font-extrabold dark:text-white tracking-wide">Teléfono</h1>
                                <a href="https://wa.me/50688346235" target="_blank">
                                    <h2 className="hover:cursor-pointer mt-4 underline ">+506 8834-6235</h2>
                                </a>
                            </div>
                            <div className="w-full">
                                <h1 className="text-4xl font-extrabold dark:text-white tracking-wide ">Correo</h1>
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rodolfodura@gmail.com" target="_blank">
                                    <h2 className="hover:cursor-pointer mt-4 underline"> rodolfodura@gmail.com </h2>
                                </a>
                            </div>
                            <div className="w-full">
                                <h1 className="text-4xl font-extrabold text-white tracking-wide">Dirección</h1>
                                <h2 className="mt-4">C/ 153, San Isidro, Vázquez de Coronado, Costa Rica</h2>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-4xl font-extrabold text-white tracking-wide'>Horarios</h1>
                            <div className="divider divider-accent">Judo Coronado</div>
                            <div>
                                <table className="table">
                                    <tbody>
                                        <tr>
                                            <th rowSpan="2">Martes</th>
                                            <td>Principiantes</td>
                                            <td>5:00pm-7:00pm</td>
                                        </tr>
                                        <tr>
                                            <td>Avanzados</td>
                                            <td>7:00pm-9:00pm</td>
                                        </tr>
                                        <tr className="border-t border-b border-accent">
                                            <th>Mi&eacute;rcoles</th>
                                            <td>Grupo completo</td>
                                            <td>5:00pm-7:00pm</td>

                                        </tr>
                                        <tr>
                                            <th rowSpan="2">Jueves</th>
                                            <td>Principiantes</td>
                                            <td>5:00pm-7:00pm</td>
                                        </tr>
                                        <tr>
                                            <td>Avanzados</td>
                                            <td>7:00pm-9:00pm</td>
                                        </tr>
                                    </tbody>
                                </table>

                                <div className="divider divider-accent">Judo Yorusti</div>
                                <h2 className='text-center italic '>Entrenamientos para niños y niñas menores de 10
                                    años </h2>
                                <table className="table">
                                    <tr>
                                        <th>Mi&eacute;rcoles</th>
                                        <td>5:00pm-6:00pm</td>
                                    </tr>
                                    <tr className="border-t border-accent">
                                        <th>Jueves</th>
                                        <td>5:00pm-6:00pm</td>
                                    </tr>
                                </table>
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