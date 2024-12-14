import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import {useState} from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";


import { MdAccountCircle, MdKey  } from "react-icons/md";
import {Link} from "react-router-dom";
import {useNavigate} from 'react-router-dom'


const LoginPage = () => {
    const navigate = useNavigate()
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const queryClient = useQueryClient();

    const { mutate: loginMutation, isError, isPending, error } = useMutation({
        mutationFn: async ({ username, password}) => {
            try {
                const res= await  fetch("/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({username, password})
                })

                const data = await res.json()
                if(!res.ok) throw new Error(data.error || "Something went wrong");
                navigate('/');
                console.log(data);
				return data;

            } catch (error){
                console.log(error)
				throw error;
            }
        },
        onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ["authUser"]})
            }

    })

    const handleSubmit = (e) => {
        e.preventDefault();
        loginMutation(formData)
    }

    const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
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
                            <form className='flex gap-4 flex-col' onSubmit={handleSubmit}>
                                <label className="input input-bordered flex items-center gap-2">
                                    <MdAccountCircle />
                                    <input type='text' className='grow' placeholder='Nombre de Usuario' name='username'
                                           onChange={handleInputChange} value={formData.username}/>
                                </label>
                                <label className="input input-bordered flex items-center gap-2">
                                    <MdKey />
                                    <input type="password" className="grow" placeholder="Contraseña" name='password' onChange={handleInputChange} value={formData.password}/>
                                </label>
                                <button className="btn glass mt-6">{isPending ? "Loading..." : "Login" }</button>
					                {isError && <p className='text-red-500'>{error.message}</p>}
                            </form>

                            <div className="flex w-full flex-col border-opacity-50">
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