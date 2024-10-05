import Layout from "../components/layout/Layout.component";
import Grid from "@mui/material/Grid2";
import { ITEMS } from "../utils/constants";
import CardComponent from "../components/card/Card.component";
import { Box, IconButton, Slider, Stack, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { BaseInput } from "../components/styled";
import React from "react";

function valuetext(value) {
  return `${value}°C`;
}

const ProductsPage = () => {
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Grid container spacing={{ xs: 1, sm: 1.2, md: 1.5 }} columns={12}>
        <Grid item size={{ xs: 12, sm: 12, md: 3 }}>
          <Stack
            display={{ xs: "none", sm: "none", md: "flex" }}
            flexDirection="column"
            gap="20px"
          >
            <Typography variant="h5">Saralash</Typography>
            <Stack direction="column">
              <Typography variant="body1">Narx</Typography>

              <Slider
                getAriaLabel={() => "Temperature range"}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </Stack>
          </Stack>
          <Stack display={{ md: "none" }}>
            <Box>
              <BaseInput placeholder="Mahsulot nomi bilan qidiring" fullWidth />
            </Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="body1">Saralash</Typography>
              <IconButton>
                <FilterListIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 9 }}>
          <Grid container spacing={{ xs: 1, sm: 1.2, md: 1.5 }} columns={12}>
            {ITEMS.map((item) => (
              <Grid item size={{ xs: 6, sm: 4, md: 4, lg: 3 }}>
                <CardComponent />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default ProductsPage;
