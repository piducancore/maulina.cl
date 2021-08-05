import "@fontsource/staatliches/400.css"
import "@piducancore/fonts-andale-mono"

const theme = {
  config: {
    useCustomProperties: true,
    initialColorMode: "light",
    initialColorModeName: "light",
    useColorSchemeMediaQuery: false,
    useRootStyles: true,
  },
  // breakpoints: ["40em", "52em", "64em"],
  colors: {
    text: "#0d0106",
    background: "#fff",
    primary: "#000",
    secondary: "#b80611",
    muted: "#e0e0e0",
    highlight: "#9f9f9f",
    gray: "#393939",
    accent: "#3f3f3f",
    modes: {
      dark: {
        text: "#f6f4f5",
        background: "#0d0106",
        primary: "#d2d2d2",
        secondary: "#b2b2b2",
        muted: "#191919",
        highlight: "#3c3c3c",
        gray: "#999",
        accent: "#e0e0e0",
      },
    },
    abc: "#e31b25",
    ghi: "#d0384b",
    jkl: "#fa525a",
    mno: "#ea7d85",
  },
  fonts: {
    body: "Andale Mono",
    heading: "Staatliches",
    monospace: "Silom, monospace",
  },
  fontSizes: [14, 18, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 400,
    display: 900,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  textStyles: {
    heading: {
      fontFamily: "heading",
      fontWeight: "heading",
      lineHeight: "heading",
      letterSpacing: 5,
    },
    display: {
      variant: "textStyles.heading",
      fontSize: [5, 6],
      fontWeight: "heading",
      letterSpacing: 5,
      mt: 3,
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      "*:not(.headroom)": {
        transition: ".2s",
      },
      ".bio": {
        p: {
          fontSize: 0,
        },
      },
      ".headroom": { zIndex: "100 !important" },
      "*:focus": {
        outline: "none",
      },
      "*::selection": {
        bg: "secondary",
        color: "background",
      },
      ".slick-track": {
        display: "flex",
        height: "100%",
      },
      ".slick-slide": {
        my: "auto",
      },
      body: {
        m: 0,
      },
      overflowY: "scroll",
    },
    h1: {
      variant: "textStyles.display",
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    h2: {
      variant: "textStyles.heading",
      fontSize: 5,
    },
    h3: {
      variant: "textStyles.heading",
      fontSize: 4,
    },
    h4: {
      variant: "textStyles.heading",
      fontSize: 3,
    },
    h5: {
      variant: "textStyles.heading",
      fontSize: 2,
    },
    h6: {
      variant: "textStyles.heading",
      fontSize: 1,
    },
    p: {
      fontSize: [0, 1],
    },
    a: {
      color: "primary",
      "&:hover": {
        color: "secondary",
      },
      textDecoration: "none",
      fontWeight: "bold",
      cursor: "pointer",
    },
    pre: {
      fontFamily: "monospace",
      fontSize: 1,
      p: 3,
      color: "text",
      bg: "muted",
      borderColor: "text",
      borderStyle: "solid",
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 8,
      borderBottomWidth: 8,
      overflow: "auto",
      code: {
        color: "inherit",
      },
    },
    code: {
      fontFamily: "monospace",
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: "monospace",
      color: "secondary",
      bg: "muted",
      px: 2,
    },
    ul: {
      listStyleType: "square",
    },
    table: {
      width: "100%",
      my: 4,
      borderCollapse: "separate",
      borderSpacing: 0,
      "th,td": {
        textAlign: "left",
        py: "4px",
        pr: "4px",
        pl: 0,
        borderColor: "text",
        borderBottomStyle: "solid",
      },
    },
    th: {
      backgroundColor: "muted",
      verticalAlign: "bottom",
      borderBottomWidth: 8,
    },
    td: {
      verticalAlign: "top",
      borderBottomWidth: 4,
    },
    hr: {
      border: 0,
      borderBottom: "8px solid",
      borderColor: "text",
    },
    img: {
      width: "100%",
    },
  },
  sizes: {
    container: 1920,
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
      px: 2,
      text: { px: 0, maxWidth: 960 },
    },
    header: {
      width: "100%",
      py: 2,
      bg: "background",
      // zIndex: 100,
      // position: "sticky",
      // top: 0,
    },
    main: {
      width: "100%",
      minHeight: "calc(100vh - 88px)",
      flex: "1 1 auto",
      pb: 6,
      // cover: {
      //   flexGrow: 99999,
      //   flexBasis: 0,
      //   minWidth: 320,
      // },
    },
    footer: {
      width: "100%",
      bg: "gray",
      color: "background",
      py: 3,
      zIndex: 102,
    },
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
      letterSpacing: 4,
      px: 4,
      "&:hover": {
        bg: "background",
        color: "secondary",
      },
    },
    secondary: {
      border: theme => `1px solid ${theme.colors.text}`,
      borderRadius: 360,
      cursor: "pointer",
      letterSpacing: 4,
      "&:hover": {
        border: theme => `1px solid ${theme.colors.secondary}`,
        bg: "secondary",
        color: "background",
      },
    },
  },
  forms: {
    primary: { py: 3 },
    label: {
      // fontSize: 1,
      display: "block",
      textAlign: "center",
      letterSpacing: 4,
      mb: 1,
    },
    input: {
      fontFamily: "monospace",
      bg: "muted",
      borderColor: "background",
      mb: 3,
      "&:focus": {
        borderColor: "secondary",
        outline: "none",
      },
    },
    textarea: {
      resize: "none",
      fontFamily: "monospace",
      bg: "muted",
      borderColor: "background",
      mb: 3,
      "&:focus": {
        borderColor: "secondary",
        outline: "none",
      },
    },
  },
  links: {
    nav: {
      fontSize: [null, 0],
      variant: "styles.a",
      fontWeight: "body",
    },
  },
}

export default theme
