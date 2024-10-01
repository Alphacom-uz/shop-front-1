import { Box, Container } from "@mui/material";
import Header from "../header/Header.component";
import Footer from "../footer/Footer.component";

const Layout = (props) => {
  return (
    <>
      <Header />
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          py: "20px",
        }}
      >
        {props.children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
