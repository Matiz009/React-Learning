import React from 'react';
import { Text, Heading, Image, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CoinCard = ({ id, currencySymbol, name, img, symbol, price }) => {
  return (
    <>
      <Link to={`/coin/${id}`}>
        <VStack
          w={'60'}
          shadow={'lg'}
          p={'8'}
          borderRadius={'lg'}
          transition={'all 0.3s'}
          m={'5'}
          css={{
            '&:hover': {
              transform: 'scale(1.1)',
            },
          }}
        >
          <Image
            src={img}
            w={'10'}
            h={'10'}
            objectFit={'contain'}
            alt={'exchanges'}
          />{' '}
          <Heading size={'md'} noOfLines={1}>
            {' '}
            {symbol}{' '}
          </Heading>{' '}
          <Text noOfLines={1}> {name} </Text>{' '}
          <Text noOfLines={1}>
            {' '}
            {price ? `${price} ${currencySymbol}` : 'NA'}{' '}
          </Text>{' '}
        </VStack>{' '}
      </Link>{' '}
    </>
  );
};
export default CoinCard;
