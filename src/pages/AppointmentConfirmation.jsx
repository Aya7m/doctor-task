import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react'; // أيقونة ✅
import { motion } from 'framer-motion'; // للأنيميشن

const AppointmentConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { doctorName, appointmentDate, appointmentTime , doctorSpecialty, doctorLocation} = state || {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 transition duration-300">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 max-w-md w-full text-center"
      >
        <div className="flex justify-center mb-4 text-green-500">
          <CheckCircle className='text-green-500' size={48} />
        </div>
        <h1 className="text-2xl font-bold mb-4 text-blue-900 dark:text-blue-300">
          Appointment Confirmation
        </h1>

        <div className="space-y-2 text-gray-700 dark:text-gray-200">
          <p><span className="font-semibold text-blue-700 dark:text-blue-400">Doctor Name:</span> {doctorName}</p>
          <p><span className="font-semibold text-blue-700 dark:text-blue-400">Specialty:</span> {doctorSpecialty}</p>
          <p><span className="font-semibold text-blue-700 dark:text-blue-400">Location:</span> {doctorLocation}</p>
          <p><span className="font-semibold text-blue-700 dark:text-blue-400">Appointment Date:</span> {appointmentDate}</p>
          <p><span className="font-semibold text-blue-700 dark:text-blue-400">Appointment Time:</span> {appointmentTime}</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200"
        >
          Back to Home
        </button>
      </motion.div>
    </div>
  );
};

export default AppointmentConfirmation;
