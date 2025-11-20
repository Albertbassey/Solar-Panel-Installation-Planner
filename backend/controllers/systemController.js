import SystemCalculation from "../models/SystemCalculation.js"

// @desc   Save a new system calculation
// @route  POST /api/system/calculate
// @access Private
export const createCalculation = async (req, res) => {
  try {
    const { systemSizeKW, panels, cost, savings, location } = req.body

    if (!systemSizeKW || !panels || !cost || !savings || !location) {
      return res.status(400).json({ message: "All fields are required" })
    }

    const newCalc = await SystemCalculation.create({
      systemSizeKW,
      panels,
      cost,
      savings,
      location,
      date: new Date(),
      user: req.user.id, // comes from JWT via auth.js middleware
    })

    res.status(201).json(newCalc)
  } catch (err) {
    console.error("Error saving calculation:", err)
    res.status(500).json({ message: "Failed to save calculation" })
  }
}

// @desc   Get all calculations for logged-in user
// @route  GET /api/system/history
// @access Private
export const getHistory = async (req, res) => {
  try {
    const history = await SystemCalculation.find({ user: req.user.id }).sort({ date: -1 })
    res.json(history)
  } catch (err) {
    console.error("Error fetching history:", err)
    res.status(500).json({ message: "Failed to fetch history" })
  }
}