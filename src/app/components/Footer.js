// src/app/components/Footer.js
"use client";

import styled from "styled-components";

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <FooterWrapper>© {new Date().getFullYear()} Oshin Olufemi</FooterWrapper>
  );
}
