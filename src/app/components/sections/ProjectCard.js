import styled from "styled-components";
import Image from "next/legacy/image";
import {motion} from "framer-motion";


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

`

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 50%;
`;

const Info = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  p {
    font-size: 16px;
    line-height: 1.5;
  }
`;

const TechStack = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;

  span {
    font-size: 12px;
    padding: 4px 8px;
    background: #333;
    border-radius: 5px;
    color: #fff;
  }
`;



export default function ProjectCard({ project }) {
  return (
    <CardContainer>
      <ImageWrapper>
        <Image src={project.image} alt={project.title} "layout='fill'" fill style={{objectFit:"cover"}} />
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

