"use client";
import styled from "styled-components";
import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTheme } from "../ThemeContext";

const Section = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  text-align: center;
  scroll-snap-align: start;
  background-color: ${(props) => props.bgcolor};
  /* background-color: #fd8e8e; */

  /* Most phones (landscape) */
  @media (min-width: 360px) and (max-width: 767px) {
    padding: 21px;
  }
`;

const TestimonialContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 2px solid red; */
  width: 100%;
  max-width: 800px;
  height: 50%;
  margin: 0 auto;
  text-align: center;
  padding: 50px 20px;
  color: #2e304b;
  justify-content: center;
  align-items: center;

  /* Small phones (portrait) */
  @media (max-width: 359px) {
    padding: 50px 2px;
    height: 100%;
    font-size: medium;
  }

  /* Most phones (landscape) */
  @media (min-width: 360px) and (max-width: 767px) {
    height: 85%;
    padding: 10px 20px;
  }

  /* Tablets */
  @media (min-width: 768px) and (max-width: 1023px) {
  }

  /* Small laptops/desktops */
  @media (min-width: 1024px) and (max-width: 1279px) {
  }

  /* Standard desktops */
  @media (min-width: 1280px) and (max-width: 1439px) {
  }

  /* Large screens */
  @media (min-width: 1440px) {
  }
`;

const TestimonialBox = styled.div`
  width: 100px;
  height: auto;
  border: 1px solid yellow;
`;

const TestimonialText = styled(motion.p)`
  font-size: 2rem;
  /* line-height:2rem; */
  margin-bottom: 20px;
`;

const Author = styled(motion.h4)`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
`;

const StyledSwiper = styled(Swiper)`
  .swiper-pagination {
    position: absolute;
    bottom: 5px;
    left: 10%;
    transform: translateX(-50%);
    /*gap:20px;/* Increase spacing between dots */
    display: flex !important;
    flex-direction: row !important;
    align-items: center;
    justify-content: center;

    @media (max-width: 359px) {
      left: 50px;
    }
  }
  .swiper-pagination-bullet {
    width: 12px; /* Increase size */
    height: 12px; /* Increase size */
    background-color: white !important; /* Make dots white */
    opacity: 0.5;
    transition: opacity 0.3s ease-in-out;
    margin: 0 90px;
  }

  .swiper-pagination-bullet-active {
    opacity: 1;
    background-color: white !important; /* Active dot stays white */
  }
`;

export default function Testimonials() {
  const testimonials = [
    {
      text: "This is an amazing experience! The design is stunning, and the UX is smooth.",
      author: "John Doe",
    },
    {
      text: "One of the best web experiences I’ve had. Highly recommend!",
      author: "Jane Smith",
    },
    {
      text: "The animations and transitions are so seamless. Love it!",
      author: "Mike Johnson",
    },
  ];

  
    const { currentTheme } = useTheme();
  

    return (
      <Section
        // initial={{ opacity: 0, y: 100 }}
        // whileInView={{ opacity: 1, y: 0 }}
        // transition={{ duration: 1 }}
        // viewport={{ once: true }}
        id="references"
        bgcolor={currentTheme.testimonialBg}
      >
        <TestimonialContainer>
          <StyledSwiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }}
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialText
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  "{testimonial.text}"
                </TestimonialText>
                <Author>{testimonial.author}</Author>
              </SwiperSlide>
            ))}
          </StyledSwiper>
          {/* <TestimonialBox>     
          <p>Testimonial 1: What people are saying about us!</p>
        </TestimonialBox>

        <TestimonialBox>
          <p>Testimonial 2: What people are saying about us!</p>
        </TestimonialBox> */}
        </TestimonialContainer>
      </Section>
   );
  
};

