import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";

const LoginPage = () => {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    return(
        <div>
            <section>
                <section className="Header>">
                    <NavBar/>
                </section>
            </section>
            <section className="min-h-screen min-w-screen bg-cover rounded-3xl" style={{backgroundImage: "url(https://i.ibb.co/zJvjhSK/igles.jpg)",}}>
                <div className='container content-center mx-auto'>
                    <div className="card glass max-w-96 flex m-auto mt-52">
                        <h1 className="text-6xl text-black"> Login</h1>
                        <div className="card-body">
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z"/>
                                </svg>
                                <input type="text" className="grow" placeholder="Nombre de usuario"/>
                            </label>
                            <label className="input input-bordered flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path fillRule="evenodd"
                                          d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                          clipRule="evenodd"/>
                                </svg>
                                <input type="password" className="grow" placeholder="Contraseña"/>
                            </label>

                            <div className="flex w-full flex-col border-opacity-50">
                                <label>
                                    <button className="btn glass mt-6">Iniciar sesión</button>
                                </label>
                                <div className="divider">O</div>
                                <div className="flex items-center justify-center ">
                                    <GoogleOAuthProvider clientId={clientID}>
                                        <label className="glass">
                                            <GoogleLogin onSuccess={responseMessage} onError={errorMessage}/>
                                        </label>
                                    </GoogleOAuthProvider>
                                </div>
                                <label className="mt-4">
                                    <p>¿No tienes una cuenta? <a
                                        className="text-blue-600 underline hover:cursor-pointer"
                                        href='/signup'>Regístrate</a></p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <section>
                <Footer/>
            </section>
        </div>
    );
};

export default LoginPage;