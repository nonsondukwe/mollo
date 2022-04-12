import Head from 'next/head';
import { Box } from '@chakra-ui/react';


export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Mollo</title>
      </Head>
      <Box m='auto'>
        <main>{children}</main>
       
      </Box>
      </>
  );
}
