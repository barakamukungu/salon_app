const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from React frontend
app.use(express.static(path.join(__dirname, "../client/build")));

// API Routes
let testimonials = [];

app.post("/api/testimonials", (req, res) => {
  const newTestimonial = req.body;
  testimonials.push(newTestimonial);
  res.status(201).json({ message: "Testimonial added!", testimonial: newTestimonial });
});

app.get("/api/services", (req, res) => {
  res.json([
    { id: 1, name: "Wig Install", image: "/images/Untitledc.png" },
    { id: 2, name: "Braids", image: "/images/Untitledd.png" },
    { id: 3, name: "Cornrows", image: "/images/Untitledb.png" }
  ]);
});

app.post("/api/bookings", (req, res) => {
  const newBooking = req.body;
  console.log("New booking received:", newBooking);
  res.status(201).json({ message: "Booking confirmed!", booking: newBooking });
});

// Handle React routing (Serve React app)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
