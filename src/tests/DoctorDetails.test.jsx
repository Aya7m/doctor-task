import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';


import toast from 'react-hot-toast';
import DoctorDetails from '../pages/DoctorDetails';

jest.mock('react-hot-toast'); // لضبط اختبار التوست

const mockDoctors = [
  { id: 1, name: 'Dr. Aya Helmy', specialty: 'Dermatology', location: 'Cairo', rating: 4.7, available: true, photo: '' },
];

const mockNavigate = jest.fn();

test('renders doctor details correctly', () => {
  render(
    <MemoryRouter initialEntries={['/doctor/1']}>
      <Router>
        <DoctorDetails/>
      </Router>
    </MemoryRouter>
  );

  // التأكد من عرض تفاصيل الطبيب
  expect(screen.getByText('Dr. Aya Helmy')).toBeInTheDocument();
  expect(screen.getByText('Dermatology')).toBeInTheDocument();
  expect(screen.getByText('Rating: ⭐ 4.7')).toBeInTheDocument();
});

test('books appointment successfully', async () => {
  render(
    <MemoryRouter initialEntries={['/doctor/1']}>
      <Router>
        <DoctorDetails />
      </Router>
    </MemoryRouter>
  );

  // محاكاة اختيار موعد
  fireEvent.change(screen.getByLabelText('Select an Available Slot:'), {
    target: { value: '2025-04-25T10:00' }
  });

  // محاكاة الضغط على زر الحجز
  fireEvent.click(screen.getByRole('button', { name: /Book Appointment/i }));

  // التأكد من أن التوست يظهر
  await waitFor(() => expect(toast.success).toHaveBeenCalledWith('تم حجز الموعد بنجاح!'));

  // التأكد من التنقل لصفحة التأكيد
  expect(mockNavigate).toHaveBeenCalledWith('/confirmation', expect.objectContaining({
    state: expect.objectContaining({
      doctorName: 'Dr. Aya Helmy',
      doctorSpecialty: 'Dermatology',
    })
  }));
});
