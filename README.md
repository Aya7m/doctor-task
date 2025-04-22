# 🏥 Doctor Booking UI Module

A responsive and accessible doctor booking interface built with **React** and **TailwindCSS**.  
This project was developed as part of a frontend assignment for **InVitro Capital**.

---

## 📌 Features

### 🩺 Doctor Directory View
- Display of doctor details: **name**, **photo**, **specialty**, **rating**, **availability**, and **location**
- Filtering by:
  - **Specialty**
  - **Location**
  - **Doctor name**
- **Book Appointment** button with animated transitions

### 📅 Booking Modal
- Displays selected doctor information and **mocked available time slots**
- Allows users to select and confirm a slot
- Smooth modal open/close animations

### 📋 Appointments Summary View
- Lists all booked appointments with:
  - Doctor name
  - Specialty
  - Appointment time and location
- Animated appointment cards for enhanced user experience

---

## 🛠️ Tech Stack

- ⚛️ React
- 🎨 TailwindCSS
- 🔁 React Router (for navigation)
- 🔔 react-hot-toast (for notifications)
- 🎯 lucide-react (for icons)
- 🧠 React Hooks: `useState`, `useEffect`
- 🧪 **Mock data only** – No backend used

---

## 🚀 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/Aya7m/doctor-task.git

# 2. Navigate to the project folder
cd doctor-task

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev

🤖 Use of AI Tools
To accelerate development and improve code quality, I used:

ChatGPT

Assisted in building React components and logic

Helped implement filtering functionality

Supported writing this README

♿ Accessibility Considerations
Fully keyboard-navigable: Tab, Shift+Tab, Enter

Semantic HTML and accessible form controls

Focus indicators on inputs and buttons

Responsive design across mobile, tablet, and desktop

Passed basic audits using Lighthouse and axe DevTools

⚠️ Known Limitations
All data is mocked (no backend)

No validation on booking form

Appointments stored in local state only (not persisted)

🚀 Future Enhancements
Connect to real backend with persistent storage

Allow users to update or cancel appointments

Add calendar-based booking view

Improve ARIA support for screen readers

Larger touch targets on mobile

Add dark mode toggle

Add i18n for multi-language support

Integrate automated accessibility tests

✅ Accessibility Tips
Add aria-label attributes to important buttons and form elements for screen reader support

Run accessibility audits using tools like:

axe DevTools Chrome Extension

Lighthouse

Focus on improvements related to:

Color contrast

alt attributes for images

Proper labeling for interactive elements

💡 Small UI Enhancement
On the Appointments page, consider adding:
{appointments.length === 0 && (
  <p className="text-center text-gray-500">
    No appointments booked yet.
  </p>
)}

👩‍💻 Author
Made with ❤️ by Aya