import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      flexWrap="wrap"
      gap="20px"
      sx={{ bgcolor: "grey", p: 3 }}
    >
      <Typography
        textAlign={{ xs: "center", sm: "center", md: "start" }}
        width={{ xs: "100%", sm: "100%", md: "auto" }}
        color="#fff"
      >
        2024 - Barcha huqular himoyalangan
      </Typography>
      <Stack
        direction="row"
        justifyContent={{
          xs: "space-between",
          sm: "space-between",
          md: "initial",
        }}
        width={{ xs: "100%", sm: "100%", md: "auto" }}
        alignItems="center"
        gap="10px"
      >
        <Typography color="#fff">Asosiy</Typography>
        <Typography color="#fff">Mahsulotlar</Typography>
        <Typography color="#fff">Shaxsiy kabinet</Typography>
      </Stack>
    </Stack>
  );
};

export default Footer;
