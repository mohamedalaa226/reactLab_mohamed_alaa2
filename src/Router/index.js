import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Details from "../pages/MovieDetails";
import Register from "../pages/Register";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";
import NavLayout from "../shared/layout/navLayout";

const Router=()=>{
    return(
        <Routes>
            <Route element={<NavLayout></NavLayout>}>
            <Route path="/" element={<Home />} />
            <Route path="/Movie-Details/:id" element={<Details />} />
            <Route path="/About Us" element={<AboutUs />} />
            <Route path="/Contact Us" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
            </Route>
            <Route path="/Register" element={<Register />} />
            <Route path="/Login" element={<Login />} />
        </Routes>    
        )
}
export default Router;