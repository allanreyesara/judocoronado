
import './App.css'

import {Routes, Route, Navigate} from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUp from "./pages/SignUpPage.jsx";
import Lecheros from "./pages/LosLecheros.jsx";

import {useQuery} from "@tanstack/react-query";

function App() {
    const { data: authUser, isLoading } = useQuery({
        queryKey: ['authUser'],
        queryFn: async () => {
            try {
                const res = await fetch("/api/auth/me")
                const data = await res.json();

                if(data.error) return null;

                if(!res.ok) throw new Error(data.error || "Something went wrong")

                console.log("auth user is here: ", data)
                return data
            }catch (error){
                console.log(error.message)
            }
        },
        retry: false,
    })

    if(isLoading){
    return(
      <div className="h-screen flex justify-center items-center">

      </div>
    )
  }

  return (
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to='/' />} />
        <Route path='/signup' element={!authUser ? <SignUp /> : <Navigate to='/' />} />
        <Route path='/lecheros' element={<Lecheros />} />
        </Routes>
  )
}

export default App;
