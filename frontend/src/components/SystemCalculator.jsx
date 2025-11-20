import { useState } from "react"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SystemCalculator() {
  const [dailyUsage, setDailyUsage] = useState("")
  const [sunHours, setSunHours] = useState("")
  const [result, setResult] = useState(null)

  const handleCalculate = (e) => {
    e.preventDefault()

    const usage = parseFloat(dailyUsage)
    const hours = parseFloat(sunHours)

    if (!usage || !hours) {
      setResult(null)
      return
    }

    // Basic calculation
    const systemSizeKW = usage / (hours * 1000) // kW
    const panels = Math.ceil(systemSizeKW * 1000 / 300) // assume 300W panels
    const cost = panels * 250 // assume $250 per panel
    const savings = usage * 0.12 * 365 // assume $0.12/kWh electricity rate

    setResult({ systemSizeKW, panels, cost, savings })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-6">
      <Card className="w-full max-w-md">
        <CardHeader>
          <h1 className="text-2xl font-bold">Solar System Calculator</h1>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleCalculate} className="space-y-4">
            <Input
              type="number"
              placeholder="Daily Usage (Wh)"
              value={dailyUsage}
              onChange={(e) => setDailyUsage(e.target.value)}
              required
            />
            <Input
              type="number"
              placeholder="Sun Hours per Day"
              value={sunHours}
              onChange={(e) => setSunHours(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">Calculate</Button>
          </form>

          {result && (
            <div className="mt-6 space-y-2">
              <p>System Size: {result.systemSizeKW.toFixed(2)} kW</p>
              <p>Panels: {result.panels}</p>
              <p>Cost: ${result.cost.toLocaleString()}</p>
              <p>Savings: ${result.savings.toLocaleString()}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
