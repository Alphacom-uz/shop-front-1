import { Grid, Stack, Typography } from "@mui/material";
import Card from "../../card/Card.component";

const ITEMS = [
  {
    id: 1,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor set amet conscestion lorefh aiduhdiu fw4f34hiuh f4iuh",
    price: 12000,
  },
  {
    id: 1,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor set amet conscestion lorefh aiduhdiu fw4f34hiuh f4iuh",
    price: 12000,
  },
  {
    id: 1,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor set amet conscestion lorefh aiduhdiu fw4f34hiuh f4iuh",
    price: 12000,
  },
  {
    id: 1,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor set amet conscestion lorefh aiduhdiu fw4f34hiuh f4iuh",
    price: 12000,
  },
  {
    id: 1,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor set amet conscestion lorefh aiduhdiu fw4f34hiuh f4iuh",
    price: 12000,
  },
  {
    id: 1,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor set amet conscestion lorefh aiduhdiu fw4f34hiuh f4iuh",
    price: 12000,
  },
  {
    id: 1,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor set amet conscestion lorefh aiduhdiu fw4f34hiuh f4iuh",
    price: 12000,
  },
  {
    id: 1,
    title: "Lorem ipsum",
    description:
      "Lorem ipsum dolor set amet conscestion lorefh aiduhdiu fw4f34hiuh f4iuh",
    price: 12000,
  },
];

const Section = ({ title = "Section title", cards = [] }) => {
  return (
    <Stack direction="column" gap="20px">
      <Typography variant="h4">{title}</Typography>
      <Grid container spacing={{ xs: 1, sm: 1.2, md: 1.5 }}>
        {ITEMS.map((item) => (
          <Grid item xs={6} sm={6} md={3}>
            <Card />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Section;
