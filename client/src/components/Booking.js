import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Booking successful!");
      setFormData({ name: "", email: "", date: "", time: "", service: "" });
    }
  };

  return (
    <section className="booking">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        <select name="service" value={formData.service} onChange={handleChange} required>
          <option value="">Select a Service</option>
          <option value="Haircut">Haircut</option>
          <option value="Styling">Styling</option>
          <option value="Coloring">Coloring</option>
        </select>
        <button type="submit">Book Now</button>
      </form>
    </section>
  );
};

export default Booking;
