import Navbar from "@/components/Navbar"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Page content */}
      <main className="main-content flex-1">
        {children}
      </main>
    </div>
  )
}
