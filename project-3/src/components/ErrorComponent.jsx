import { Box, Alert, AlertIcon, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ErrorComponent = ({ message }) => {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        textAlign="center"
        bg="white"
        borderRadius="md"
        p="6"
        boxShadow="xl"
        maxW="400px"
      >
        <Image
          src={
            'https://cdn.pixabay.com/photo/2022/05/28/10/45/oops-7227010_1280.png'
          }
          alt="Error Illustration"
          maxW="300px"
          mb="4"
          border="5px solid #E53E3E"
        />
        <Alert status="error" borderRadius="lg" p="4">
          <AlertIcon boxSize="5" color="red.700" />
          <Text fontSize="xl" fontWeight="bold" color="red.700">
            {' '}
            {message}{' '}
          </Text>{' '}
        </Alert>{' '}
      </Box>{' '}
    </Box>
  );
};

export default ErrorComponent;
