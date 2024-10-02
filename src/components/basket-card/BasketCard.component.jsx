import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const BasketCard = () => {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" gap={1}>
        <Box
          component="img"
          src="https://files-api.itpoint.uz/orient-motors/images/original/desktopPhoneBg.png"
          width="80px"
          height="60px"
        />
        <Stack>
          <Typography variant="body2">Kompyuter jamlanmasi</Typography>
          <Typography variant="body2">120,000 so'm</Typography>
          <Stack direction="row" alignItems="center" gap={1}>
            <IconButton sx={{ p: 0 }}>
              <Remove />
            </IconButton>
            <Typography>2</Typography>
            <IconButton sx={{ p: 0 }}>
              <Add />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default BasketCard;
