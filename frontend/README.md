
---

## 📄 Frontend README (`frontend/README.md`)

```markdown
# SolarCalc Frontend

This is the frontend React app for the SolarCalc project. It provides a dashboard for users to log in, register, calculate solar system savings, and view history.

---

## 🚀 Tech Stack
- React + Vite
- React Router
- Tailwind CSS
- Context API for Auth
- Custom API helper (`utils/api.js`)

---

## 📂 Project Structure
frontend/ 
src/ 
components/ Navbar.jsx Layout.jsx ProtectedRoute.jsx 
context/ AuthContext.jsx 
pages/ Login.jsx Register.jsx Dashboard.jsx 
utils/ api.js 
App.jsx 
main.jsx 
App.css


---

## ⚙️ Setup

1. Install dependencies:
   ```bash
   npm install

2. Create a .env file in the frontend folder:
    VITE_API_URL=http://localhost:5000

3. Run the development server:
   npm run dev
 
🔒 Features
Auth Flow: Login/Register with JWT stored in localStorage.

Protected Routes: Dashboard only accessible when logged in.

Navbar: Shows links based on auth state.

Dashboard:

New Calculation form card

Responsive card grid for history

✅ Notes
Ensure backend is running on the same port as VITE_API_URL.

Tailwind styles are imported globally via App.css.
    
---