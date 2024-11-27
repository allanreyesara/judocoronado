
import './App.css'
import {Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUp from "./pages/SignUpPage.jsx";
import Lecheros from "./pages/LosLecheros.jsx";

function App() {
  return (
        <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/lecheros' element={<Lecheros />} />
        </Routes>
  )
}

export default App;
