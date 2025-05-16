// src/app/components/Header.js
"use client";

import styled from "styled-components";
import Link from "next/link";

const Nav = styled.nav`
  width: 100%;
  padding: 1.5rem 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;

  li {
    cursor: pointer;
    font-size: 1rem;
    transition: opacity 0.3s ease-in-out;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default function Header() {
  return (
    <Nav>
      <Logo>OlufemiOshin</Logo>
      <NavLinks>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="#projects">Projects</Link>
        </li>
        <li>
          <Link href="#about">About</Link>
        </li>
        <li>
          <Link href="#contact">Contact</Link>
        </li>
      </NavLinks>
    </Nav>
  );
}
