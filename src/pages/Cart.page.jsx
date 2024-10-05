import {
  Box,
  Button,
  FormControl,
  Grid2,
  NativeSelect,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useFormik } from "formik";
import Layout from "../components/layout/Layout.component";
import BasketCard from "../components/basket-card/BasketCard.component";
import { REGION_LIST } from "../utils/constants";
import { BaseInput, CustomLabelInput } from "../components/styled";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const CartPage = () => {
  const formik = useFormik({
    initialValues: { full_name: "", phone_number: "", address: 1 },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
    },
  });
  return (
    <Layout>
      <Grid2 container spacing={2} columns={12}>
        <Grid2 size={{ xs: 12, sm: 12, md: 8 }}>
          <Item sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Stack direction="row" justifyContent="space-between">
              <Typography>Savat</Typography>
              <Typography>Jami: 100,000 so'm</Typography>
            </Stack>
            <Stack
              direction="column"
              gap={1}
              height={{ xs: "auto", sm: 600, md: 500 }}
              overflow="auto"
            >
              {[
                Array(10)
                  .fill(0)
                  .map((item) => <BasketCard />),
              ]}
            </Stack>
          </Item>
        </Grid2>
        <Grid2 size={{ xs: 12, sm: 12, md: 4 }}>
          <Item>
            <Box
              component="form"
              onSubmit={formik.handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 1 }}
            >
              <FormControl fullWidth variant="standard">
                <CustomLabelInput>Ism familiya</CustomLabelInput>
                <BaseInput
                  id="full_name"
                  label="Ism familiya"
                  placeholder="Ism familiya kiriting"
                  variant="outlined"
                  name="full_name"
                  value={formik.values.full_name}
                  onChange={formik.handleChange}
                  required
                />
              </FormControl>
              <FormControl fullWidth variant="standard">
                <CustomLabelInput>Telefon raqam</CustomLabelInput>
                <BaseInput
                  id="phone_number"
                  label="Telefon raqami"
                  variant="outlined"
                  name="phone_number"
                  value={formik.values.phone_number}
                  onChange={formik.handleChange}
                  required
                />
              </FormControl>
              <FormControl fullWidth variant="standard">
                <CustomLabelInput>Viloyat</CustomLabelInput>
                <NativeSelect
                  label="Viloyatni tanlang"
                  labelId="select-region-label"
                  id="address"
                  name="address"
                  value={formik.values.address}
                  onChange={formik.handleChange}
                  input={<BaseInput />}
                  required
                >
                  {REGION_LIST.map((r) => {
                    return <option value={r.id}>{r.name}</option>;
                  })}
                </NativeSelect>
              </FormControl>
              <FormControl fullWidth variant="standard" sx={{ mt: 1 }}>
                <Button variant="contained">Yuborish</Button>
              </FormControl>
            </Box>
          </Item>
        </Grid2>
      </Grid2>
    </Layout>
  );
};

export default CartPage;
