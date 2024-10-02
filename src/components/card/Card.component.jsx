import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { Stack } from "@mui/material";

export default function CardComponent({
  title = "Card title",
  description = "Card description something else again this could be get down get...",
  price = 120000,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardMedia
        component="img"
        height="194"
        image="https://files-api.itpoint.uz/orient-motors/images/original/desktopPhoneBg.png"
        alt="Paella dish"
      />
      <CardContent sx={{ padding: "8px !important" }}>
        <Typography
          variant="body1"
          component="a"
          href={`/product/21`}
          sx={{ textDecoration: "none", color: "black" }}
        >
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {description.slice(0, 30)}
        </Typography>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography>{price.toLocaleString()} so'm</Typography>
          <IconButton>
            <NoteAddIcon />
          </IconButton>
        </Stack>
      </CardContent>
    </Card>
  );
}
