"use client";

import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

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
  height: 85vh;
`;

const ModalContent = styled.div`
  overflow-y: scroll;
  padding: 1rem;
  max-height: 70vh;
  /* border: 1px solid red; */
  margin-top: 20px;
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
  font-weight: bold;
  color: #fd8e8e;
  background-color: white;
  border: #fd8e8e 3px solid;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: #fd8e8e;
    color: white;
  }

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.98);
  }
`;


const CloseButton = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  right: 10%;
  top: 50px;
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
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);

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

  // ✅ Reset success when modal is closed
  useEffect(() => {
    if (!isOpen) {
      setSuccess(false);
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically send the form data to your server or email service
    emailjs
      .sendForm(
        "service_a4s7pvp", // <-- replace with actual ID
        "template_hpcczdl", // <-- replace with actual ID
        formRef.current,
        "DM2EDS_1C6qJOck3q" // <-- replace with actual key
      )
      .then(
        () => {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false); // hide message after a while
          }, 10000);
          formRef.current.reset();
        },
        (error) => {
          console.error("EmailJS error:", error);
          setSuccess(false);
        }
      );

  };

  
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
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                marginTop: "0.5rem",
              }}
            >
              <Circle bgcolor={selectedOption.color}>
                <Hamburger src={selectedOption.icon} alt="icon" />
              </Circle>

              <h3 style={{ marginBottom: "1.5rem", marginTop: "1.5rem" }}>
                {selectedOption.label}
              </h3>
            </div>
            {success && (
              <p style={{ marginTop: "0.5rem", margin: "auto", color: "green" }}>
                Message sent successfully! 🎉
              </p>
            )}
            <ModalContent>
              <CloseButton onClick={onClose}>X</CloseButton>

              <form ref={formRef} onSubmit={handleSubmit}>
                <FormGroup>
                  <Input
                    name="selectedOption"
                    type="hidden"
                    value={selectedOption.label}
                  />
                  <Label htmlFor="name">Name</Label>
                  <Input
                    name="name"
                    type="text"
                    placeholder="Alex Jones"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="hello@example.com"
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="company">Company</Label>
                  <Input name="company" type="text" placeholder="Google Inc" />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="budget">Budget</Label>
                  <Input name="budget" type="text" placeholder="$2000" />
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input name="start-date" type="date" />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="end-date">End Date</Label>
                  <Input
                    name="end-date"
                    type="date"
                    style={{ color: "#2e304b" }}
                  />
                </FormGroup>
                <FormGroup>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    name="message"
                    placeholder="I heard you are the best in this field..."
                    rows="4"
                    required
                  ></Textarea>
                </FormGroup>

                <FormGroup>
                  <Label htmlFor="source">How did you find me?</Label>
                  <Select
                    name="source"
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
