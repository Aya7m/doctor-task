import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import Result from '../pages/Result';

const mockDoctors = [
  { id: 1, name: 'Dr. Aya Helmy', specialty: 'Dermatology', location: 'Cairo', rating: 4.7, available: true, photo: '' },
  { id: 2, name: 'Dr. Ahmed Hassan', specialty: 'Cardiology', location: 'Alexandria', rating: 4.3, available: false, photo: '' },
];

const mockLocation = {
  state: {
    specialtyFilter: 'Dermatology',
    locationFilter: 'Cairo',
    nameFilter: '',
    availabilityFilter: 'available',
  }
};

test('filters doctors correctly and shows them on the page', () => {
  render(
    <MemoryRouter>
      <Result location={mockLocation} />
    </MemoryRouter>
  );

  // التأكد من عرض الأطباء المتوافقين مع الفلاتر
  expect(screen.getByText('Dr. Aya Helmy')).toBeInTheDocument();
  expect(screen.queryByText('Dr. Ahmed Hassan')).toBeNull(); // الطبيب الغير متاح لا يجب أن يظهر
});

test('paginates correctly', () => {
  render(
    <MemoryRouter>
      <DoctorResults location={mockLocation} />
    </MemoryRouter>
  );

  // التأكد من أن صفحة الأطباء الأولى تظهر الأطباء
  expect(screen.getByText('Dr. Aya Helmy')).toBeInTheDocument();

  // الانتقال للصفحة الثانية
  fireEvent.click(screen.getByText('2'));

  // التأكد من أن الانتقال تم بشكل صحيح
  expect(screen.getByText('Dr. Aya Helmy')).toBeInTheDocument();
});

test('navigates to doctor details page when "View Details" is clicked', () => {
  render(
    <MemoryRouter initialEntries={['/results']}>
      <Router>
        <DoctorResults location={mockLocation} />
      </Router>
    </MemoryRouter>
  );

  const viewDetailsButton = screen.getAllByText('View Details')[0];
  fireEvent.click(viewDetailsButton);

  // التأكد من التنقل إلى صفحة التفاصيل
  expect(screen.getByText('Doctor Details Page')).toBeInTheDocument();
});
