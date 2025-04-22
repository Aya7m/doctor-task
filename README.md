# 🏥 Doctor Booking UI Module

A responsive and accessible doctor booking interface built with **React** and **TailwindCSS**.  
This project was developed as part of a frontend assignment for **InVitro Capital**.

---

## 📌 Features

### 🩺 Doctor Directory View
- Display of doctor details: **name**, **photo**, **specialty**, **rating**, **availability**, and **location**.
- Filters:
  - By **specialty**
  - By **location**
  - By **doctor name**
- **Book Appointment** button with animated UI transitions.

### 📅 Booking Modal
- Shows selected doctor details and **mock time slots**.
- User can select and confirm a slot.
- Animated modal open/close.

### 📋 Appointments Summary View
- Displays list of all booked appointments:
  - Doctor name
  - Specialty
  - Appointment time & location
- Animated appointment cards for better UX.

---

## 🛠️ Tech Stack

- ⚛️ React
- 🎨 TailwindCSS
- 🔁 React Router (for navigation)
- 🔔 react-hot-toast (for notifications)
- 🔧 lucide-react (for icons)
- 🧠 useState & useEffect
- 🧪 Mock data only – **No backend used**

---

## 🚀 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/your-username/doctor-booking-ui.git

# 2. Navigate to the project folder
cd doctor-booking-ui

# 3. Install dependencies
npm install

# 4. Run the development server
npm run dev


🤖 Use of AI Tools
To accelerate development and improve code quality, the following AI tools were used:

ChatGPT:

Assisted in writing React components and logic

Helped design filtering functionality

Contributed to writing this README

♿ Accessibility Considerations
Fully keyboard-navigable:

Tab / Shift+Tab to move between elements

Enter to select buttons or submit

Uses semantic HTML and accessible form controls

Focus indicators for inputs and interactive elements

Responsive design across mobile, tablet, and desktop

Passes basic accessibility audits with Lighthouse and axe DevTools

🚀 Future Enhancements
Add full screen reader support using aria-* attributes

Improve mobile accessibility:

Larger touch targets

More readable fonts

Add automated accessibility tests

Add internationalization (i18n) for multiple languages

Add dark mode toggle

📌 Known Limitations / Next Steps
Appointments are stored in local state only (no database or persistence)

Time slots are mocked

Future improvements:

Add persistent storage (localStorage or backend)

Allow users to cancel or update appointments


## 💁‍♀️ Made with ❤️ by [Aya](https://github.com/Aya7m)


