import React, { useEffect, useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({ name: "", text: "" });

  useEffect(() => {
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  const handleChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/testimonials", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTestimonial),
    });
    if (response.ok) {
      setTestimonials([...testimonials, newTestimonial]);
      setNewTestimonial({ name: "", text: "" });
    }
  };

  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-container">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <h3>{t.name}</h3>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="testimonial-form">
        <input type="text" name="name" placeholder="Your Name" value={newTestimonial.name} onChange={handleChange} required />
        <textarea name="text" placeholder="Your Review" value={newTestimonial.text} onChange={handleChange} required />
        <button type="submit">Submit Review</button>
      </form>
    </section>
  );
};

export default Testimonials;
