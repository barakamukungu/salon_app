import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./styles.css";
import Testimonials from "./components/Testimonials";
import Services from "./components/Services";
import Booking from "./components/Booking";

const testimonials = [
  { id: 1, img: "https://randomuser.me/api/portraits/men/32.jpg", name: "Jim Sheppard", text: "Great service!" },
  { id: 2, img: "https://randomuser.me/api/portraits/women/45.jpg", name: "Sarah Johnson", text: "Amazing experience!" },
  { id: 3, img: "https://randomuser.me/api/portraits/women/50.jpg", name: "Linda Brown", text: "Highly recommended!" }
];

export default function App() {
  return (
    <div className="container">
      <header className="sticky-header">
        <div className="header-img">
          <img src="/images/Untitledf.png" alt="Salon Logo" />
        </div>
        <div>
          <p className="glowing-text">Rich</p>
          <p className="hair">HAIR</p>
        </div>
      </header>

      <section className="about">
        <div className="aboutus">
          <p className="title">About Us</p>
          <p>We provide top-notch hair services for all styles and needs.</p>
        </div>
        <div>
          <img src="/images/Untitlede.png" alt="About Us" />
        </div>
      </section>

      <Booking />

      <Testimonials />

      <Services />
      
      <footer>
        <div>
          <h1>Contact Us</h1>
          <p>Email: rich@gmail.com</p>
          <p>We look forward to your presence</p>
        </div>
        <div>
          <h1>Location</h1>
          <p>@richhairsalon</p>
          <p>007 street SA</p>
        </div>
      </footer>
      <div className="copyr">Copyright@BarakaM</div>
    </div>
  );
}
