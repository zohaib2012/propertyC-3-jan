import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import Topbar from './Maincomponent/Topbar';
import Footer from './Maincomponent/Footer';
import Home from './Components/Home';
import Login from './Maincomponent/login';
import Register from './Maincomponent/register';
import PropertyTypecards from './Components/ProperytyTypecards';
import Propertydetail from './Components/Propertydetail';
import Propertyform from './Components/Propertyform';
import ContactUs from './Components/ContactUs';
import AboutUs from './Components/AboutUs';

function App() {
  const location = useLocation();
  
  // Define paths where Topbar and Footer should be hidden
  const hideTopbarFooter = location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!hideTopbarFooter && <Topbar />}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/propertyform" element={<Propertyform />} />
        <Route path="/properties/:propertyType" element={<PropertyTypecards />} />
        <Route path="/properties/:City" element={<PropertyTypecards />} />
        <Route  path="/property/:id" element={<Propertydetail />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        {/* Additional routes */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      
      {!hideTopbarFooter && <Footer />}
    </div>
  );
}

export default App;
