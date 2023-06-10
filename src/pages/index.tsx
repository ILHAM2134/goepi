import { Box, Grid, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Head from "next/head";
import Image from "next/image";

import Jumbotron from "@/components/Home/Jumbotron";
import ProductCard, { HomeCardProps } from "@/components/Home/ProductCard";
// import HomeCarousel from "@/components/Home/Carousel";

import tea1 from "@img/Home/tea1-vecteezy.jpg";

import { bestSeller } from "@/data/products";

const Home = () => {
  const theme = useTheme();
  return (
    <Box className={`mt-0 w-full`}>
      <Head>
        <title>Goepi | Home</title>
      </Head>
      <Jumbotron />
      <Box
        sx={{
          mx: {
            xs: 2,
            sm: 4,
            md: 8,
            lg: 16,
          },
          mt: {
            xs: 4,
            sm: 6,
            md: 12,
            lg: 16,
            xl: 18,
          },
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            [theme.breakpoints.up("xs")]: {
              textAlign: "center",
            },
            [theme.breakpoints.up("md")]: {
              textAlign: "left",
            },
            fontWeight: "medium",
          }}
        >
          Best Seller
        </Typography>
        <Grid
          container
          spacing={{ xs: 1, md: 2 }}
          alignItems="center"
          justifyContent="left"
        >
          {bestSeller.map(({ id, img, title, caption }) => (
            <Grid
              item
              xs={12}
              md={6}
              lg={4}
              xl={3}
              key={id}
              className="flex justify-center"
            >
              <ProductCard img={img} title={title} caption={caption} />
            </Grid>
          ))}
        </Grid>
        {/* <HomeCarousel /> */}
      </Box>
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 5 }}
        sx={{
          my: {
            xs: 3,
            sm: 4,
            md: 5,
            lg: 6,
          },
        }}
      >
        <Grid
          item
          xs={12}
          md={7}
          sx={{
            position: "relative",
            height: {
              xs: 450,
              md: 500,
              lg: 600,
            },
            mr: {
              xs: 1,
              sm: 2,
              md: 0,
            },
          }}
        >
          <Image
            fill={true}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              overflow: "hidden",
              borderRadius: "0 50% 50% 0",
            }}
            // height={450}
            alt="tea1"
            src={tea1}
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={5}
          className="flex flex-col justify-center text-left"
        >
          <Typography variant="h2" className="font-bold">
            Refreshing your day!
          </Typography>
          <Typography
            variant="h4"
            sx={{
              mt: {
                xs: 1,
                sm: 2,
                md: 3,
              },
            }}
          >
            We provide some good quality tea to chillin your life
          </Typography>
          <Button variant="outlined" sx={{ mx: 4, my: 2 }}>
            Order now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
