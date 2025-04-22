import React, { useState, useMemo, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import doctors from '../data/doctors';

// ✅ دالة تصفية منفصلة لتحسين القابلية للاختبار والتنظيم
const filterDoctors = (doctors, { specialtyFilter, locationFilter, nameFilter, availabilityFilter }) => {
  return doctors.filter((doctor) => {
    const matchSpecialty = specialtyFilter
      ? doctor.specialty.toLowerCase().includes(specialtyFilter.toLowerCase())
      : true;

    const matchLocation = locationFilter
      ? doctor.location.toLowerCase().includes(locationFilter.toLowerCase())
      : true;

    const matchName = nameFilter
      ? doctor.name.toLowerCase().includes(nameFilter.toLowerCase())
      : true;

    const matchAvailability = availabilityFilter
      ? availabilityFilter === "available"
        ? doctor.available === true
        : doctor.available === false
      : true;

    return matchSpecialty && matchLocation && matchName && matchAvailability;
  });
};

const DoctorResults = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resultsRef = useRef(null);

  const {
    specialtyFilter,
    locationFilter,
    nameFilter,
    availabilityFilter
  } = location.state || {};

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // ✅ useMemo لتحسين الأداء
  const filteredDoctors = useMemo(() => {
    return filterDoctors(doctors, {
      specialtyFilter,
      locationFilter,
      nameFilter,
      availabilityFilter
    });
  }, [specialtyFilter, locationFilter, nameFilter, availabilityFilter]);

  const totalPages = Math.ceil(filteredDoctors.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentDoctors = filteredDoctors.slice(indexOfFirstItem, indexOfLastItem);

  // ✅ التنقل إلى صفحة تفاصيل الطبيب
  const handleDoctorClick = (id) => {
    navigate(`/doctor/${id}`);
  };

  // ✅ Focus عند تغيير الصفحة
  useEffect(() => {
    resultsRef.current?.focus();
  }, [currentPage]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light p-4 my-4 rounded-lg shadow-md gap-12">
      <div
        className="flex flex-col items-center justify-center min-h-screen p-12 my-8 rounded-lg shadow-md"
        ref={resultsRef}
        tabIndex={-1}
        aria-live="polite"
      >
        <h1 className="text-2xl font-bold mb-4 text-blue-900">Results:</h1>

        <p className="mb-4 text-sm text-gray-700">
          Showing {currentDoctors.length} of {filteredDoctors.length} doctors
        </p>

        <div className="flex flex-col max-w-md items-center justify-center mx-auto gap-4 my-4 p-6 text-dark rounded-lg shadow-md border border-3 w-full">
          {currentDoctors.length > 0 ? (
            currentDoctors.map((doctor) => (
              <article
                key={doctor.id}
                className="flex flex-col md:flex-row md:items-center justify-between gap-12 border-b pb-6 w-full"
              >
                <button
                  onClick={() => handleDoctorClick(doctor.id)}
                  className="flex items-center justify-between gap-12 text-left outline-none focus:ring focus:ring-blue-500 rounded w-full"
                >
                  <img
                    src={doctor.photo}
                    alt={`Photo of Dr. ${doctor.name}`}
                    loading="lazy"
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="flex flex-col gap-4">
                    <p className="font-semibold">{doctor.name}</p>
                    <p className="text-sm text-gray-600">
                      {doctor.specialty} — {doctor.location}
                    </p>
                    <p className="text-sm text-gray-600">Rating: ⭐ {doctor.rating}</p>
                  </div>
                </button>

                <div className="text-blue-600 font-medium text-center my-4 md:mt-0">
                  {doctor.available ? 'Available' : 'Unavailable'}
                </div>

                <div>
                  <button
                    onClick={() => handleDoctorClick(doctor.id)}
                    className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition duration-200 w-full md:w-auto"
                  >
                    View Details
                  </button>
                </div>
              </article>
            ))
          ) : (
            <p className="text-gray-600 text-sm" aria-live="polite">No doctors found.</p>
          )}
        </div>

        {/* ✅ Pagination */}
        {totalPages > 1 && (
          <nav className="flex gap-4 mt-6 justify-center" aria-label="Pagination">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
                }`}
                aria-current={currentPage === index + 1 ? "page" : undefined}
              >
                {index + 1}
              </button>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
};

export default DoctorResults;
