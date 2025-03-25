import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./styles.css";

const testimonials = [
  { id: 1, img: "https://randomuser.me/api/portraits/men/32.jpg", name: "Jim Sheppard", text: "Great service!" },
  { id: 2, img: "https://randomuser.me/api/portraits/women/45.jpg", name: "Sarah Johnson", text: "Amazing experience!" },
  { id: 3, img: "https://randomuser.me/api/portraits/women/50.jpg", name: "Linda Brown", text: "Highly recommended!" }
];

export default function App() {
  return (
    <div className="container">
      <header>
        <div>
          <p className="glowing-text">Rich</p>
          <p className="hair">HAIR</p>
        </div>
        <div className="header-img">
          <img src="/Untitledf.png" alt="Salon Logo" />
        </div>
      </header>

      <section className="testimonial-container">
        <div className="testimonial-content">
          <span className="quote-icon">“</span>
          <p id="testimonial-text">Best hair salon experience!</p>
        </div>
        <Swiper modules={[Pagination, Autoplay]} slidesPerView={3} spaceBetween={20} centeredSlides loop autoplay={{ delay: 3000 }} pagination={{ clickable: true }}>
          {testimonials.map(({ id, img, name }) => (
            <SwiperSlide key={id}>
              <img src={img} className="testimonial-img" alt={name} />
              <div className="testimonial-author">{name}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="about">
        <div className="aboutus">
          <p className="title">About Us</p>
          <p>We provide top-notch hair services for all styles and needs.</p>
        </div>
        <div>
          <img src="/Untitlede.png" alt="About Us" />
        </div>
      </section>
    </div>
  );
}
