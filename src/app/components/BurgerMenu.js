"use client";
import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import ThemeDots from "./ThemeDots";
import { useTheme } from "./ThemeContext";

// const BurgerMenuContainer = styled.div`
//   position: fixed;
//   top: 20px;
//   left: 20px;
//   cursor: pointer;
//   z-index: 1001;
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// `;

const Hamburger = styled.img`
  width: 40px; /* Adjust size as needed */
  /* height: auto; */
  /* position: fixed; */
  /* position: absolute; */
  /* top: 10px; */
  z-index: 5000;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    width: 30px; /* Adjust size for mobile */
    /* top: 5px; */
    position: absolute;
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
  cursor: pointer;
  /* align-items: center; */
  display: flex;
  /* align-self: flex-start; */
  z-index: 4999; /* Places it behind the hamburger */

  @media (max-width: 1024px) {
    width: 50px; /* Adjust size for mobile */
    height: 50px;
    top: 45px;
    position: fixed;
    left: 3rem;
  }

  @media (min-width: 1025px) {
    align-self: start;
    margin-left: 30px;
  }
`;

// const MobileMenu = styled.div`
//   position: fixed;
//   top: 0;
//   left: ${({ open }) => (open ? "0" : "-100%")};
//   width: 50%;
//   height: 100vh;
//   background: #111;
//   transition: left 0.3s ease-in-out;
//   padding: 20px;
//   display: flex;
//   flex-direction: column;
//   z-index: 1000;
// `;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  /* background: #111; */
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
  background: rgba(0, 0, 0, 0.5);
`;

const CircleReveal = styled(motion.div)`
  position: fixed;
  top: 10px;
  left: 22px;
  width: 8rem;
  /* margin: 20px; */
  margin-top: 50px;
  height: 35vh;
  border-radius: 5%;
  transform-origin: left center;
  z-index: 999;
  background-color: rgb(241, 241, 241);

  /* Small phones (portrait) */
  @media (max-width: 359px) {
    width: 6rem;
    height: 45vh
  }

  /* Most phones (landscape) */
  @media (min-width: 360px) and (max-width: 767px) {
    height: 40vh;
  }

  /* Tablets */
  @media (min-width: 768px) and (max-width: 1023px) {
  }

  /* Small laptops/desktops */
  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 12rem;
    height: 20rem;
  }

  /* Standard desktops */
  @media (min-width: 1280px) and (max-width: 1439px) {
  }

  /* Large screens */
  @media (min-width: 1440px) {
  }

`;

const ModalContent = styled.div`
  position: absolute;
  top: 25px;
  left: 40px;
  width: 25%;
  height: 60%;
  padding: 40px;
  color: #2e304b;
  z-index: 1005;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  /* border: 1px solid red; */

  

  /* Small phones (portrait) */
  @media (max-width: 359px) {
    gap: 1rem;
    width: 75%;
  }

  /* Most phones (landscape) */
  @media (min-width: 360px) and (max-width: 767px) {
    width: 100%;
    /* height: 70%; */
  }

  /* Tablets */
  @media (min-width: 768px) and (max-width: 1023px) {
  }

  /* Small laptops/desktops */
  @media (min-width: 1024px) and (max-width: 1279px) {
    width: 75%;
    gap: 5rem;
    justify-content: normal;
  }

  /* Standard desktops */
  @media (min-width: 1280px) and (max-width: 1439px) {
  }

  /* Large screens */
  @media (min-width: 1440px) {
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #2e304b;
  font-size: 20px;
  margin: auto;
  cursor: pointer;
`;

const MenuTitle = styled.h2`
  font-size: 20px;
  margin-bottom: 2rem;
  text-align: center;
`;

const MenuItem = styled.div`
  margin-bottom: 1.5rem;
  cursor: pointer;

  h4 {
    margin: 0;
    font-size: 18px;
  }

  p {
    margin: 0;
    font-size: 14px;
    opacity: 0.7;
  }
`;


const AnimatedHamburger = motion.create(Hamburger);

export default function BurgerMenu({ sectionRefs }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentTheme } = useTheme();

  const menuModalRef = useRef(null);

  const handleScrollTo = (section) => {
    if (window.innerWidth <= 1024) {
    setMenuOpen(false);

    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      const scrollContainer = document.getElementById("scrollable-sections");
      const sectionRef = sectionRefs[section];

      // Debugging logs
      console.log("Attempting to scroll to:", section);
      console.log("Scroll container exists:", !!scrollContainer);
      console.log("Section ref exists:", !!sectionRef?.current);
      console.log("Container height:", scrollContainer.clientHeight);
      console.log("Section height:", sectionRef.current.clientHeight);
      console.log("Window height:", window.innerHeight);

      if (sectionRef?.current && scrollContainer) {
        // Calculate position accounting for any container offset
        const containerOffset = scrollContainer.getBoundingClientRect().top;
        const sectionPosition = sectionRef.current.getBoundingClientRect().top;
        const scrollPosition =
          sectionPosition - containerOffset + scrollContainer.scrollTop;

        console.log("Calculated scroll position:", scrollPosition);

        scrollContainer.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      } else {
        console.warn("Scroll elements not found:", {
          scrollContainer,
          sectionRef: sectionRef?.current,
        });
      }
    });
  }else {
    setMenuOpen(false);

    setTimeout(() => {
      // Small delay to ensure menu closes first
      const scrollContainer = document.getElementById("scrollable-sections");
      const sectionElement = sectionRefs[section]?.current;

      if (!scrollContainer || !sectionElement) {
        console.error("Scroll elements not found");
        return;
      }

      // Simple and reliable scroll method
      sectionElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);
  }
  };

  // const handleScrollTo = (section) => {
  //   
  // };

  useEffect(() => {
    // console.log("Menu open state:", menuOpen);
    // console.log("Menu modal ref:", menuModalRef.current);
    // console.log("useEffect triggered");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    const handleClickOutside = (event) => {
      

      const isHamburger = event.target.closest("#hamburger");
      const isInsideModal = menuModalRef.current?.contains(event.target);

      // console.log("Is hamburger?", isHamburger);
      // console.log("Is inside modal?", isInsideModal);

      if (!isHamburger && !isInsideModal) {
        // console.log("closing menu");
        setMenuOpen(false);
      }
    }
    // Add event listener to close modal on outside click

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const handleHamburgerClick = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <Circle
        bgcolor={currentTheme.burgerCircle}
        // onClick={() => {
        //   setMenuOpen((prev) => !prev);
        // }}
        onClick={handleHamburgerClick}
        id="hamburger"
      >
        <AnimatedHamburger
          src="/images/icon-hamburger.png"
          alt="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
      </Circle>

      <AnimatePresence>
        {menuOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            $isVisible={menuOpen}
          >
            <div ref={menuModalRef}>
            <CircleReveal
              initial={{ scale: 0 }}
              animate={{ scale: 3 }}
              exit={{ scale: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
            <ModalContent>
              <div>
                {/* <CloseButton onClick={() => setMenuOpen(false)}>✕</CloseButton> */}
                <MenuTitle>Burger Menu</MenuTitle>
                <MenuItem onClick={() => handleScrollTo("about")}>
                  <h4>About</h4>
                  <p>Delicately tender with a slice of cheese</p>
                </MenuItem>
                <MenuItem onClick={() => handleScrollTo("certifications")}>
                  <h4>Certifications</h4>
                  <p>Recognition from the best institutions</p>
                </MenuItem>
                <MenuItem onClick={() => handleScrollTo("references")}>
                  <h4>References</h4>
                  <p>Hear what our happy customers say</p>
                </MenuItem>
                <MenuItem onClick={() => handleScrollTo("projects")}>
                  <h4>Projects</h4>
                  <p>Served on a bed of frontend tech</p>
                </MenuItem>
                <MenuItem onClick={() => handleScrollTo("contact")}>
                  <h4>Contact</h4>
                  <p>A superb choice to finish the day</p>
                </MenuItem>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: menuOpen ? 1 : 0 }}
                transition={{ delay: 0.45, duration: 3 }} // Delay matches menu animation
              >
                <ThemeDots />
              </motion.div>
            </ModalContent>
            </div>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
}
