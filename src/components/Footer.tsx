import { Typography, Box, IconButton, Button, TextField } from "@mui/material";
import EmojiFoodBeverageOutlinedIcon from "@mui/icons-material/EmojiFoodBeverageOutlined";

export interface IFooterProps {}

export default function Footer(props: IFooterProps) {
  return (
    <Box className="sticky top-0 p-10">
      <Box className="mx-auto max-w-screen-2xl">
        <Box className="my-10 flex flex-wrap items-center sm:justify-between">
          <Box className="xs:justify-center mt-15 mb-20 flex basis-1/2 flex-col items-center sm:basis-1/3 md:mb-0 md:basis-1/5 ">
            <h1 className="text-lg font-bold leading-10">Our Service</h1>
            <Typography variant="subtitle1" className="leading-loose">
              Delivery Order
            </Typography>
            <Typography variant="subtitle1" className="leading-loose">
              Membership
            </Typography>
            <Typography variant="subtitle1" className="leading-loose">
              Jum'at Brerkah Discount
            </Typography>
          </Box>
          <Box className="xs:justify-center mt-15 mb-20 flex basis-1/2 flex-col items-center sm:mb-0 sm:basis-1/3 md:basis-1/5 ">
            <h1 className="text-lg font-bold leading-10">Store</h1>
            <Typography variant="subtitle1" className="leading-loose">
              Sleman
            </Typography>
            <Typography variant="subtitle1" className="leading-loose">
              Solo
            </Typography>
            <Typography variant="subtitle1" className="leading-loose">
              Baciro
            </Typography>
          </Box>
          <Box className="xs:justify-center mt-15 mb-0 flex  basis-1/2 flex-col items-center sm:basis-1/3 md:basis-1/5 ">
            <h1 className="text-lg font-bold leading-10">Best Seller</h1>
            <Typography variant="subtitle1" className="leading-loose">
              Product A
            </Typography>
            <Typography variant="subtitle1" className="leading-loose">
              Product B
            </Typography>
            <Typography variant="subtitle1" className="leading-loose">
              Product C
            </Typography>
          </Box>
          <Box className="xs:justify-center mt-15 mb-20 flex basis-1/2 flex-col items-center sm:basis-1/3 md:mb-0 md:basis-1/5 ">
            <h1 className="text-lg font-bold leading-10">Follow Us</h1>
            <Typography variant="subtitle1" className="leading-loose">
              Instagram
            </Typography>
            <Typography variant="subtitle1" className="leading-loose">
              Facebook
            </Typography>
            <Typography variant="subtitle1" className="leading-loose">
              Twitter
            </Typography>
            <Typography variant="subtitle1" className="leading-loose">
              Gofood
            </Typography>
          </Box>
        </Box>
        <Box className="mt-18 mx-auto flex flex-col justify-center md:w-2/3 xl:flex-row">
          <Box className="mx-10 flex items-center justify-center md:mb-14 xl:mb-0 xl:w-1/2">
            <img
              src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png"
              alt="Envelope with a newsletter"
              role="img"
              className="my-10 mt-20 hidden max-h-80 w-auto xl:inline"
            />
          </Box>
          <Box className="mx-10 items-center xl:w-1/2 xl:py-28">
            <h1 className="mb-4 mt-4 text-center text-2xl font-bold leading-10 md:mt-0 md:text-4xl xl:text-5xl">
              Subscribe
            </h1>
            <p className="text-center text-base leading-normal">
              Keep update with our products, promo, and services we provide to you
            </p>
            <Box className="mx-auto mt-12 flex items-stretch">
              <TextField
                variant="outlined"
                className="w-4/5 rounded-lg border border-transparent p-5 text-base leading-none focus:border-gray-500 focus:outline-none"
                type="email"
                placeholder="Your Email"
              />
              <Button className="w-32 rounded rounded-l-none p-2 text-base font-medium uppercase leading-none focus:outline-none">
                subscribe
              </Button>
            </Box>
          </Box>
        </Box>
        <Box className=" mb-8 mt-20">
          <hr className="mx-auto w-10/12 font-semibold" />
        </Box>
        <Box className="text-center">
          <Typography variant="body1">
            &#169;2023 Goepi&#8482;. All Rights Reserved
          </Typography>
        </Box>
        <Box>
          <i className="ri-instagram-line ri-2x mx-1"></i>
          <i className="ri-facebook-box-line ri-2x mx-1"></i>
          <i className="ri-twitter-line ri-2x mx-1"></i>
          <i className="ri-github-line ri-2x mx-1"></i>
          <i className="ri-dribbble-fill ri-2x mx-1"></i>
        </Box>
      </Box>
    </Box>
  );
}
