import { tosh as light } from "@theme-ui/presets"
import { merge } from "theme-ui"

import "@fontsource/staatliches/400.css"
import "@piducancore/fonts-andale-mono"

const theme = merge(light, {
  config: {
    initialColorModeName: "light",
    useColorSchemeMediaQuery: false,
    useRootStyles: true,
  },
  colors: {
    abc: "#e31b25",
    secondary: "#b80611",
    ghi: "#d0384b",
    jkl: "#fa525a",
    mno: "#ea7d85",
    text: "#0d0106",
    gray: "#393939",
    // background: "#f6f4f5",

    modes: {
      dark: {
        text: "#f6f4f5",
        background: "#0d0106",
      },
    },
  },
  sizes: {
    container: 1366,
  },
  layout: {
    root: {
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
    },
    container: {
      width: "100%",
      maxWidth: "container",
      mx: "auto",
      px: 3,
    },
    header: {
      width: "100%",
      py: 2,
      zIndex: 100,
      position: "sticky",
      top: 0,
      // boxShadow: "0 0 8px rgba(0, 0, 0, 0.125)",
    },
    main: {
      width: "100%",
      flex: "1 1 auto",
      pb: 6,
    },
    footer: {
      width: "100%",
      bg: "gray",
      color: "background",
      py: 3,
    },
  },
  fonts: {
    body: "Andale Mono",
    heading: "Staatliches",
  },
  fontSizes: [10, 12, 14, 18, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 400,
    bold: 700,
  },
  grids: {
    primary: {
      gap: 4,
    },
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
      border: theme => `1px solid ${theme.colors.secondary}`,
      borderRadius: 360,
      cursor: "pointer",
      bg: "secondary",
      color: "background",
      transition: ".4s",
      letterSpacing: 4,
      px: 4,
      "&:hover": {
        bg: "background",
        color: "secondary",
      },
    },
  },
  forms: {
    primary: {
      p: 3,
      mb: 6,
      maxWidth: [null, "80%"],
    },
    label: {
      fontSize: 1,
      display: "block",
      textAlign: "center",
      letterSpacing: 4,
      mb: 1,
    },
    input: {
      fontFamily: "monospace",
      bg: "muted",
      border: "none",
      mb: 3,
      "&:focus": {
        borderColor: "primary",
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: "none",
      },
    },
    textarea: {
      fontFamily: "monospace",
      bg: "muted",
      border: "none",
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
      "*": {
        transition: ".4s",
        // userSelect: "none",
      },

      "*:focus": {
        outline: "none",
      },

      "*::selection": {
        bg: "secondary",
        color: "background",
      },
      ".slick-track": { display: "flex", height: "100%" },
      ".slick-slide": { my: "auto" },
      body: {
        m: 0,
      },
      overflowY: "scroll",

      // scrollbarWidth: "thin" /* "auto" or "thin" */,
      // scrollbarColor: theme => `${theme.colors.primary} #ffffff00`,
      // "*::-webkit-scrollbar": {
      //   width: "8px",
      //   height: "8px",
      // },
      // "*::-webkit-scrollbar-track": {
      //   bg: "#00000000",
      // },
      // "*::-webkit-scrollbar-thumb": {
      //   bg: "primary",
      // },
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
    h3: {
      letterSpacing: 4,
    },
    img: {
      width: "100%",
    },
  },
})

console.log(theme)

export default theme
