import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const Lecheros = () => {
    return(
        <div>
            <section>
                <NavBar />
            </section>
            <section className="content">
                <div className='bg-gray-900 rounded-3xl'>
                    <div className='mt-6'>
                        <h1 className='mb-4 text-4xl font-extrabold md:text-5xl lg:text-6xl'>Los Lecheros</h1>
                    </div>
                    <div className=''>
                        <h2 className='italic text-lg'>
                            Los Lecheros es un torneo de judo organizado por la Asociación Deportiva de Judo Coronado.
                            Se trata de una fiesta deportiva que reúne pasión y entrega en cada combate.
                        </h2>
                    </div>
                    <div className="carousel w-3/5 mt-6 ">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/ThJPkt9/DSC-0484.jpg" className="w-full"/>
                            <div
                                className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/0QRfnXj/DSC-0395.jpg" className="w-full"/>
                            <div
                                className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src=" https://i.ibb.co/Vt0Zvzt/DSC-0379.jpg" className="w-full"/>
                            <div
                                className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/Y2nL1vW/DSC-0259.jpg" className="w-full"/>
                            <div
                                className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide5" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide5" className="carousel-item relative w-full">
                            <img src="https://i.ibb.co/LYkVPHz/DSC-0221.jpg" className="w-full"/>
                            <div
                                className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-6 mb-10'>
                        <div className='container flex m-auto w-1/2 items-center'>
                            <p className='w-1/2 text-justify'>Los Lecheros, que ha sido declarado por la Federación
                                Costarricense de Judo como el mejor del país, es fruto del esfuerzo de la Junta
                                Directiva y del Comité de Padres de Judo Coronado, liderados por el Sensei Rodolfo
                                Durán.</p>
                            <img className='w-1/2 ml-3 rounded-3xl'
                                 src='https://i.ibb.co/ZG3dtpX/judo-Coro-Stafff.jpg'/>
                        </div>
                    </div>
                    <div className='mt-6'>
                        <div className='container flex m-auto w-1/2 items-center'>
                            <img className='w-1/2 mr-3 rounded-3xl' src='https://i.ibb.co/TTCkCzX/DSC-0189.jpg'/>
                            <p className='w-1/2 text-justify'>Este torneo es un evento formativo cuyo propósito es dar a
                                conocer el cantón Vazquez de Coronado
                                como un lugar en el que se practican deportes no tradicionales.</p>
                        </div>
                    </div>
                    <div className='mt-6 mb-3'>
                        <div className='container flex m-auto w-1/2 items-center'>
                            <p className='w-1/2 text-justify'>Desde el 2012 y hasta la pandemia, el aforo de atletas
                                fue, en promedio, de 600 judokas, de 35 clubes por torneo, en Los Lecheros IX, evento post
                                pandemia, el aforo fue de 450 atletas de 28 clubes.</p>
                            <img className='w-1/2 ml-3 rounded-3xl h-96 mb-6' src='https://i.ibb.co/QcLvVMg/brandon-Yeithan.jpg'/>
                        </div>
                    </div>
                </div>
            </section>
            <section className='footer mt-6'>
                <Footer/>
            </section>
        </div>
    );
}

export default Lecheros;