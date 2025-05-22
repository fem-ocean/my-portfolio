import About from "./sections/About";
import Projects from "./sections/Projects";
import Testimonials from "./sections/Testimonials";
import ContactSectionWrapper from "./sections/ContactSectionWrapper";
import styled from "styled-components";
import { useTheme } from "./ThemeContext";

const StyledMobileContainer = styled.div`
  display: none;

  @media (max-width: 1024px) {
   
  }
`;

const BackgroundLayer = styled.div`
  width: 100%;
  /* right: auto; */
  position: sticky;
  top: 0;
  scroll-snap-align: start;
  background: url("/images/mypicsedited2.jpg") no-repeat center center/cover;
  height: 100vh;
`;

const Overlay = styled.div`
  width: 100%;
  right: auto;
  position: absolute;
  height: 100vh;
  top: 0;
  background-color: ${(props) => props.bgcolor};
`;

const SectionWrapper = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  position: relative;


  /* Small phones (portrait) */
  @media (max-width: 359px) {
    font-size: small;
  }

  /* Most phones (landscape) */
  @media (min-width: 360px) and (max-width: 767px) {
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

const MobileContentContainer = ({ sectionRefs }) => {
    const {currentTheme} = useTheme();
  return (
    <>
    
      <BackgroundLayer>
        <Overlay bgcolor={currentTheme.heroOverlay} />
      </BackgroundLayer>

      <SectionWrapper ref={sectionRefs.about} id="about">
        <About />
      </SectionWrapper>

      <SectionWrapper ref={sectionRefs.references} id="references">
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper ref={sectionRefs.projects} id="projects">
        <Projects />
      </SectionWrapper>

      <SectionWrapper ref={sectionRefs.contact} id="contact">
        <ContactSectionWrapper />
      </SectionWrapper>
    
    </>
  );
};

export default MobileContentContainer;
