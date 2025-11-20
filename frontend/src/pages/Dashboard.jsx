import { useEffect, useState } from "react"
import { apiFetch } from "@/utils/api"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Dashboard() {
  const [history, setHistory] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [systemSizeKW, setSystemSizeKW] = useState("")
  const [panels, setPanels] = useState("")
  const [cost, setCost] = useState("")
  const [savings, setSavings] = useState("")
  const [location, setLocation] = useState("")

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const data = await apiFetch("/api/system/history")
        setHistory(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    fetchHistory()
  }, [])

  const handleNewCalculation = async (e) => {
    e.preventDefault()
    try {
      const newCalc = await apiFetch("/api/system/calculate", {
        method: "POST",
        body: JSON.stringify({
          systemSizeKW,
          panels,
          cost,
          savings,
          location,
        }),
      })

      // Add new calculation to history
      setHistory((prev) => [newCalc, ...prev])

      // Reset form
      setSystemSizeKW("")
      setPanels("")
      setCost("")
      setSavings("")
      setLocation("")
    } catch (err) {
      setError(err.message)
    }
  }

  if (loading) return <p className="p-6">Loading...</p>
  if (error) return <p className="p-6 text-red-500">❌ {error}</p>

  return (
    <div className="min-h-screen bg-background p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* New Calculation Form Card */}
      <Card className="mb-8">
        <CardHeader>
          <h2 className="text-xl font-semibold">New Calculation</h2>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNewCalculation} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="number"
              placeholder="System Size (kW)"
              value={systemSizeKW}
              onChange={(e) => setSystemSizeKW(e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="Panels"
              value={panels}
              onChange={(e) => setPanels(e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="Cost ($)"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="Savings ($)"
              value={savings}
              onChange={(e) => setSavings(e.target.value)}
              required
            />
            <Input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
            <Button type="submit" className="md:col-span-2 w-full">
              Save Calculation
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* History Grid */}
      {history.length === 0 ? (
        <p>No history yet</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {history.map((item, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">
                System Size: {item.systemSizeKW} kW
              </h2>
              <p className="text-slate-600">Panels: {item.panels}</p>
              <p className="text-slate-600">Cost: ${item.cost}</p>
              <p className="text-slate-600">Savings: ${item.savings}</p>
              <p className="text-slate-600">Location: {item.location}</p>
              <p className="text-slate-600">
                Date: {new Date(item.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
