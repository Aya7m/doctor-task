import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import doctors from '../data/doctors';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';




const DoctorSearch = () => {
  const [specialtyFilter, setSpecialtyFilter] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [availabilityFilter, setAvailabilityFilter] = useState('');

  const [nameFilter, setNameFilter] = useState('');
  const navigate = useNavigate();

  // استخراج المواقع الفريدة من البيانات
  const locations = [...new Set(doctors.map((doctor) => doctor.location))];

  // عند الضغط على زر "بحث"
  const handleSearch = () => {
    navigate('/results', {
      state: { specialtyFilter, locationFilter, nameFilter, availabilityFilter },
    });
  };

  return (
    <>


      <div className="w-full h-screen relative overflow-hidden">

        <div className="absolute w-full h-full top-0 left-0 z-10  flex items-center justify-center">
          <div className='flex flex-col items-center justify-center bg-primary opacity-80 w-[100%] min-h-screen py-12 p-4 rounded-lg shadow-md'>

            <h1 className='text-2xl font-bold mb-4 text-white flex justify-center items-center'>Search Doctor</h1>

            <div className='flex-col max-w-md items-center justify-center mx-auto gap-4 my-4 p-12 text-dark rounded-lg shadow-md border border-3 z-20 '>


              <input
                type="text"
                className="border-2 border-gray-900 rounded-lg p-3 w-full focus:outline-none focus:ring-2  my-4  focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                placeholder="search by name"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
              />

              <select
                value={specialtyFilter}
                className="border-2 border-gray-900 rounded-lg p-3 w-full focus:outline-none focus:ring-2  my-4  focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                onChange={(e) => setSpecialtyFilter(e.target.value)}
              >
                <option value="">choose specialty</option>
                <option value="Dermatology (Skin)">Dermatology (Skin)</option>
                <option value="Cardiology (Heart)">Cardiology (Heart)</option>
                <option value="Dentistry (Teeth)">Dentistry (Teeth)</option>
                <option value="Pediatrics and New Born (Child)">Pediatrics and New Born (Child)</option>
                <option value="Ear, Nose and Throat">Ear, Nose and Throat</option>
              </select>

              <select
                value={availabilityFilter}
                onChange={(e) => setAvailabilityFilter(e.target.value)}
                className="border-2 border-gray-900 rounded-lg p-3 w-full focus:outline-none focus:ring-2  my-4  focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              >
                <option value="">choose availability</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
              </select>


              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
                className="border-2 border-gray-900 rounded-lg p-3 w-full focus:outline-none focus:ring-2  my-4  focus:ring-blue-500 focus:border-blue-500 transition duration-300"
              >
                <option value="">choose location</option>
                {locations.map((location, index) => (
                  <option key={index} value={location}>
                    {location}
                  </option>
                ))}
              </select>

              <button onClick={handleSearch} className="bg-white hover:bg-blue-700 text-gray-900 font-bold py-2 px-4 rounded w-full my-4">Search</button>
            </div>
          </div>
        </div>

        <Swiper


          modules={[Autoplay]}

          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          className='w-full h-full z-0'
        >
          <SwiperSlide>
            <img
              src="https://media.istockphoto.com/id/1388254153/photo/shot-of-a-baby-sitting-on-her-mothers-lap-while-being-examined-by-a-doctor.jpg?s=612x612&w=0&k=20&c=PBzQWrBVp8pIyYBH_ds8Bu8y4Y4j2jdL3Z2n8L1W0v4="
              alt="Image 1"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://media.istockphoto.com/id/1739325597/photo/nurse-senior-woman-and-smile-with-comfort-holding-hands-or-support-in-nursing-home-for.jpg?s=612x612&w=0&k=20&c=BMCKzCUYgUGPlSugqpmKVJ3tNzeh0Sv_HjYcKOrKuKI="
              alt="Image 2"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://media.istockphoto.com/id/1319031310/photo/doctor-writing-a-medical-prescription.jpg?s=612x612&w=0&k=20&c=DWZGM8lBb5Bun7cbxhKT1ruVxRC_itvFzA9jxgoA0N8="
              alt="Image 3"
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        </Swiper>



      </div>



      {/* <div className='flex flex-col items-center justify-center min-h-screen bg-light p-4  my-4 rounded-lg shadow-md'>
        <h1 className='text-2xl font-bold mb-4 main flex justify-center items-center'>بحث عن الأطباء</h1>

        <div className='flex-col max-w-md items-center justify-center mx-auto gap-4 my-4 p-12 text-dark rounded-lg shadow-md border border-3 '>


          <input
            type="text"
            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2  my-4  focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            placeholder="ابحث بالاسم"
            value={nameFilter}
            onChange={(e) => setNameFilter(e.target.value)}
          />

          <select
            value={specialtyFilter}
            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2  my-4  focus:ring-blue-500 focus:border-blue-500 transition duration-300"
            onChange={(e) => setSpecialtyFilter(e.target.value)}
          >
            <option value="">اختار التخصص</option>
            <option value="Dermatology (Skin)">Dermatology (Skin)</option>
            <option value="Cardiology (Heart)">Cardiology (Heart)</option>
            <option value="Dentistry (Teeth)">Dentistry (Teeth)</option>
            <option value="Pediatrics and New Born (Child)">Pediatrics and New Born (Child)</option>
            <option value="Ear, Nose and Throat">Ear, Nose and Throat</option>
          </select>

          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="border-2 border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2  my-4  focus:ring-blue-500 focus:border-blue-500 transition duration-300"
          >
            <option value="">اختار الموقع</option>
            {locations.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>

          <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 main font-bold py-2 px-4 rounded w-full my-4">بحث</button>
        </div>
      </div> */}
    </>

  );
};

export default DoctorSearch;






