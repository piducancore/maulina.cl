import { tosh as light } from "@theme-ui/presets"
import { merge } from "theme-ui"

import "@fontsource/staatliches/400.css"
import "@piducancore/fonts-andale-mono"

const theme = merge(light, {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  useRootStyles: true,
  useBodyStyles: false,
  colors: {
    abc: "#e31b25",
    def: "#b80611",
    ghi: "#d0384b",
    jkl: "#fa525a",
    mno: "#ea7d85",
    text: "#0d0106",
    background: "#f6f4f5",

    modes: {
      dark: {
        text: "#f6f4f5",
        background: "#0d0106",
      },
    },
  },
  sizes: {
    container: 1280,
  },
  layout: {
    header: {
      py: 2,
      position: "sticky",
      top: 0,
      bg: "background",
      zIndex: 100,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
    },
    footer: {
      bg: "background",
    },
  },
  fonts: {
    body: "Andale Mono",
    heading: "Staatliches",
  },
  fontSizes: [16, 18, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  grids: {
    primary: {
      gap: 4,
    },
    // "cart-item": {
    //   bg: "red",
    //   gap: 0,
    // },
  },
  text: {
    truncate: {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
      my: 0,
    },
  },
  buttons: {
    primary: {
      border: theme => `1px solid ${theme.colors.primary}`,
      borderRadius: 0,
      cursor: "pointer",
      bg: "primary",
      color: "background",
      "&:hover": {
        bg: "background",
        color: "primary",
      },
    },
    picker: {
      background: "none",
      color: "text",
      borderRadius: 360,
      cursor: "pointer",
      "&:hover": {
        bg: "#eee",
        color: "background",
      },
    },
  },
  forms: {
    primary: {
      // bg: "red",
      // p: 3,
      // maxWidth: ["100%", 640],
      // mx: "auto",
    },
    label: {
      fontSize: 2,
      fontWeight: "bold",
    },
    input: {
      fontFamily: "monospace",
      borderColor: "gray",
      mb: 3,
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      fontFamily: "monospace",
      borderColor: "gray",
      mb: 3,
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
  },
  links: {
    nav: {
      display: ["none", "inherit"],

      // my: 4,
      // mx: 3,
      // fontWeight: "body",
    },
  },
  cards: {
    primary: {
      padding: 0,
      borderRadius: 0,
      boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
      mb: 3,
    },
  },
  styles: {
    root: {
      ".Toastify__toast-container": { p: 0 },
      ".Toastify__toast-body": { p: 0 },
      ".Toastify__toast--default": { p: 0 },
      ".slick-track": { display: "flex", height: "100%" },
      ".slick-slide": { my: "auto" },
      body: {
        margin: "0px",
      },
      overflowY: "scroll",
      scrollbarWidth: "thin" /* "auto" or "thin" */,
      scrollbarColor: theme => `${theme.colors.primary} #ffffff00`,
      "*::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },
      "*::-webkit-scrollbar-track": {
        bg: "#00000000",
      },
      "*::-webkit-scrollbar-thumb": {
        bg: "primary",
      },
      "*:focus": {
        outline: "none",
      },
      "*::selection": {
        backgroundColor: "secondary",
        color: "text",
      },
      "*": {
        scrollbarWidth: "thin" /* "auto" or "thin" */,
        scrollbarColor: theme =>
          `${theme.colors.primary} #ffffff00` /* scroll thumb and track */,
      },
    },
    a: {
      color: "primary",
      textDecoration: "none",
      fontWeight: "bold",
      "&:hover": {
        color: "secondary",
      },
      cursor: "pointer",
    },
  },
})

console.log(theme)

export default theme
