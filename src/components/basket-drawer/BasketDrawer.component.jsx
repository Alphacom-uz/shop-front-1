import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import BasketCard from "../basket-card/BasketCard.component";

const BasketDrawer = ({ open, toggleDrawer }) => {
  const content = (
    <Box sx={{ width: 300 }} role="presentation">
      <Stack height="100dvh" direction="column" position="relative">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          py={1}
          position="absolute"
          top={0}
          left={0}
          width="100%"
        >
          <Typography variant="body1">Savat</Typography>
          <IconButton sx={{ p: 0 }} onClick={toggleDrawer(false)}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack
          direction="column"
          gap={1}
          sx={{
            paddingTop: "40px",
            paddingBottom: "52.5px",
            px: 2,
            height: "100%",
            overflow: "auto",
          }}
        >
          {[
            Array(10)
              .fill(0)
              .map((item) => <BasketCard />),
          ]}
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          px={2}
          py={1}
          position="absolute"
          bottom={0}
          right={0}
          width="100%"
        >
          <Button fullWidth variant="contained" color="error">
            Sotib olish
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
  return (
    <Drawer open={open} anchor="right" onClose={toggleDrawer(false)}>
      {content}
    </Drawer>
  );
};

export default BasketDrawer;
