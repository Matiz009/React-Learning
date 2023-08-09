import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
import btcSrc from '../assets/btc.png';

const Home = () => {
  return (
    <Box
      w="full"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <motion.div
        initial={{ opacity: 0, translateY: '100px' }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
        }}
      >
        <img
          src={btcSrc}
          alt="Bitcoin Logo"
          style={{
            width: '150px',
            filter: 'grayscale(1)',
            borderRadius: '50%',
          }}
        />{' '}
      </motion.div>{' '}
      <motion.div
        initial={{ opacity: 0, translateY: '50px' }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          delay: 0.5,
        }}
      >
        <Text
          fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}
          textAlign="center"
          fontWeight="bold"
          mt={6}
        >
          Uncover the Future of Finance{' '}
        </Text>{' '}
      </motion.div>{' '}
      <motion.div
        initial={{ opacity: 0, translateY: '30px' }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1.3,
          delay: 1.5,
        }}
      >
        <Text fontSize="xl" textAlign="center" mt={2} maxW="xl">
          Dive into the exciting world of cryptocurrencies with real time data,
          expert insights, and comprehensive analysis.{' '}
        </Text>{' '}
      </motion.div>{' '}
    </Box>
  );
};

export default Home;
