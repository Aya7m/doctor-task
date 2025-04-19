
import React, { useState } from "react";
import { useAppointmentStore } from "../store/store";


export default function BookingModal({ doctor, onClose }) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const addAppointment = useAppointmentStore((state) => state.addAppointment);
  const slots = ["10:00 AM", "11:30 AM", "2:00 PM", "4:00 PM"];

  const handleConfirm = () => {
    if (!selectedSlot) return;
    addAppointment({
      doctorName: doctor.name,
      specialty: doctor.specialty,
      location: doctor.location,
      time: selectedSlot,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
        <h3 className="text-xl font-bold mb-4 text-center">
          Book with Dr. {doctor.name}
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {slots.map((slot, index) => (
            <button
              key={index}
              onClick={() => setSelectedSlot(slot)}
              className={`py-2 px-4 rounded-lg border text-sm font-medium transition ${
                selectedSlot === slot
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700"
                }`}
                >
                  {slot}
                </button>
              ))}
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-lg border text-gray-600 hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirm}
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      );
    }
