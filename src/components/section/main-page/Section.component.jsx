import { Button, Stack, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Card from "../../card/Card.component";
import { useNavigate } from "react-router-dom";
import { ITEMS } from "../../../utils/constants";

const Section = ({ title = "Section title", cards = [] }) => {
  const navigate = useNavigate();
  return (
    <Stack direction="column" gap="20px">
      <StyledSectionTitle>{title}</StyledSectionTitle>
      <Grid container spacing={{ xs: 1, sm: 1.2, md: 1.5 }}>
        {ITEMS.map((item) => (
          <Grid item size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <Card />
          </Grid>
        ))}
      </Grid>
      <Stack justifyContent="center" alignItems="center">
        <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: "32px" }}
          onClick={() => navigate("/products")}
        >
          Barchasini ko'rish
        </Button>
      </Stack>
    </Stack>
  );
};

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: "2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.6rem",
  },
}));

export default Section;
