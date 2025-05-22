import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import { useTheme } from "./ThemeContext";
import { motion } from "framer-motion";

const LeftPanelContainer = styled(motion.div)`
  width: 50%;
  height: 100vh;
  background-color: #2e304b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 50px 30px;
  position: fixed;
  /* left: 0; */
  /* top: 0; */
  gap: 20px;
  /* z-index: 1; */

  @media (max-width: 1024px) {
    width: 100%;
    height: 100vh;
    position: relative;
    padding: 40px 20px;
    z-index: 5;
    scroll-snap-align: start;
  }
`;

const InfoDiv = styled.div`
  color: ${(props) => props.themetextcolor};

  @media (max-width: 359px) {
    margin-top: 8rem;
    padding: 0 18px;
  }

  /* Most phones (landscape) */
  @media (min-width: 360px) and (max-width: 767px) {
    padding-top: 82px;
  }
  /* Tablets */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding-top: 82px;
  }
`;

const Name = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;

 
  

  /* Small phones (portrait) */
  @media (max-width: 359px) {
    font-size: 1rem;
  }

  /* Most phones (landscape) */
  @media (min-width: 360px) and (max-width: 767px) {
  }

  /* Tablets */
  @media (min-width: 768px) and (max-width: 1023px) {
  }

  /* Small laptops/desktops */
  @media (min-width: 1024px) and (max-width: 1279px) {
    margin-top: 5rem;
    font-size: 1.5rem;
  }

  /* Standard desktops */
  @media (min-width: 1280px) and (max-width: 1439px) {
  }

  /* Large screens */
  @media (min-width: 1440px) {
  }
`;

const Title = styled.p`
  font-size: 1rem;
  /* color: #aaa; */
  /* margin-bottom: 0px; */
  margin-top: 30px;

  @media (max-width: 359px) {
    font-size: 0.8rem;
  }
`;

const Button = styled.a`
  margin-top: 20px;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 400;
  color: ${(props) => props.bordercolor};
  /* background-color: white; */
  border: 2px solid ${(props) => props.bordercolor};
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.5s ease-in-out;

  &:hover {
    background-color: ${(props) => props.bordercolor};
    color: #2e304b;
    /* transition: background-color 0.3s ease-in-out; */
    /* transform: scale(1.05); */
  }
`;

const SocialMediaText = styled.p`
  font-size: 1rem;
  font-style: italic;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 5px;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: auto;
  /* border: 2px solid #fd8e8e; */
`;

const SocialIcon = styled.img`
  width: ${(props) => props.widthsize || "30px"}; /* Default size is 30px */
  height: ${(props) => props.heightsize || "30px"}; /* Default size is 30px */
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Circle = styled.div`
  width: 60px; /* Adjust size as needed */
  height: 60px;
  /* background-color: #fd8e8e; */
  background-color: ${(props) => props.bgcolor};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  align-self: flex-start;
  z-index: 4999; /* Places it behind the hamburger */

  @media (max-width: 1024px) {
    width: 50px; /* Adjust size for mobile */
    height: 50px;
    top: 45px;
    position: fixed;
    left: 3rem;
  }
`;

export default function LeftPanel({ sectionRefs }) {
  const { currentTheme } = useTheme();

  const leftPanelVariants = {
    hidden: { x: "100%", width: "100vw" }, // Start off-screen to the right
    visible: {
      x: 0,
      width: "50vw", // Final width (adjust as needed)
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  
  

  return (
    <LeftPanelContainer id="main-content"
    variants={leftPanelVariants}  
    initial="hidden"
      animate="visible"
      // whileInView={{ opacity: 1, x: -500 }}
      // transition={{ duration: 1 }}
      viewport={{ once: true }}>
      {/* <Circle bgcolor={currentTheme.burgerCircle}> */}
        <BurgerMenu sectionRefs={sectionRefs} />
      {/* </Circle> */}

      <InfoDiv themetextcolor={currentTheme.fontTextColor}>
        <Name>
          {`Hello. I'm Olufemi Oshin. I am a PMP-certified Project Manager,
          Business Analyst and Harvard-certified Web & Software Developer`}
        </Name>
        <Title>
          {`I bridge the gap between business needs and digital solutions—managing
          projects end to end, gathering precise requirements, and building
          products that users love.`}
        </Title>
      </InfoDiv>

      <Button href="#contact" bordercolor={currentTheme.fontTextColor}>
        Let's Work Together!
      </Button>

      <div style={{ width: "200px" }}>
        <SocialMediaText>Let's Connect</SocialMediaText>
        <SocialLinks>
          <a
            href="https://linkedin.com/in/femi-oshin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src="/images/linkedin logo.png" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/fem-ocean"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon
              src="/images/github-icon.svg"
              alt="GitHub"
              widthsize="40px"
              heightsize="40px"
            />
          </a>
          <a
            href="https://x.com/cuul_fm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src="/images/twitterx.png" alt="Twitter" />
          </a>
          <a
            href="https://www.youtube.com/@habby9367"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon src="/images/youtube.png" alt="Youtube" />
          </a>
        </SocialLinks>
      </div>
    </LeftPanelContainer>
  );
}
