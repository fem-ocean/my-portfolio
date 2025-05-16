import { Geist, Geist_Mono } from "next/font/google";
import StyledProvider from "./components/StyledProvider";
import GlobalStyles from "./globalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import { ThemeProvider } from "./components/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <GlobalStyles />
          <StyledProvider>
            <MainBody>{children}</MainBody>
          </StyledProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
