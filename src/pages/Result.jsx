import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import doctors from '../data/doctors';



const DoctorResults = () => {
  const location = useLocation();
  const { specialtyFilter, locationFilter, nameFilter, availabilityFilter } = location.state || {};

  const navigate = useNavigate();

  // تصفية الأطباء بناءً على الفلاتر
  const filteredDoctors = doctors.filter((doctor) => {
    return (
      (specialtyFilter ? doctor.specialty.toLowerCase().includes(specialtyFilter.toLowerCase()) : true) &&
      (locationFilter ? doctor.location.toLowerCase().includes(locationFilter.toLowerCase()) : true) &&
      (nameFilter ? doctor.name.toLowerCase().includes(nameFilter.toLowerCase()) : true)&&

      (availabilityFilter ? doctor.available === true : true)
  

      
    );
  });

  
  


  // التنقل إلى صفحة تفاصيل الطبيب
  const handleDoctorClick = (id) => {
    navigate(`/doctor/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light p-4 my-4 rounded-lg shadow-md gap-12">
      
        <div className="flex flex-col items-center justify-center  min-h-screen  p-12 my-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4 text-blue-900 flex justify-center items-center">Results : </h1>

          <div className="flex flex-col max-w-md items-center justify-center mx-auto gap-4 my-4 p-24 text-dark rounded-lg shadow-md border border-3 ">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doctor) => (
                <div
                  key={doctor.id}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-12 border-b pb-6"
                >
                  <div className="flex items-center cursor-pointer" onClick={() => handleDoctorClick(doctor.id)}>

                    <div className='flex items-center gap-12'>
                      <div className='p-12'>
                        <img src={doctor.photo} alt={doctor.name} className="w-16 h-16 flex items-center imgo rounded-full object-cover" />
                      </div>

                      <div className='flex flex-col gap-4'>
                      <p className="font-semibold">{doctor.name}</p>
                      <p className="text-sm text-gray-600">
                        {doctor.specialty} — {doctor.location}
                      </p>

                      <p className="text-sm text-gray-600">
                        Rating: ⭐ {doctor.rating}
                      </p>

                    </div>

                    </div>


                   

                  </div>
                  <div className="text-blue-600 font-medium mt-2 md:mt-0 md:ml-4 text-center my-4">
                    {doctor.available ? "Available" : "Unavailable"}
                  </div>

                  <div>
                    <button
                      onClick={() => handleDoctorClick(doctor.id)}
                      className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600">No doctors found.</p>
            )}
          </div>
        </div>
      </div>



  
  );
};

export default DoctorResults;
