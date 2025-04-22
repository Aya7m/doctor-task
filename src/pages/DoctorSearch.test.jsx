// import { render } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom';
// import DoctorSearch from '../pages/DoctorSearch';

// test('renders DoctorSearch without crashing', () => {
//   render(
//     <BrowserRouter>
//       <DoctorSearch />
//     </BrowserRouter>
//   );
// });


import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import DoctorSearch from '../pages/DoctorSearch';

test('renders DoctorSearch with all expected inputs', () => {
  render(
    <BrowserRouter>
      <DoctorSearch />
    </BrowserRouter>
  );

  // check for the title
  expect(screen.getByText(/search doctor/i)).toBeInTheDocument();

  // check for name input
  expect(screen.getByPlaceholderText(/search by name/i)).toBeInTheDocument();

  // check for dropdowns
  expect(screen.getByText(/choose specialty/i)).toBeInTheDocument();
  expect(screen.getByText(/choose availability/i)).toBeInTheDocument();
  expect(screen.getByText(/choose location/i)).toBeInTheDocument();

  // check for search button
  expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
});
