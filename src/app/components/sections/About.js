"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled(motion.section)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* color: white; */
  /* padding: 50px; */
  text-align: justify;
  scroll-snap-align: start;
  
  background-color:#fff;

  @media (max-width:359px){
    font-size: 12px;
  }
  @media (min-width:360px) and (max-width:768px){
    font-size: 14px;
  }
`;

const AboutMeText = styled.div`
  width: 85%;
  height: max-content;
  /* border: 1px solid red; */
  color: #2e304b;
`;

export default function About() {
  return (
    <Section
      initial={{ opacity: 0, y: 300 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="about"
    >
      <AboutMeText>
        <h1>About Me</h1>
        <br />
        <p>
          I’m a PMP-certified Project Manager, Business Analyst, and
          Harvard-certified Web & Software Developer. I thrive on turning ideas
          into polished digital products, and my multidisciplinary background
          equips me with the vision, process rigor, and technical chops needed
          to excel as a Chief Technology Officer.
        </p>
        <br />
        <h3>Technical</h3>
        <p>
          I wear many hats:
          <br />
          Business Analyst — Eliciting requirements, conducting gap analyses,
          and defining clear project scopes. <br />
          Project Manager — Leading cross-functional teams with agile,
          waterfall, and hybrid methodologies to deliver on time and within
          budget. <br />
          Developer — Architecting and building scalable web applications,
          ensuring code quality, performance, and maintainability.
        </p>
        <br />
        <h3>Personal</h3>
        <p>
          Outside of work, I’m a family-first person—nothing recharges me like
          quality time at home. I also give back by mentoring aspiring
          technologists, project managers and volunteering for community education programs.
        </p>
      </AboutMeText>
    </Section>
  );
}
