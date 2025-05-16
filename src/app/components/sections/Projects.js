"use client";
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence, delay, color } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "portfolio website",
    description: "A personal portfolio showcasing skills and projects.",
    image: "/images/ceiling.jpg",
    tech: ["React", "Next.js", "Styled Components"],
  },
  {
    title: "Real Estate Platform",
    description: "A scalable property listing app for agents and clients.",
    image: "/images/couple.jpeg",
    tech: ["Next.js", "Firebase", "Tailwind"],
  },
  {
    title: "E-commerce Store",
    description: "An online store with payment integration and user accounts.",
    image: "/images/product package.jpg",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Social Media App",
    description: "A platform for users to connect and share content.",
    image: "/images/couple.jpeg",
    tech: ["React", "Firebase", "Material UI"],
  },
  {
    title: "Blog Platform",
    description: "A blogging site with user authentication and comments.",
    image: "/images/ceiling.jpg",
    tech: ["Next.js", "Sanity", "Tailwind"],
  },
];

const TextHeader = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
`;

// const Section = styled(motion.section)`
//   height: 100vh;
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   color: #2e304b;
//   padding: 50px;
//   text-align: left;
//   background-color: #fff;
//   align-items: flex-start;
// `;

const Section = styled.section`
  position: sticky;
  top: 0px;
  padding-top: 5rem;
  padding-bottom: 4rem;
  padding-left: 3rem;
  padding-right: 3rem;
  overflow: hidden;
  background-color: #111;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: #2e304b;
  /* scroll-snap-type: y mandatory; */
  scroll-snap-align: start;

  /* border: 1px solid red; */
`;

// const CarouselContainer = styled.div`
//   width: 100%;
//   height: 100vh;
//   padding: 0px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   position: relative;
// `;

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  scroll-behavior: smooth;
  gap: 2rem;
  padding: 2rem 0;
  padding-left: 3rem;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  border: 3px solid #2e304b;
`;

const NavButtons = styled.div`
  position: absolute;
  bottom: 40px;
  display: flex;
  gap: 20px;

  button {
    background: none;
    color: white;
    border: 1px solid white;
    font-size: 24px;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 50px;
    transition: 0.3s ease;

    &:hover {
      background: white;
      color: black;
    }
  }



`;

  const ProjectSectionIntro = styled.div`
  width: 100%;
  height: 100px;
  color: white;
  align-items: flex-start;
  `

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  padding: 0.8rem 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    background: #eaeaea;
  }

  &.left {
    left: 0.5rem;
  }

  &.right {
    right: 0.5rem;
  }
`;


export default function Projects() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () =>
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);


  function scroll(direction) {
    const container = document.getElementById("carousel-container");
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  }

  return (
    // <Section
    //   initial={{ opacity: 0, y: 100 }}
    //   whileInView={{ opacity: 1, y: 0 }}
    //   transition={{ duration: 1 }}
    //   viewport={{ once: true }}
    // >
    //   <h1>My Projects</h1>
    //   <p>Here are some of my works...</p>
    //   <CarouselContainer>
    //     <AnimatePresence mode="wait">
    //       <motion.div
    //         key={index}
    //         initial={{ opacity: 0, x: 100 }}
    //         animate={{ opacity: 1, x: 0 }}
    //         exit={{ opacity: 0, x: -100 }}
    //         transition={{ duration: 0.5 }}
    //       >
    //         <ProjectCard project={projects[index]} />
    //       </motion.div>
    //     </AnimatePresence>
    //     <NavButtons>
    //       <button onClick={handlePrev}>←</button>
    //       <button onClick={handleNext}>→</button>
    //     </NavButtons>
    //   </CarouselContainer>
    // </Section>

    <Section id="projects">
      <ProjectSectionIntro>
        <h1>My Projects</h1>
        <p>Here are some of my works...</p>
      </ProjectSectionIntro>

      <ScrollButton className="left" onClick={() => scroll("left")}>
        ←
      </ScrollButton>
      <ScrollButton className="right" onClick={() => scroll("right")}>
        →
      </ScrollButton>
      <CarouselContainer id="carousel-container">
        
        { projects.map((item,key) => (
          <ProjectCard
            key={item.title}
            // whileHover={{ scale: 1.05 }}
            // whileTap={{ scale: 0.98 }}
            // initial={{ opacity: 0, y: 20 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.5, delay: item * 0.1 }}
            project={item}
          />
           
        ))} 
      </CarouselContainer>
    </Section>
  );
}
