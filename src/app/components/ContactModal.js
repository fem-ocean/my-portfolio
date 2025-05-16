"use client";

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef } from "react";

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  z-index: 999;
`;
const ModalContainer = styled(motion.div)`
  background-color: white;
  padding: 1rem;
  border-radius: 16px;
  width: 90%;
  max-width: 600px;
  color: rgb(46, 48, 75);
  /* position: relative; */
  position: fixed;
  top: 10%;
  overflow: hidden;
  height: 95vh;
`;

const ModalContent = styled.div`
  overflow-y: auto;
  padding: 1rem;
  max-height: 70vh;
  /* border: 1px solid red; */
  margin-top: 60px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
`;
const Label = styled.label`
  margin-bottom: 0.5rem;
`;
const Input = styled.input`
  padding: 0.5rem;
  background: #f7f7f7;
  border: none;
  border-radius: 4px;
  color: #2e304b;
  resize: vertical;

  &:focus {
    border: 1px solid rgb(142, 231, 253);
    outline: none;
  }
`;
const Textarea = styled.textarea`
  padding: 0.75rem;
  background: #f7f7f7;
  /* border: 1px solid #444; */
  color: #2e304b;
  resize: vertical;
  border: none;
  border-radius: 4px;

  &:focus {
    border: 1px solid rgb(142, 231, 253);
    outline: none;
  }
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Button = styled.button`
  margin-top: 40px;
  padding: 10px 20px;
  font-size: 14px;
  /* font-weight: bold; */
  color: #fd8e8e;
  background-color: white;
  border: #fd8e8e 1px solid;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #fd8e8e;
    color: white;
  }
`;


const CloseButton = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10%;
  top: 15px;
  cursor: pointer;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0.2px solid #2e304b;
  border-radius: 5px;
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
  top: 10px;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: opacity 0.3s ease-in-out;
`;

const Option = styled.option`
  border: none;

  &:focus {
    outline: none;
  }
`;

const Select = styled.select`
  border: none;

  &:focus {
    outline: none;
  }
`;

export default function ContactModal({ isOpen, onClose, selectedOption }) {
  const modalRef = useRef(null);


  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    // Add event listener to close modal on outside click

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }


    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose, isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <ModalOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <ModalContainer
            onClick={(e) => e.stopPropagation()}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            ref={modalRef}
          >
            <ModalContent>
              <CloseButton onClick={onClose}>X</CloseButton>

              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "20px",
                  marginTop: "1.5rem",
                }}
              >
                <Circle bgcolor={selectedOption.color}>
                  <Hamburger src={selectedOption.icon} alt="icon" />
                </Circle>
                <h3 style={{ marginBottom: "1.5rem", marginTop: "1.5rem" }}>
                  {selectedOption.label}
                </h3>
              </div>
              <form>
                <FormGroup>
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Alex Jones"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="hello@example.com"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" type="text" placeholder="Google Inc" />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="budget">Budget</Label>
                  <Input id="budget" type="text" placeholder="$2000" />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input id="start-date" type="date" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="end-date">End Date</Label>
                  <Input
                    id="end-date"
                    type="date"
                    style={{ color: "#2e304b" }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="I heard you are the best in this field..."
                    rows="4"
                    required
                  ></Textarea>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="source">How did you find me?</Label>
                  <Select
                    id="source"
                    style={{
                      padding: "0.5rem",
                      borderRadius: "4px",
                      background: "#f7f7f7",
                      color: "#2e304b",
                    }}
                  >
                    <Option value="">Select an option</Option>
                    <Option value="google">Through a search engine</Option>
                    <Option value="social-media">Through Social Media</Option>
                    <Option value="friend">Someone recommended you</Option>
                    <Option value="worked-together">
                      We have worked together before
                    </Option>
                    <Option value="other">Other</Option>
                  </Select>
                </FormGroup>

                <CheckboxWrapper>
                  <Input type="checkbox" id="agreement" required />
                  <Label htmlFor="agreement">
                    I agree to be a nice and kind person😊
                  </Label>
                </CheckboxWrapper>

                <Button type="submit">Send Message</Button>
              </form>
            </ModalContent>
          </ModalContainer>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );
}
