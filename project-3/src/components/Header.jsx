import { Button, HStack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HStack p={'4'} shadow={'base'} bgColor={'facebook.800'}>
      <Button variant={'unstyled'} color={'white'}>
        <Link to="/"> Home </Link>{' '}
      </Button>{' '}
      <Button variant={'unstyled'} color={'white'} marginLeft={'10'}>
        <Link to="/coins"> Coins </Link>{' '}
      </Button>{' '}
      <Button variant={'unstyled'} color={'white'} marginLeft={'10'}>
        <Link to="/exchanges"> Exchanges </Link>{' '}
      </Button>{' '}
    </HStack>
  );
};

export default Header;
