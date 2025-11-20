# SolarCalc Backend

This is the backend API for the SolarCalc project. It handles user authentication, system calculations, installations, and history persistence using MongoDB.

---

## 🚀 Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcrypt.js for password hashing
- dotenv for environment variables
- cors for cross-origin requests

---

## 📂 Project Structure
backend/ 
controllers/ authController.js systemController.js 
models/ User.js SystemCalculation.js 
routes/ authRoutes.js systemRoutes.js installationRoutes.js middleware/ auth.js errorHandler.js server.js


---

## ⚙️ Setup

1. Install dependencies:
   ```bash
   npm install

2. Create a .env file in the backend folder:
    PORT=5000
    MONGO_URI=mongodb://localhost:27017/solarcalc
    JWT_SECRET=your_jwt_secret_here

3. Run the server:
    npm run dev   # if using nodemon
    npm start     # if using plain node

🔒 API Endpoints
Auth
    POST /api/auth/register → Register new user

    POST /api/auth/login → Login user

System
    POST /api/system/calculate → Save new calculation (protected)

    GET /api/system/history → Get user’s calculation history (protected)

Installations
    GET /api/installations → Example route for installations

✅ Notes
All protected routes require Authorization: Bearer <token> header.

Error handling is centralized in middleware/errorHandler.js.