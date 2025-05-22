import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";

// const CardContainer = styled.div`
//   width: 40vw;
//   max-width: 600px;
//   height: 70vh;
//   background: #111;
//   color: white;
//   border-radius: 16px;
//   overflow: hidden;
//   display: flex;
//   flex-direction: column;
//   box-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
// `;

const CardContainer = styled.div`
  max-width: 320px;
  height: 60vh;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  padding: 1.5rem;
  flex-shrink: 0;
  cursor: pointer;

  /* Small phones (portrait) */
  @media (max-width: 359px) {
    padding: 0.5rem;
    max-width: 200px;
    height: 50vh;
  }

  /* Most phones (landscape) */
  @media (min-width: 360px) and (max-width: 767px) {
    padding: 1rem;
    max-width: 240px;
    font-size: small;
    height: 57vh;
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-radius: 16px;
`;

const Info = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 10px;
    font-size: 24px;
    /* Small phones (portrait) */
    @media (max-width: 359px) {
      font-size: 14px;
    }

    /* Most phones (landscape) */
    @media (min-width: 360px) and (max-width: 767px) {
    font-size: 18px;
  }
}

  p {
    font-size: 16px;
    line-height: 1.5;
    /* Small phones (portrait) */
    @media (max-width: 359px) {
      font-size: 10px;
    }
    /* Most phones (landscape) */
    @media (min-width: 360px) and (max-width: 767px) {
    font-size: 12px;
    }
  }
`;

const TechStack = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  span {
    font-size: 12px;
    padding: 4px 8px;
    background: #333;
    border-radius: 5px;
    color: #fff;
    /* Small phones (portrait) */
    @media (max-width: 359px) {
      font-size: 7px;
    }
  }
`;

export default function ProjectCard({ project }) {
  return (
    <CardContainer onClick={() => window.open(project.link, "_blank")}>
      <ImageWrapper>
        <Image
          src={project.image}
          alt={project.title}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </ImageWrapper>
      <Info>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <TechStack>
          {project.tech.map((tech, idx) => (
            <span key={idx}>{tech}</span>
          ))}
        </TechStack>
      </Info>
    </CardContainer>
  );
}
