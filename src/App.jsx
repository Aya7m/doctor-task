import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Result from "./pages/Result";
import DoctorSearch from "./pages/DoctorSearch";
import DoctorDetails from "./pages/DoctorDetails";
import AppointmentConfirmation from "./pages/AppointmentConfirmation";
import { Toaster } from "react-hot-toast";


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DoctorSearch />} />
          <Route path="/results" element={<Result />} />
          <Route path="/doctor/:id" element={<DoctorDetails />} />
          <Route path="/confirmation" element={<AppointmentConfirmation/>} />
          
        </Routes>
      </Router>
      <Toaster />
    </div>
  );
}



export default App;
