import styled from "styled-components";
import { motion } from "framer-motion";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Testimonials from "./sections/Testimonials";
import Certification from "./sections/Certification";
import ContactSectionWrapper from "./sections/ContactSectionWrapper";
import { useRef, useEffect } from "react";
import { useTheme } from "./ThemeContext";

// const RightPanelContainer = styled.div`
//   width: 50%;
//   height: 100vh;
//   position: relative;
//   /* top: 0; */
//   /* right: 0; */
//   background-color: #222;
//   overflow: hidden; /* Hide scrollbar and prevent double scrolling */
//   z-index: 3;

//   @media (max-width: 1024px) {
//     width: 100%;
//     left: 0;
//   }
// `;

const RightPanelContainer = styled.div`
  width: 50%;
  height: 100vh;
  position: absolute;  
  /* position: fixed; */
  right: 0;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  /* border: 4px solid green; */
  z-index: 3;
  /* overflow-y: auto; */

  /* scroll-snap-type: y mandatory; */
  /* border-left: 2px solid blue; */
  /* position: relative; */
  // z-index: 10;
  /* scroll-snap-type: y mandatory; */

  @media (max-width: 1024px) {
    width: 100%;
    /* left: 0; */
    position: relative
  }
`;

// const SectionsContainer = styled.div`
//   position: relative;
//   z-index: 10;
//   scroll-snap-type: y mandatory;
// `;'

const ScrollableContent = styled.div`
  width: 100%;
  height: 100%;
  /* overflow-y: visible; // Must NOT be hidden */
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  /* border: 2px solid red; */
  position: relative;  
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  @media (max-width: 1024px) {
    /* scroll-snap-type: none; */
    /* overflow: visible; */
    /* height: auto; */

  }
`;

const SectionContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: visible; // Must NOT be hidden
`;

const StickyContainer = styled.div`
  height: 100vh; // Critical for sticky to work
  width: 100%;
  position: relative;
  overflow: visible; // Must NOT be hidden
`;

const StickyContent = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 3;
  /* background-color: rgba(0, 255, 0, 0.9) !important; */
  /* border: 5px solid rgba(0, 255, 0, 0.9) !important; */


`;  

const SectionWrapper = styled.div`
  height: 100vh;
  width: 100%;
  scroll-snap-align: start;
  position: relative; //essential for ref positioning
  /* border: 2px dashed red; */
  /* position: sticky; */
  /* top: 0; */
  overflow: visible;

  @media (max-width: 1024px) {
    height: auto;
    scroll-snap-align: none;
  }
`;

const EmptyDiv = styled.div`
  height: 100vh;
  width: 100%;
  background-color: transparent;
  scroll-snap-align: start;
  /* position: relative; */
  /* border: 3px solid red; */

  // const SectionWrapper = styled.div

  @media (max-width: 1024px) {
    display: none;
  }
`;
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   scroll-snap-align: start;
//   top: 0px;
//   scroll-snap-type: y mandatory;
//   border: 2px dashed red;
/* scroll-snap-align: start; On children */

// const BackgroundWrapper = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100vh;
//   z-index: -1;
//   /* border: 10px solid green; */
// `;

const BackgroundWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  width: 50%;
  height: 100vh;
  z-index: -1;

  @media (max-width: 1024px) {
    width: 100%;
    left: 0;
  }
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("/images/mypicsedited2.jpg") no-repeat center center/cover;
`;

const BackgroundLayer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  z-index: 1;
  background: url("/images/mypicsedited2.jpg") no-repeat center center/cover;

  @media (max-width: 1024px) {
    width: 100%;
    /* right: auto; */
    position: relative;
    scroll-snap-align: start;
  }
`;

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(253, 142, 142, 0.3);
// `;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100vh;
  background-color: ${(props) => props.bgcolor};
  /* background: rgba(253, 142, 142, 0.3); */
  z-index: 2;

  @media (max-width: 1024px) {
    width: 100%;
    right: auto;
    position: relative;
  }
`;

// const Overlay = styled.div`
//   /* position: relative; */
//   /* top: 0; */
//   /* left: 50%; */
//   /* width: 50%; */
//   height: 100vh;
//   width: 100%;
//   background: rgba(253, 142, 142, 0.3);
//   z-index: 5;
// `;

// const EmptyDiv = styled.div`
//   height: 100vh;
//   width: 100%;
//   background-color: transparent;
//   scroll-snap-align: start;
//   border: 3px solid red;
// `;

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  z-index: 10;
`;

// [ref] {
//   border: 2px solid cyan !important;
// }

export default function RightPanel({ sectionRefs }) {
  const { currentTheme } = useTheme();

  

  return (
    <>
      {/* Fixed background outside of the scroll container */}

      <BackgroundLayer>
        <Overlay bgcolor={currentTheme.heroOverlay} />
      </BackgroundLayer>

      <RightPanelContainer id="right-panel">
        {/* Scrollable content container */}
        <ScrollableContent id="scrollable-sections">
          <EmptyDiv />

          <SectionWrapper ref={sectionRefs.about} id="about">
            <SectionContainer>
              <StickyContent>
                <About />
              </StickyContent>
            </SectionContainer>
          </SectionWrapper>

          <SectionWrapper ref={sectionRefs.certifications} id="certifications">
            <SectionContainer>
              <StickyContent>
                <Certification />
              </StickyContent>
            </SectionContainer>
          </SectionWrapper>

          <SectionWrapper ref={sectionRefs.references} id="references">
            <SectionContainer>
              <StickyContent>
                <Testimonials />
              </StickyContent>
            </SectionContainer>
          </SectionWrapper>

          <SectionWrapper ref={sectionRefs.projects} id="projects">
            <SectionContainer>
              <StickyContent>
                <Projects />
              </StickyContent>
            </SectionContainer>
          </SectionWrapper>

          <SectionWrapper>
            <ContactSectionWrapper ref={sectionRefs.contact} id="contact" />
          </SectionWrapper>
        </ScrollableContent>
      </RightPanelContainer>
    </>
  );
}
