import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import Loader from './Loader';
import {
  Text,
  Container,
  HStack,
  Heading,
  Image,
  VStack,
} from '@chakra-ui/react';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchExchanges = async () => {
      const { data } = await axios.get(`${server}/exchanges`);
      setExchanges(data);
      setLoading(false);
      console.log(data);
    };
    fetchExchanges();
    return () => {};
  }, []);
  return (
    <Container maxW={'container.xl'}>
      {' '}
      {loading ? (
        <Loader />
      ) : (
        <HStack wrap={'wrap'}>
          {' '}
          {exchanges.map(i => (
            <ExchangeCard
              name={i.name}
              img={i.image}
              rank={i.trust_score_rank}
              url={i.url}
              key={i.id}
            />
          ))}{' '}
        </HStack>
      )}{' '}
    </Container>
  );
};

const ExchangeCard = ({ name, img, rank, url }) => {
  <a href={url} target={'blank'}>
    {' '}
    <VStack>
      <Image
        src={img}
        w={'10'}
        h={'10'}
        objectFit={'contain'}
        alt={'exchanges'}
      />{' '}
      <Heading size={'md'} noOfLines={1}>
        {' '}
        {rank}{' '}
      </Heading>{' '}
      <Text noOfLines={1}> {name} </Text>{' '}
    </VStack>{' '}
  </a>;
};
export default Exchanges;
