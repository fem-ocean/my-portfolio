"use client";
import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";
import MobileContentContainer from "./MobileContentContainer";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    /* height: auto; */
    /* width: 100vw; */

    display: block;
    width: 100%;
    position: relative;
    height: 100vh;
    /* min-height: 100vh; */
    scroll-snap-type: y mandatory;
    overflow-y: auto;
  }
`;

export default function MainBody({ children }) {
  //initialize refs for each section
  const sectionRefs = {
    about: useRef(null),
    projects: useRef(null),
    references: useRef(null),
    contact: useRef(null),
  };

  const mobileContainerRef = useRef();
  const [isMobile, setIsMobile] = useState(false);

 

  //logic to check if the screen is mobile and if so, move the scrollable sections to the left panel
  useEffect(() => {
    const checkMobile = () => {
      const breakPoint = 1024;
      const isMobileScreen = window.innerWidth <= breakPoint;
      setIsMobile(isMobileScreen)
    }

    //check if the screen is mobile
    checkMobile();

    //set up a resize listener
    const handleResize = () => {
      checkMobile();
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }


  }, []);

  // console.log("isMobile", isMobile);
  

  return (
    <Container id="scrollable-sections">
      {/* Conditional rendering based on state */}
      {isMobile ? (
        <>
          <LeftPanel sectionRefs={sectionRefs} />
          {/* {console.log("rendering mobile container")} */}
          <MobileContentContainer
            ref={mobileContainerRef}
            sectionRefs={sectionRefs}
          />
        </>
      ) : (
        <>
          <LeftPanel sectionRefs={sectionRefs} />

          {/* {console.log("rendering right panel")} */}
          <RightPanel sectionRefs={sectionRefs}>{children}</RightPanel>
        </>
      )}
    </Container>
  );
}
