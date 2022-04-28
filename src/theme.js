import "normalize.css";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    html,
    body {
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
    }

    #root {
        height: 100%;
        width: 100%;
    }
`;

const theme = {
  palette: {
    primary: {
      fill: "#E0D8B0",
      text: "#000000",
      stroke: "none",
    },
    neutral: {
      fill: "#FCFFE7",
      text: "#000000",
      stroke: "none",
    },
    cta: {
      fill: "#DEA057",
      text: "#ffffff",
      stroke: "none",
    },
  },
  size: {
    base: 8,
    scales: {
      xxs: 0.25,
      xs: 0.5,
      sm: 0.75,
      md: 1,
      lg: 1.5,
      xl: 2,
      xxl: 3,
    },
  },
};

export default theme;
