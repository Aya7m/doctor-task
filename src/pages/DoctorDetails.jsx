import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import doctors from '../data/doctors';
import toast from 'react-hot-toast';
import { Home } from 'lucide-react';

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const doctor = doctors.find((doctor) => doctor.id === parseInt(id));

  const [availableSlots, setAvailableSlots] = useState(doctor?.appointments || []);

  const [selectedSlot, setSelectedSlot] = useState("");


  if (!doctor) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-600 font-bold mb-4">الطبيب غير موجود</p>
        <button onClick={() => navigate('/')} className="text-blue-600 underline">العودة للصفحة الرئيسية</button>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedSlot) {
      toast.error("يجب اختيار موعد");
      return;
    }

    const [appointmentDate, appointmentTime] = selectedSlot.split("T");

    // تحديث المواعيد لإزالة الموعد المحجوز
    const updatedSlots = availableSlots.filter(
      (slot) => !(slot.date === appointmentDate && slot.time === appointmentTime)
    );
    setAvailableSlots(updatedSlots);

    toast.success("تم حجز الموعد بنجاح!");

    setTimeout(() => {
      navigate("/confirmation", {
        state: {
          doctorName: doctor.name,
          doctorSpecialty: doctor.specialty,
          doctorLocation: doctor.location,
          appointmentDate,
          appointmentTime
        }
      });
    }, 1000);
  };



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-dark mb-6 text-center">Doctor Details</h1>

        <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-6">
          <img src={doctor.photo} alt={doctor.name} className="w-32 h-32 imgo rounded-full object-cover border-2 border-blue-300 mx-auto sm:mx-0" />
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-semibold text-primary">{doctor.name}</h2>
            <p className="text-gray-600 mt-1"><strong>Specialty :</strong> {doctor.specialty}</p>
            <p className="text-gray-600"><strong>Rating :</strong> {doctor.rating}</p>
            <p className="text-gray-600"><strong>Location :</strong> {doctor.location}</p>
            <p className={`font-semibold mt-1 ${doctor.available ? 'text-green-600' : 'text-red-600'}`}>
              {doctor.available ? "Available" : "Unavailable"}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mt-4">
          <div>
            <label htmlFor="appointmentSlot" className="block text-sm font-medium text-gray-700 mb-2">Select an Available Slot:</label>
            <select
              id="appointmentSlot"
              value={selectedSlot}
              onChange={(e) => setSelectedSlot(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-md"
            >
              <option value="">-- Choose Appointment --</option>
              {doctor.appointments.map((slot, index) => (
                <option key={index} value={`${slot.date}T${slot.time}`}>
                  {slot.date} at {slot.time}
                </option>
              ))}
            </select>
          </div>
          <div className="text-center my-6">
            <button
              type="submit"
              className={`w-full text-white py-4 px-6 rounded-md transition ${doctor.available ? 'bg-primary hover:bg-secondary' : 'bg-gray-400 cursor-not-allowed'}`}
              disabled={!doctor.available}
            >
              Book Appointment
            </button>
          </div>
        </form>

        <Link to='/' className='flex justify-center mt-12 no-underline'>
          <button className='flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-full shadow-md transition-all duration-300'>
            <Home size={18} />
            <span>Go To Home</span>
          </button>
        </Link>

      </div>
    </div>
  );
};

export default DoctorDetails;
