import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  VStack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';

const Footer = () => {
  return (
    <Box bgColor={'facebook.800'} minH={'40'} p="16" color={'white'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
          <Heading size="md" textTransform={'uppercase'}>
            Subscribe to get updates.{' '}
          </Heading>{' '}
          <HStack borderBottom={'2px solid white'} py="2">
            <Input
              placeholder="Enter email here .."
              border={'none'}
              borderRadius={'none'}
              outline={'none'}
              focusBorderColor="none"
            />{' '}
            <Button
              p={'0'}
              colorScheme={'purple'}
              variant={'ghost'}
              borderRadius={'0 20px 20px 0'}
            >
              <AiOutlineSend size={20} />{' '}
            </Button>{' '}
          </HStack>{' '}
        </VStack>{' '}
        <VStack
          w={'full'}
          borderLeft={['none', '1px solid white']}
          borderRight={['none', '1px solid white']}
        >
          <Heading textAlign={'center'}> CryptoInsight </Heading>{' '}
          <Text> All Rights Reserved </Text>{' '}
        </VStack>{' '}
        <VStack w={'full'}>
          <Heading size={'md'} textTransform={'uppercase'}>
            Social Media{' '}
          </Heading>{' '}
          <Button variant={'unstyled'}>
            <a href="https://facebook.com/iammatiz" target={'blank'}>
              Facebook{' '}
            </a>{' '}
          </Button>{' '}
          <Button variant={'unstyled'}>
            <a href="https://instagram.com/iammatiz" target={'blank'}>
              Instagram{' '}
            </a>{' '}
          </Button>{' '}
          <Button variant={'unstyled'}>
            <a href="https://github.com/Matiz009" target={'blank'}>
              Github{' '}
            </a>{' '}
          </Button>{' '}
        </VStack>{' '}
      </Stack>{' '}
    </Box>
  );
};

export default Footer;
