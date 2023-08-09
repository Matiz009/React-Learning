import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from '../index';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';

import { Radio, Container, HStack, Button, RadioGroup } from '@chakra-ui/react';
import CoinCard from './CoinCard';

const Coins = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('pkr');
  const currencySymbol =
    currency === 'pkr' ? 'Rs' : currency === 'eur' ? '€' : '$';
  const changePage = page => {
    setPage(page);
    setLoading(true);
  };

  const buttons = new Array(132).fill(1);
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`
        );
        setCoins(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
    return () => {};
  }, [currency, page]);
  if (error) return <ErrorComponent message={'Error while fetching coins'} />;
  else
    return (
      <Container maxW={'container.xl'}>
        {' '}
        {loading ? (
          <Loader />
        ) : (
          <>
            <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
              <HStack spacing={'4'}>
                <Radio value={'pkr'}> PKR </Radio>{' '}
                <Radio value={'eur'}> EUR </Radio>{' '}
                <Radio value={'usd'}> USD </Radio>{' '}
              </HStack>{' '}
            </RadioGroup>{' '}
            <HStack wrap={'wrap'} justifyContent={'space-evenly'}>
              {' '}
              {coins.map(i => (
                <CoinCard
                  key={i.id}
                  id={i.id}
                  price={i.current_price}
                  symbol={i.symbol}
                  name={i.name}
                  img={i.image}
                  rank={i.trust_score_rank}
                  url={i.url}
                  currencySymbol={currencySymbol}
                />
              ))}{' '}
            </HStack>{' '}
            <HStack w={'full'} overflowX={'auto'} p={'8'}>
              {' '}
              {buttons.map((item, index) => (
                <Button
                  key={index}
                  bgColor={'facebook.900'}
                  color={'white'}
                  onClick={() => changePage(index + 1)}
                >
                  {index + 1}{' '}
                </Button>
              ))}{' '}
            </HStack>{' '}
          </>
        )}{' '}
      </Container>
    );
};

export default Coins;
