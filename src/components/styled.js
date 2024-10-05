import { alpha, InputBase, styled, Typography } from "@mui/material";

export const BaseInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#F3F6F9",
    border: "1px solid",
    borderColor: "#E0E3E7",
    fontSize: 16,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
      borderColor: "#2D3843",
    }),
  },
}));

export const CustomLabelInput = styled(Typography)(() => ({
  color: "rgba(0, 0, 0, 0.6)",
  fontFamily: " 'Roboto', 'Helvetica', 'Arial', sans-serif",
  fontWeight: 400,
  fontSize: "1rem",
  lineHeight: "1.4375em",
  letterSpacing: "0.00938em",
  padding: 0,
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%",
  textAlign: "start",
  "-webkit-transform": "translate(0, 20px) scale(1)",
  "-moz-transform": "translate(0, 20px) scale(1)",
  "-ms-transform": "translate(0, 20px) scale(1)",
  transform: "translate(0, 20px) scale(1)",
  "-webkit-transform": "translate(0, -1.5px) scale(0.75)",
  "-moz-transform": "translate(0, -1.5px) scale(0.75)",
  "-ms-transform": "translate(0, -1.5px) scale(0.75)",
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%",
  "-webkit-transition":
    "color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, -webkit-transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
  transition:
    "color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms, max-width 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms",
}));
