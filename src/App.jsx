import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ServicePage from "./Pages/Service/ServicePage";
import AboutPage from "./Pages/About/AboutPage";
import ContactPage from "./Pages/Contact/ContactPage";

function App(){
    
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/Home" element={<HomePage />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/service" element={<ServicePage />} />
                    <Route path="/about" element={<AboutPage />} /> 
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Router>
        </>
    )
}

export default App