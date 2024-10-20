import Layout from "../components/layout/Layout.component";
import Grid from "@mui/material/Grid2";
import { ITEMS } from "../utils/constants";
import CardComponent from "../components/card/Card.component";
import {
  Box,
  IconButton,
  Slider,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import { BaseInput } from "../components/styled";
import React from "react";

function valuetext(value) {
  return `${value}°C`;
}

const ProductsPage = () => {
  const [value, setValue] = React.useState([20, 37]);
  const theme = useTheme();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Layout>
      <Grid container spacing={{ xs: 1, sm: 1.2, md: 1.5 }} columns={12}>
        <Grid item size={12}>
          <Stack flexDirection="row" gap="20px" overflow="auto" width="100%">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((c) => {
              return (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    p: 1,
                    borderRadius: "12px",
                    cursor: "pointer",
                    ":hover": {
                      bgcolor: theme.palette.grey[100],
                    },
                  }}
                >
                  <img
                    src="https://files-api.itpoint.uz/orient-motors/images/original/desktopPhoneBg.png"
                    width={50}
                    height={50}
                    style={{ borderRadius: "50%" }}
                  />

                  <Typography variant="body2" sx={{ whiteSpace: "nowrap" }}>
                    Bolalar uchun
                  </Typography>
                </Box>
              );
            })}
          </Stack>
        </Grid>
        <Grid size={12}>
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
