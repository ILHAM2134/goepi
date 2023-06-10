import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

import style from "@css/Home.module.css";
import bg from "@img/Home/jumbotron1.jpg";

import { useAppContext } from "@store/context";

export default function Jumbotron() {
  const [context, setContext] = useAppContext();

  return (
    <Box
      className={`${style.jumbotron} mt-16 py-4`}
      style={{
        backgroundImage: context.darkMode
          ? `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(0, 0, 0, 0.6) 100%
          ),
          url(${bg.src})`
          : `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.6) 0%,
            rgba(122, 122, 122, 0.6) 100%
          ),
          url(${bg.src})`,
      }}
    >
      <main>
        <Box className="relative px-6 lg:px-8">
          <Box className="xs:pt-30 mx-auto max-w-3xl pb-32 pt-20 sm:pb-40 sm:pt-48">
            <Box>
              <Box className="hidden sm:mb-8 sm:flex sm:justify-center">
                <Box className="relative overflow-hidden rounded-full px-6 py-3 text-sm leading-6 ring-1 ring-green-200">
                  Be our reseller.
                  <Link href="/" className="ml-2 font-semibold">
                    Read more &rarr;
                  </Link>
                </Box>
              </Box>
              <Box>
                <Typography
                  variant="h1"
                  className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl"
                >
                  Serving Tea for your needs!
                </Typography>
                <Typography
                  sx={{ display: "inline" }}
                  className="mt-10 text-lg leading-8 sm:text-center"
                >
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </Typography>
                <Box className="mt-8 flex justify-center gap-x-4">
                  <Link
                    href="/"
                    className="inline-block rounded-lg bg-green-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-green-700"
                  >
                    Our products
                    <Typography
                      sx={{ display: "inline" }}
                      className=""
                      aria-hidden="true"
                    >
                      &rarr;
                    </Typography>
                  </Link>
                  <Link
                    href="/"
                    className="ring-white-100/20 inline-block rounded-lg px-4 py-1.5 text-base font-semibold  leading-7 ring-1 hover:ring-gray-100/20"
                  >
                    Contact us
                    <Typography
                      sx={{ display: "inline" }}
                      className=""
                      aria-hidden="true"
                    >
                      &rarr;
                    </Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </main>
    </Box>
  );
}
