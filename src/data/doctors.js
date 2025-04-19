// Dermatology (Skin)
// Cardiology (Heart)
// Dentistry (Teeth)
// Pediatrics and New Born (Child)
// Ear, Nose and Throat





const doctors = [
    {
      id: 1,
      name: 'Doctor Amany Mohamed Gharib',
      specialty: 'Dermatology (Skin)',
      rating: 4.5,
      available: true,
      location: 'Fayoum, Egypt',
      photo: 'https://media.istockphoto.com/id/1633320190/photo/happy-woman-or-doctor-face-in-busy-hospital-with-tablet-for-healthcare-services-leadership.jpg?s=612x612&w=0&k=20&c=2KyRtO_fsF3_jNEsRoxaCUMBs50_BG9Z6f8PnvoYWHs=',
      appointments: [
        { date: "2025-04-20", time: "10:00" },
        { date: "2025-04-21", time: "14:00" },
        { date: "2025-04-22", time: "09:00" },
      ],
    },
    {
      id: 2,
      name: 'Dr. Mona Ali',
      specialty: 'Cardiology (Heart)',
      rating: 4.8,
      available: false,
      appointments:[],
      location: 'Alexandria, Egypt',
      photo: 'https://media.istockphoto.com/id/1425798958/photo/photo-of-confident-female-doctor-in-hospital-looking-at-camera-with-smile.jpg?s=612x612&w=0&k=20&c=i91idG544pXuYkw5ju6iIzm1m-lEqQaygeOOrjG5GEk=',
     
    },
    {
      id: 3,
      name: 'Dr. Tarek Hassan',
      specialty: 'Ear, Nose and Throat',
      rating: 4.7,
      available: true,
      availableSlots: [
        "2025-04-24T10:00",
        "2025-04-25T11:30",
        "2025-04-28T09:00",
      ],

      location: 'Giza, Egypt',

      photo: 'https://media.istockphoto.com/id/1390000431/photo/shot-of-a-mature-doctor-using-a-digital-tablet-in-a-modern-hospital.jpg?s=612x612&w=0&k=20&c=ofnikeDwvLhhEvLpSuQME5kWclGchqUKSHQFdQ4mcWo=',
    },
    {
      id: 4,
      name: 'Dr. Samira Mohamed',
      specialty: 'Pediatrics and New Born (Child)',
      rating: 4.9,
      available: true,
      appointments: [
        { date: "2025-04-20", time: "10:00" },
        { date: "2025-04-21", time: "14:00" },
        { date: "2025-04-22", time: "09:00" },
      ],
      location: 'Cairo, Egypt',
      photo: 'https://media.istockphoto.com/id/1806608544/photo/portrait-of-a-female-doctor-at-the-workplace.jpg?s=612x612&w=0&k=20&c=MARkttlfJ1JoAxKffrmXxbI_rIPJTKWaKTrFv1qwCZc=',
    },
    {
      id: 5,
      name: 'Dr. Khaled Fathi',
      specialty: 'Dentistry (Teeth)',
      rating: 4.6,
      available: true,
      appointments: [
        { date: "2025-04-20", time: "10:00" },
        { date: "2025-04-21", time: "14:00" },
        { date: "2025-04-22", time: "09:00" },
      ],
      location: 'Tanta, Egypt',
      photo: 'https://media.istockphoto.com/id/1785918657/photo/portrait-of-doctor-with-smile-confidence-and-hospital-employee-with-care-support-and-trust.jpg?s=612x612&w=0&k=20&c=edx0LITtjis5zxtRZIbx24yholpv4oNicE-e69guius=',
    },
    {
      id: 6,
      name: 'Dr. Nour Hassan',
      specialty: ' Dermatology (Skin)',
      rating: 4.4,
      available: false,
      appointments:[],
      location: 'Assiut, Egypt',
      photo: 'https://media.istockphoto.com/id/1189304032/photo/doctor-holding-digital-tablet-at-meeting-room.jpg?s=612x612&w=0&k=20&c=RtQn8w_vhzGYbflSa1B5ea9Ji70O8wHpSgGBSh0anUg=',
    },
    {
      id: 7,
      name: 'Dr.Hesham Gomaa',
      specialty: 'Ear, Nose and Throat',
      rating: 4.5,
      available: true,
      appointments: [
        { date: "2025-04-20", time: "10:00" },
        { date: "2025-04-21", time: "14:00" },
        { date: "2025-04-22", time: "09:00" },
      ],
      location: 'Minya, Egypt',
      photo: 'https://media.istockphoto.com/id/1340883379/photo/young-doctor-hospital-medical-medicine-health-care-clinic-office-portrait-glasses-man.jpg?s=612x612&w=0&k=20&c=_H4VUPBkS0gEj5ZdZzQo-Hw3lMuyofJpB-P9yS92Wyw=',
    },
    {
      id: 8,
      name: 'Dr. Ashraf Ali',
      specialty: 'Pediatrics and New Born (Child)',
      rating: 4.8,
      available: true,
      appointments: [
        { date: "2025-04-20", time: "10:00" },
        { date: "2025-04-21", time: "14:00" },
        { date: "2025-04-22", time: "09:00" },
      ],
      location: 'Assiut, Egypt',
      photo: 'https://media.istockphoto.com/id/1346124900/photo/confident-successful-mature-doctor-at-hospital.jpg?s=612x612&w=0&k=20&c=S93n5iTDVG3_kJ9euNNUKVl9pgXTOdVQcI_oDGG-QlE=',
    },
    {
      id: 9,
      name: 'Dr. Mohamed Ashour',
      specialty: 'Cardiology (Heart)',
      rating: 4.7,
      available: true,
      appointments: [
        { date: "2025-04-20", time: "10:00" },
        { date: "2025-04-21", time: "14:00" },
        { date: "2025-04-22", time: "09:00" },
      ],
      location: 'Alexandria, Egypt',
      photo: 'https://media.istockphoto.com/id/1820379319/photo/healthcare-doctor-and-man-with-arms-crossed-at-hospital-with-smile-for-support-service-and.jpg?s=612x612&w=0&k=20&c=26JOTuHgbpIRxZYOBakMRFFZt9BxF-JtL97LErFMBAU=',
    },
    {
      id: 10,
      name: 'Dr. Naira Mohamed',
      specialty: 'Ear, Nose and Throat',
      rating: 4.9,
      available: true,
      appointments: [
        { date: "2025-04-20", time: "10:00" },
        { date: "2025-04-21", time: "14:00" },
        { date: "2025-04-22", time: "09:00" },
      ],
      location: 'Menoufia, Egypt',
      photo: 'https://media.istockphoto.com/id/1627750071/photo/happy-portrait-and-black-woman-doctor-proud-in-hospital-excited-or-cheerful-for-healthcare.jpg?s=612x612&w=0&k=20&c=p5RJXG6VeWwLYP8ZOH8-cjgHUVU1j-if9WofsQ5tp6A=',
    },
    {
      id: 11,
      name: 'Dr. Hossam Ibrahim',
      specialty: 'Dermatology (Skin)',
      rating: 4.6,
      available: false,
      appointments:[],
      location: 'Tanta, Egypt',
      photo: 'https://media.istockphoto.com/id/1371009338/photo/portrait-of-confident-a-young-dentist-working-in-his-consulting-room.jpg?s=612x612&w=0&k=20&c=I212vN7lPpAOwGKRoEY9kYWunJaMj9vH2g-8YBGc2MI=',
    },
    {
      id: 12,
      name: 'Dr. Sara Mohamed',
      specialty: 'Cardiology (Heart)',
      rating: 4.4,
      available: true,
      appointments: [
        { date: "2025-04-20", time: "10:00" },
        { date: "2025-04-21", time: "14:00" },
        { date: "2025-04-22", time: "09:00" },
      ],
      location: 'Cairo, Egypt',
      photo: 'https://media.istockphoto.com/id/1861987838/photo/smiling-female-doctor-looking-at-camera-in-the-medical-consultation.jpg?s=612x612&w=0&k=20&c=Cr60evXkBMcfRAVG5Q9iaIbjdvcHGgSOutvsYraExtI=',
    },
    {
      id: 13,
      name: 'Dr. Layla Zudani',
      specialty: 'Dentistry (Teeth)',
      rating: 4.7,
      available: true,
      appointments: [
        { date: "2025-04-20", time: "10:00" },
        { date: "2025-04-21", time: "14:00" },
        { date: "2025-04-22", time: "09:00" },
      ],
      location: 'Cairo, Egypt',
      photo: 'https://media.istockphoto.com/id/1436148451/photo/smiling-female-doctor-with-digital-tablet-standing-at-isolated-grey-background.jpg?s=612x612&w=0&k=20&c=-cjXiU2FR2B7e6PKi4ELdFRPMiu22aIBkWLSCGzYjYM=',
    },
    {
      id: 14,
      name: 'Dr. Kamal Ali',
      specialty: 'Pediatrics and New Born (Child)',
      rating: 4.6,
      available: true,
      appointments: [
        { date: "2025-04-20", time: "10:00" },
        { date: "2025-04-21", time: "14:00" },
        { date: "2025-04-22", time: "09:00" },
      ],
      location: 'Tanta, Egypt',
      photo: 'https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0=',
    },
    {
      id: 15,
      name: 'Dr. Omer El-Garhy',
      specialty: 'Ear, Nose and Throat',
      rating: 4.4,
      available: true,
      appointments: [
        { date: "2025-04-20", time: "10:00" },
        { date: "2025-04-21", time: "14:00" },
        { date: "2025-04-22", time: "09:00" },
      ],
      location: 'Minya, Egypt', 
      photo: 'https://media.istockphoto.com/id/938438758/photo/confident-doctor-posing-at-the-hospital.jpg?s=612x612&w=0&k=20&c=dv_py_4-TfxJzzgQTELMcLrzzO0l5Xtxv4WTHhgWvmY=',
    },
  ];
  
  export default doctors;
  