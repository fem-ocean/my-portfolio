"use client";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
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
      // initial={{ opacity: 0, y: 100 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // transition={{ duration: 1 }}
      // viewport={{ once: true }}
      id="about"
    >
      <AboutMeText>
        <h1>About Me</h1>
        <br />
        <p>I am a PMP certified project manager, a business analyst and a Harvard certified web/software developer. In summary, I loooove creating digital products and I tick all the boxes that makes a great Chief Technology Officer!</p>
        <br />
        <h3>Technical</h3>
        <p> I am a man of different hats. On somedays, you may find me putting on my business analyst hat eliciting requirements & performing gap analysis. On other days, you may also find me leading & managing a team of developers and designers as a project manager using agile, traditional or hybrid methodologies</p>
        <br />
        <h3>Personal</h3>
        <p>I love to spend quality time with my family. Periodically, you may find me teaching and mentoring young people or volunteering </p>
      </AboutMeText>
    </Section>
  );
}
