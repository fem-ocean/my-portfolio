"use client";
import {useRef} from "react";
import styled from "styled-components";
import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  flex-direction: row;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: auto;
    width: 100vw;
  }
`;

export default function MainBody({ children }) {
//initialize refs for each section
const sectionRefs = {
  about: useRef(null),
  projects: useRef(null),
  references: useRef(null),
  contact: useRef(null),
}

  return (
    <Container>
      <LeftPanel sectionRefs={sectionRefs} />
      <RightPanel sectionRefs={sectionRefs}>{children}</RightPanel>
    </Container>
  );
}
