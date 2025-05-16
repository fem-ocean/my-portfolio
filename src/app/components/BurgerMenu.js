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
  cursor: pointer;
  /* position: fixed; */
  /* position: absolute; */
  top: 10px;
  justify-content: center;
  align-items: center;
  z-index: 5000;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
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

  // const handleScrollTo = (id) => {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     el.scrollIntoView({ behavior: "smooth" });
  //     setMenuOpen(false);
  //   }
  // };

  // const handleScrollTo = (id) => {
  //   const section = document.getElementById(id);
  //   const scrollContainer = document.getElementById("scrollable-container"); // e.g., your right panel

  //   if (section && scrollContainer) {
  //     const containerTop = scrollContainer.getBoundingClientRect().top;
  //     const sectionTop = section.getBoundingClientRect().top;
  //     const scrollOffset = sectionTop - containerTop;

  //     scrollContainer.scrollTo({
  //       top: scrollOffset,
  //       behavior: "smooth",
  //     });
  //     console.log("scrollOffset", scrollOffset);

  //     setMenuOpen(false);
  //   }
  // };

  // const handleScrollTo = (id) => {
  //   const section = document.getElementById(id);
  //   const scrollContainer = document.getElementById("scrollable-container");

  //   if (section && scrollContainer) {
  //     const scrollOffset = section.offsetTop;
  //     console.log("scrollOffset", scrollOffset);

  //     scrollContainer.scrollTo({
  //       top: scrollOffset,
  //       behavior: "smooth",
  //     });

  //     setMenuOpen(false);
  //   }
  // };

  // const handleScrollTo = (section) => {
  //   setMenuOpen(false);

  //   setTimeout(() => {
  //     const scrollContainer = document.getElementById("scrollable-container");
  //     const sectionRef = sectionRefs.current[section];

  //     if (sectionRef?.current && scrollContainer) {
  //       const containerRect = scrollContainer.getBoundingClientRect();
  //       const sectionRect = sectionRef.current.getBoundingClientRect();
  //       const scrollPosition = sectionRect.top - containerRect.top + scrollContainer.scrollTop;

  //       console.log(`Scroll to "${section}" -> ScrollPosition:`, scrollPosition);

  //       scrollContainer.scrollTo({
  //         top: scrollPosition,
  //         behavior: "smooth",
  //       });

  //       setMenuOpen(false);
  //     }
  //   }, 100);
  // };

  // const handleScrollTo = (section) => {
  //   setMenuOpen(false);

  //   setTimeout(() => {
  //     const sectionRef = sectionRefs.current[section];
  //     if (sectionRef?.current) {
  //       sectionRef.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "nearest", // Try this instead of "start"
  //       });
  //     }
  //   }, 100);
  // };

  // const handleScrollTo = (id) => {
  //   const scrollContainer = document.getElementById("scrollable-container");
  //   const section = sectionRefs.current[id]?.current;

  //   if (!scrollContainer || !section) return;

  //   const sectionOffsetTop = section.offsetTop;

  //   scrollContainer.scrollTo({
  //     top: sectionOffsetTop,
  //     behavior: "smooth",
  //   });

  //   setMenuOpen(false);
  // };

  // const handleScrollTo = (section) => {
  //   // close the menu immediately
  //   setMenuOpen(false);

  //   // tiny delay to let the overlay animate out
  //   setTimeout(() => {
  //     const sectionRef = sectionRefs.current[section];
  //     if (sectionRef && sectionRef.current) {
  //       sectionRef.current.scrollIntoView({
  //         behavior: "smooth",
  //         block: "start", // align the top of the section with the top of the container
  //       });
  //       console.log(`Scrolled to ${section}`);
  //     }else {
  //       console.warn(`Section ${section} not found`);
  //     }
  //   }, 100);
  // };

  // const handleScrollTo = (section) => {
  //   const sectionRef = sectionRefs.current[section];

  //   if (sectionRef && sectionRef.current) {
  //     sectionRef.current.scrollIntoView({
  //       behavior: "smooth",
  //       block: "start",
  //     });
  //     console.log(`Scrolled to ${section}`);
  //   } else {
  //     console.warn(`Section ${section} not found`);
  //   }
  // };

  // const handleScrollTo = (section) => {
  //   setMenuOpen(false);

  //   setTimeout(() => {
  //     const scrollContainer = document.getElementById("scrollable-container");
  //     const sectionRef = sectionRefs[section];

  //     if (sectionRef?.current && scrollContainer) {
  //       // Get the container's current scroll position
  //       const containerScrollTop = scrollContainer.scrollTop;

  //       // Get the section's offset relative to the container
  //       const sectionOffsetTop = sectionRef.current.offsetTop;

  //       console.log(`Scrolling to "${section}"`);
  //       console.log("Container scrollTop:", containerScrollTop);
  //       console.log("Section offsetTop:", sectionOffsetTop);

  //       scrollContainer.scrollIntoView({
  //         top: sectionOffsetTop,
  //         behavior: "smooth",
  //       });
  //     }
  //   }, 100);
  // };

  const handleScrollTo = (section) => {
    setMenuOpen(false);

    // Use requestAnimationFrame for better timing
    requestAnimationFrame(() => {
      const scrollContainer = document.getElementById("scrollable-container");
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
  };

  return (
    <>
      <Circle bgcolor={currentTheme.burgerCircle}>
        <AnimatedHamburger
          src="/images/icon-hamburger.png"
          alt="menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </Circle>

      {/* <MobileMenu open={menuOpen}> */}
      {/* <CloseButton onClick={() => setMenuOpen(false)}>✕</CloseButton> */}
      {/* Add menu items here  */}
      {/* </MobileMenu> */}

      <AnimatePresence>
        {menuOpen && (
          <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            $isVisible={menuOpen}
          >
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
                <MenuItem onClick={() => handleScrollTo("clients")}>
                  <h4>Clients</h4>
                  <p>Our great selection from the best in town</p>
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
                transition={{ delay: 0.7, duration: 0.3 }} // Delay matches menu animation
              >
                <ThemeDots />
              </motion.div>
            </ModalContent>
          </Overlay>
        )}
      </AnimatePresence>
    </>
  );
}
