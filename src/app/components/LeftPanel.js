import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
import { useTheme } from "./ThemeContext";

const LeftPanelContainer = styled.div`
  width: 50%;
  height: 100vh;
  background-color: #2e304b;
  color: white;
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

  }
`;

const Name = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 15px;
`;

const Title = styled.p`
  font-size: 1rem;
  color: #aaa;
  /* margin-bottom: 0px; */
  margin-top: 30px;
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
  width: 80%;
  margin: auto
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

const Button = styled.a`
  margin-top: 20px;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  color: #111;
  background-color: white;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fd8e8e;
    color: white;
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
`;

export default function LeftPanel({sectionRefs}) {
  const { currentTheme } = useTheme();
  return (
    <LeftPanelContainer>
      <Circle bgcolor={currentTheme.burgerCircle}>
        <BurgerMenu sectionRefs={sectionRefs}/>
      </Circle>

      <div>
        <Name>
          Hello. I am a PMP Certified Project Manager, a Business Analyst and a
          Harvard Certified Web/Software Developer
        </Name>
        <Title>
          My name is Olufemi Oshin and I understand the entire value chain of
          eliciting requirements, executing projects and creating valuable
          digital products.
        </Title>
      </div>

      <Button href="#contact">Let's Work Together</Button>

      <div>
        <SocialMediaText>Connect with me on social media</SocialMediaText>
        <SocialLinks>
          <a
            href="https://linkedin.com/in/femi-oshin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon
              src="/images/linkedin logo.png"
              alt="LinkedIn"
            />
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
