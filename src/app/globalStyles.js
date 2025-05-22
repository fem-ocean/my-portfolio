"use client"
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #121212;
    color: white;
    overflow-y: visible;
    overflow-x: hidden;
    height: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  html, #__next {
  height: 100%;
}

`;



export default GlobalStyles;
