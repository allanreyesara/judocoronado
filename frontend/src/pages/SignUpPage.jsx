import NavBar from "../components/NavBar.jsx";
import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
import Footer from "../components/Footer.jsx";
import {useState} from "react";
import {useMutation} from "@tanstack/react-query";

import toast from "react-hot-toast";
import { MdEmail, MdAccountCircle, MdDriveFileRenameOutline, MdKey  } from "react-icons/md";



const SignUp = () => {
    const responseMessage = (response) => {
        console.log(response);
    };
    const errorMessage = (error) => {
        console.log(error);
    };

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        fullName: "",
        password: ""
    });

    const { mutate, isError, isPending, error} = useMutation({
        mutationFn: async ({email, username, fullName, password}) => {
            try {
                const res = await fetch("/api/auth/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ email, username, fullName, password })
                })

                const data = await res.json()

                if (!res.ok) throw new Error(data.error || "Something went wrong")
                console.log(data);
                return data;
            }catch (error){
                console.log(error);
                throw error;
            }
        },
        onSuccess: () => {
            toast.success("Cuenta creada con exito")
        }
    })

    const handleSubmit = (e) => {
		e.preventDefault();
		mutate(formData);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

    const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID;
    return (
        <div>
            <section>
                <section className="Header>">
                    <NavBar/>
                </section>
            </section>
            <section className="min-h-screen min-w-screen bg-cover rounded-3xl" style={{backgroundImage: "url(https://i.ibb.co/zJvjhSK/igles.jpg)",}}>
                <div className='container content-center mx-auto'>
                    <div className="card glass max-w-96 flex m-auto mt-52">
                        <h1 className="text-6xl text-black">Registrarse</h1>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <label className="input input-bordered flex items-center gap-2">
                                    <MdEmail/>
                                    <input type='email' className='grow' placeholder='Email' name='email'
                                           onChange={handleInputChange} value={formData.email} required/>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 mt-4">
                                    <MdAccountCircle/>
                                    <input type='text' className='grow' placeholder='Nombre de Usuario' name='username'
                                           onChange={handleInputChange} value={formData.username} required/>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 mt-4">
                                    <MdDriveFileRenameOutline/>
                                    <input type='text' className='grow' placeholder='Nombre completo' name='fullName'
                                           onChange={handleInputChange} value={formData.fullName}/>
                                </label>
                                <label className="input input-bordered flex items-center gap-2 mt-4">
                                    <MdKey />
                                    <input type='password' className='grow' placeholder='Contrase&ntilde;a' name='password' onChange={handleInputChange} value={formData.password} required/>
                                </label>
                                <button className='btn glass mt-6'>
						            {isPending ? "Loading..." : "Registrarse" }</button>
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
            <Footer />
            </section>
        </div>
    );
}

export default SignUp;