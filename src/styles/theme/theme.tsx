import { createTheme } from "@mui/material/styles";

export const dark = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#3f50b5",
      contrastText: "#fff",
    },
    secondary: {
      main: "#d3f07d",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: {
      textTransform: "none",
    },
  },
});

export const light = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4caf50",
      contrastText: "#3e3e3e",
    },
    secondary: {
      main: "#d3f07d",
    },
  },
  typography: {
    fontFamily: [
      "Poppins",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    button: {
      textTransform: "none",
    },
  },
});
