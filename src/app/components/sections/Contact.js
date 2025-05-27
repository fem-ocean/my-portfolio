"use client";
import styled from "styled-components";
import { motion } from "framer-motion";  
import { forwardRef } from "react";

const Section = styled(motion.section)`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #2e304b;
  padding: 50px;
  text-align: center;
  background-color: rgb(241, 241, 241);
  z-index: 7;
`;

const Circle = styled.div`
  width: 60px;
  height: 60px;
  background-color: ${(props) =>
    props.bgcolor || "#fd8e8e"}; /* Default color */
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  display: flex;
  align-self: flex-start;
  z-index: 900;
`;

const Hamburger = styled.img`
  width: 40px;
  height: auto;
  /* top: 10px; */
  /* justify-content: center; */
  /* align-items: center; */
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
  /* border: 1px solid red; */

  &:hover {
    opacity: 0.8;                          
  }
`;

const ClickableRows = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  /* border: 1px solid blue; */
`;

const Contact = forwardRef(({onOptionClick}, ref) =>{

  return (
    <Section
      initial={{ opacity: 0, y: 200 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      id="contact"
      ref={ref}
    >
      <div style={{ marginTop: "50px" }}>
        <h1>Contact Me</h1>
        <br />
        <p>Let's work together!</p>
      </div>

      <ClickableRows>
        <Row
          onClick={() =>
            onOptionClick({
              label: "I'd like to book you in",
              icon: "/images/icon-working.png",
              color: "#fd8e8e",
            })
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Circle>
            <Hamburger src="/images/icon-working.png" alt="menu" />
          </Circle>

          <p>I'd like to book you in</p>
        </Row>

        <Row
          onClick={() =>
            onOptionClick({
              label: "I'd like a quote for a project",
              icon: "/images/icon-money.png",
              color: "#fde58e",
            })
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Circle bgcolor="#fde58e">
            <Hamburger src="/images/icon-money.png" alt="menu" />
          </Circle>
          <p>I'd like a quote for a project</p>
        </Row>

        <Row
          onClick={() =>
            onOptionClick({
              label: "I'd just like to say Hello",
              icon: "/images/icon-wave.png",
              color: "#8efdb0",
            })
          }
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Circle bgcolor="#8efdb0">
            <Hamburger src="/images/icon-wave.png" alt="menu" />
          </Circle>

          <p>I'd just like to say Hello</p>
        </Row>
      </ClickableRows>
    </Section>
  );
})
Contact.displayName = "Contact";

export default Contact;
