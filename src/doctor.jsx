// import { useState } from 'react';
// import './Doctor.css';

const Doctor = () => {
  // const [selectedDoctor, setSelectedDoctor] = useState(null);
  // const [selectedSlot, setSelectedSlot] = useState(null);

  // const doctors = [
  //   { id: 1, name: 'Dr. John Doe', specialization: 'Cardiologist' },
  //   { id: 2, name: 'Dr. Jane Smith', specialization: 'Dermatologist' },
  //   { id: 3, name: 'Dr. Emily Brown', specialization: 'Pediatrician' },
  // ];

  // const slots = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'];

  // const handleDoctorSelect = (doctor) => {
  //   setSelectedDoctor(doctor);
  //   setSelectedSlot(null); // Reset slot when a new doctor is selected
  // };

  // const handleSlotSelect = (slot) => {
  //   setSelectedSlot(slot);
  // };

  // const handleBooking = () => {
  //   if (selectedDoctor && selectedSlot) {
  //     alert(`Booked ${selectedDoctor.name} at ${selectedSlot}`);
  //   } else {
  //     alert('Please select a doctor and a time slot.');
  //   }
  // };

  return (
    <div className='searchbox'>
      <form action="#">
                <input type="text" placeholder="Search Courses"
                       name="search"> </input>
                <button>
                    
                </button>
            </form>

    </div>
  
  
    
  );
};

export default Doctor;
