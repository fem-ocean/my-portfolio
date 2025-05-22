import styled from "styled-components";
import { useTheme } from "./ThemeContext";

const DotContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  gap: 16px;
  margin-top: auto;
  /* border: 2px solid red; */

  /* @media (max-width: 1024px) {
    margin-top: 0;
  } */
`;

const Dot = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  /* background-color: ${(props) => (props.active ? "#fd8e8e" : "#ccc")}; */
  background-color: ${(props) => props.color};
  cursor: pointer;
  opacity: 0.95;
  transition: background-color 0.6s ease;

  /* &:hover {
    background-color: #2e304b;
  } */
`;


const ThemeDots = () => {
    const { theme, changeTheme } = useTheme();

    return (
        <DotContainer>
            <Dot
                color="#fd8e8e"
                // active={theme === "light"}
                onClick={() => changeTheme("light")}
  
            />
            <Dot
                color="#fde58e"
                // active={theme === "dark"}
                onClick={() => changeTheme("dark")}
            />
            <Dot
                color="#8efdb0"
                // active={theme === "system"}
                onClick={() => changeTheme("blue")}
            />
        </DotContainer>
    );
}

export default ThemeDots;