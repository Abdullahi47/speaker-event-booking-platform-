require("dotenv").config()
const cors = require("cors")
const express = require("express")
const connectDatabase = require("./config/database")
const { errorHandler, notFound } = require("./middleware/errorHandler")

const app = express()

app.use(cors({ origin: process.env.CLIENT_ORIGIN || "http://localhost:5173" }))
app.use(express.json({ limit: "1mb" }))

const imagerouter = require("./model/router/organizationrouter")
const userRouter = require("./routes/UserRouter")

app.use("/allImages" , express.static("images"))
app.use("/image" ,imagerouter)
app.use("/users", userRouter)
app.use("/api/auth", require("./routes/authRoutes"))
app.use("/api/events", require("./routes/eventRoutes"))
app.use("/api/availability", require("./routes/availabilityRoutes"))
app.use("/api/bookings", require("./routes/bookingRoutes"))

app.get("/api/health", (_req, res) => res.json({ success: true, message: "API is healthy" }))
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 3000

connectDatabase().then(() => {
    app.listen(port, () => console.log(`Server is running on port ${port}`))
}).catch((error) => {
    console.error("Database connection failed:", error.message)
    process.exit(1)
})
