import { Fragment } from "react";

import { Grid, Container, Box, Typography } from "@mui/material";

import { CustomerBenefit, Partner, Blog } from "./components";

import { Header, FormContact } from "../../components";

const HomePage = ({
  homeData,
  partnerData,
  blogDetail,
  initContact,
  dataContact,
  storeCategories,
  ...props
}) => {
  const { items } = homeData;

  const data = items?.[0];

  return (
    <Fragment>
      <Header data={data} />
      <CustomerBenefit data={data} />

      <Partner data={data} partnerData={partnerData} />
      <Blog blogList={blogDetail} data={data} />

      <Container id="dang-ky">
        <Grid
          container
          sx={{
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                paddingY: 6,
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  marginBottom: 6,
                  textAlign: "center",
                }}
              >
                Đăng ký quán thành viên
              </Typography>

              <FormContact category={storeCategories} data={dataContact?.items?.[0]} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
};

export default HomePage;
