import { VStack, Box, Spinner, Text } from '@chakra-ui/react';
import React from 'react';

const Loader = () => {
  return (
    <VStack h={'90vh'} justifyContent={'center'}>
      <Box transform={'scale(3)'}>
        <Spinner size={'xl'} />{' '}
        <Text variant={'lg'} textAlign={'center'}>
          Fetching
        </Text>{' '}
      </Box>{' '}
    </VStack>
  );
};

export default Loader;
