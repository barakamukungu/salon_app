import React, { useEffect, useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [newTestimonial, setNewTestimonial] = useState({ name: "", text: "" });

  useEffect(() => {
    const savedTestimonials = JSON.parse(localStorage.getItem("testimonials")) || [];
    setTestimonials(savedTestimonials);
  }, []);

  const handleChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedTestimonials = [...testimonials, newTestimonial];
    localStorage.setItem("testimonials", JSON.stringify(updatedTestimonials));
    setTestimonials(updatedTestimonials);
    setNewTestimonial({ name: "", text: "" });
  };

  const handleReset = () => {
    localStorage.removeItem("testimonials");
    setTestimonials([]);
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
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={newTestimonial.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="text"
          placeholder="Your Review"
          value={newTestimonial.text}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit Review</button>
      </form>

      {testimonials.length > 0 && (
        <button onClick={handleReset} className="reset-button">
          Reset Testimonials
        </button>
      )}
    </section>
  );
};

export default Testimonials;
