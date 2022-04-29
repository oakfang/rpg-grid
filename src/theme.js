import "normalize.css";
import produce from "immer";
import { createGlobalStyle } from "styled-components";
import { useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";
import { palette } from "ui/common";

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: sans-serif;
    }
    h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }

    :root {
      --overlay: ${({ theme }) => theme.modal.overlay};
      ${palette("neutral")}
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

const lightTheme = {
  palette: {
    primary: {
      fill: "#E0D8B0",
      text: "#74500f",
      stroke: "1px solid currentColor",
    },
    neutral: {
      fill: "#FCFFE7",
      text: "#000000",
      stroke: "1px solid currentColor",
    },
    cta: {
      fill: "#DEA057",
      text: "#ffffff",
      stroke: "1px solid currentColor",
    },
  },
  modal: {
    overlay: "rgba(255, 255, 255, 0.5)",
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

const darkTheme = produce(lightTheme, (theme) => {
  theme.palette.primary.fill = "#270082";
  theme.palette.primary.text = "#ffffff";
  theme.palette.neutral.fill = "#1A1A40";
  theme.palette.neutral.text = "#ffffff";
  theme.palette.cta.fill = "#7A0BC0";
  theme.palette.cta.text = "#ffffff";
  theme.modal.overlay = "rgba(0, 0, 0, 0.5)";
});

export function AppTheme({ children }) {
  const prefersLightMedia = useMemo(() => {
    return window.matchMedia("(prefers-color-scheme: light)");
  }, []);
  const [theme, setTheme] = useState(
    prefersLightMedia.matches ? lightTheme : darkTheme
  );
  useEffect(() => {
    const onMatchChange = () => {
      setTheme(prefersLightMedia.matches ? lightTheme : darkTheme);
    };

    prefersLightMedia.addEventListener("change", onMatchChange);

    return () => {
      prefersLightMedia.removeEventListener("change", onMatchChange);
    };
  }, [prefersLightMedia]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
