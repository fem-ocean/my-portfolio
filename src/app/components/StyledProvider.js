"use client";

import { StyleSheetManager } from "styled-components";

export default function StyledProvider({ children }) {
  return (
    <StyleSheetManager shouldForwardProp={() => true}>
      {children}
    </StyleSheetManager>
  );
}
