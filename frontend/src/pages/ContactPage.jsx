import NavBar from "../components/NavBar.jsx";
import Footer from "../components/Footer.jsx";

const ContactPage = () => {
    return(
        <div>
            <section className="Header">
                <NavBar/>
            </section>
            <section className="bg-gray-900">
                <div className="min-w-full min-h-full"></div>
            </section>
            <section className="footer">
                <Footer/>
            </section>
        </div>
    );
}

export default ContactPage;