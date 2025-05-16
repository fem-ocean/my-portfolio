"use client";
import { useState, forwardRef } from "react";
import Contact from "./Contact";
import ContactModal from "../ContactModal";
// import {motion} from "framer-motion";
import styled from "styled-components";

const SectionContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: visible; //must be visible for sticky to work
`;

const StickyContent = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 1;
  border: 3px solid lime;
  background: rgba(0, 255, 0, 0.5) !important;
`;

const SectionWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 20px; */
  scroll-snap-align: start;
  /* top: 0px; */
  border: 2px dashed blue;
`;
const ContactSectionWrapper = forwardRef(function ContactSectionWrapper(
  props,
  ref
) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    label: "",
    icon: "",
    color: "",
  });

  const handleOptionClick = (optionData) => {
    setSelectedOption(optionData);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOption("");
  };

  return (
    <div ref={ref} id={props.id}> 
      <SectionContainer>
        <StickyContent>
          <Contact onOptionClick={handleOptionClick} />
          <ContactModal 
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            selectedOption={selectedOption}
          />
        </StickyContent>
      </SectionContainer>
    </div>
  );
});

export default ContactSectionWrapper;
