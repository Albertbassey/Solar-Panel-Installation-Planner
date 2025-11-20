import jwt from "jsonwebtoken"

export default function auth(req, res, next) {
  // Expect header: Authorization: Bearer <token>
  const token = req.header("Authorization")?.split(" ")[1]
  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" })
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    // Attach user info to request
    // Make sure your token payload includes { id: user._id }
    req.user = { id: decoded.id }

    next()
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" })
  }
}