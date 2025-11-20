import { Link, useNavigate } from "react-router-dom"
import { useAuth } from "@/context/AuthContext"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const { token, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  return (
    <nav className="bg-slate-800 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo / App Name */}
      <Link to="/" className="text-xl font-bold">
        SolarCalc
      </Link>

      {/* Links */}
      <div className="space-x-4">
        {token ? (
          <>
            <Link to="/dashboard" className="hover:underline">
              Dashboard
            </Link>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-slate-800"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:underline">
              Login
            </Link>
            <Link to="/register" className="hover:underline">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  )
}
