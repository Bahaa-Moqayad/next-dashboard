import Head from "next/head";
import Box from "@mui/material/Box";
import Layout from "../components/dashboard/Layout";

const lngs = {
  ar: { nativeName: "Arabic" },
  en: { nativeName: "English" },
};

const Page = () => {
  return (
    <>
      <Head>
        <title>{`${process.env.APP_NAME} | Dashboard`}</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        Here The Main Dashboard
      </Box>
    </>
  );
};

Page.getLayout = (page) => <Layout>{page}</Layout>;

export default Page;
