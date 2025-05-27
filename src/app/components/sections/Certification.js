"use client";
import styled from "styled-components"; 
import { motion } from "framer-motion";

const Section = styled.section`
  padding: 60px 20px;
  background-color: #f9f9f9;
  text-align: center;
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;

  @media (max-width: 1024px){
    overflow-y: scroll;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 40px;
`;

const Grid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-items: center;
`;

const Card = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover img {
    opacity: 0.3;
    transform: scale(1.05);
  }
`;

const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: 0.3s ease;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000cc;
  color: white;
  padding: 20px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  transition: 0.4s ease;
  overflow-y: visible;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
`

const CardTitle = styled.div`
  font-size: 10px;
  font-weight: 800;
  text-align: center;
  width: 100%;
  height: fit-content;
  color: #2e304b;
`


const certifications = [
  {
    name: "PMP Certification",
    logo: "/images/pmp certification logo.png",
    description:
      "As a globally-recognized Project Management Professional (PMP)®, I have demonstrated the extensive knowledge and mastery of project management concepts, tasks, and techniques that are applicable across virtually any industry & methodology.",
  },
  {
    name: "Professional Scrum Master",
    logo: "/images/psm logo.png",
    description:
      "By earning the globally recognized Professional Scrum Master I (PSM I) certification I have demonstrated a fundamental level of Scrum mastery, including the concepts of applying Scrum, and proven an understanding of Scrum as described in the Scrum Guide. I have also demonstrated a consistent use of terminology and approach to Scrum.",
  },
  {
    name: "Google Project Management",
    logo: "/images/google pm cert.png",
    description:
      "By earning the Google Project Management Certificate, I have completed six courses, developed by Google, that include hands-on, practice-based assessments and are designed to prepare me for introductory-level roles in Project Management. It made me competent in initiating, planning and running both traditional and agile projects.",
  },
  {
    name: "Certificate in web programming with Python & JavaScript",
    logo: "/images/harvardcs50.jpg",
    description:
      "By earning the Certificate in web programming with Python & JavaScript, I have developed a deep understanding of web development concepts and best practices. This program has equipped me with the skills to build dynamic and interactive web applications using modern programming languages and frameworks.",
  },
  {
    name: "Certificate in full stack development with MERN",
    logo: "/images/nerdyeye.png",
    description:
      "By earning the Certificate in full stack development with MERN, I have developed a deep understanding of web development concepts and best practices. This program has equipped me with the skills to build dynamic and interactive web applications using modern programming languages and frameworks.",
  },
  {
    name: "Responsive Web Design",
    logo: "/images/freeCodeCamp.webp",
    description:
      "By earning the Responsive Web Design certification from freeCodeCamp, I have developed a deep understanding of web design principles and best practices. This program has equipped me with the skills to create responsive and visually appealing websites that provide an optimal user experience across various devices.",
  },
  {
    name: "JavaScript Algorithms and Data Structures",
    logo: "/images/freeCodeCamp.webp",
    description:
      "By earning the JavaScript Algorithms and Data Structures certification from freeCodeCamp, I have developed a deep understanding of algorithms and data structures in JavaScript. This program has equipped me with the skills to solve complex programming challenges and build efficient applications.",
  },
  {
    name: "Introduction to Artificial Intelligence",
    logo: "/images/openclassrooms.jpg",
    description:
      "By earning the Introduction to Artificial Intelligence certification from OpenClassrooms, I have developed a deep understanding of AI concepts and applications. This program has equipped me with the skills to build intelligent systems and leverage AI technologies effectively.",
  },
];



export default function Certification() {
  return (
    <Section id="certifications">
      <div style={{ width: "85%", height: "maxContent" }}>
        <h1
          style={{ color: "#2e304b", textAlign: "left", marginBottom: "40px" }}
        >
          Certifications & Qualifications
        </h1>
        <Grid>
          {certifications.map((cert, index) => (
            <CardContainer key={index}>
              <Card>
                <Logo src={cert.logo} alt={cert.name} />
                <Overlay
                  initial={{ y: "85%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <p style={{ "fontSize": "8px" }}>{cert.description}</p>
                </Overlay>
              </Card>
              <CardTitle>{cert.name}</CardTitle>
            </CardContainer>
          ))}
        </Grid>
      </div>
    </Section>
  );
}