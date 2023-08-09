import {
  Box,
  Container,
  HStack,
  Radio,
  RadioGroup,
  Text,
  VStack,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Badge,
  Progress,
  Button,
} from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from './Loader';
import axios from 'axios';
import { server } from '../index';
import Chart from './Chart';
import ErrorComponent from './ErrorComponent';
const CoinDetails = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [currency, setCurrency] = useState('pkr');
  const [days, setDays] = useState('24h');
  const [chartArray, setChartArray] = useState([]);
  const params = useParams();
  const currencySymbol =
    currency === 'pkr' ? 'Rs' : currency === 'eur' ? '€' : '$';

  const buttons = ['24h', '7d', '30d', '60d', '100d', '200d', '365d', 'max'];

  const switchChart = key => {
    switch (key) {
      case '24h':
        setDays('24h');
        setLoading(true);
        break;
      case '7d':
        setDays('7d');
        setLoading(true);
        break;
      case '30d':
        setDays('30d');
        setLoading(true);
        break;
      case '60d':
        setDays('60d');
        setLoading(true);
        break;
      case '100':
        setDays('100d');
        setLoading(true);
        break;
      case '200d':
        setDays('200d');
        setLoading(true);
        break;
      case '365d':
        setDays('365d');
        setLoading(true);
        break;
      case 'max':
        setDays('max');
        setLoading(true);
        break;
      default:
        setDays('24h');
        setLoading(true);
        break;
    }
  };
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/${params.id}`);
        const { data: chartData } = await axios.get(
          `${server}/coins/${params.id}/market_chart?vs_currency=${currency}&days=${days}`
        );
        console.log(data);
        setCoins(data);
        setChartArray(chartData.prices);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
    return () => {};
  }, [params.id, currency, days]);
  if (error) return <ErrorComponent message={'Error while fetching coin'} />;
  else
    return (
      <Container maxW={'container.xl'}>
        {' '}
        {loading ? (
          <Loader />
        ) : (
          <>
            <Box borderWidth={'1'} width={'full'}>
              {' '}
              <Chart
                arr={chartArray}
                currency={currencySymbol}
                days={days}
              />{' '}
            </Box>{' '}
            <HStack p={'4'} overflowX={'auto'}>
              {' '}
              {buttons.map(i => (
                <Button key={i} onClick={() => switchChart(i)}>
                  {' '}
                  {i}{' '}
                </Button>
              ))}{' '}
            </HStack>{' '}
            <RadioGroup value={currency} onChange={setCurrency} p={'8'}>
              <HStack spacing={'4'}>
                <Radio value={'pkr'}> PKR </Radio>{' '}
                <Radio value={'eur'}> EUR </Radio>{' '}
                <Radio value={'usd'}> USD </Radio>{' '}
              </HStack>{' '}
            </RadioGroup>{' '}
            <VStack spacing={'4'} p="16" alignItems={'flex-start'}>
              <Text fontSize={'small'} alignSelf="center" opacity={0.7}>
                Last Updated on{' '}
                {Date(coins.market_data.last_updated).split('G')[0]}{' '}
              </Text>{' '}
              <Image
                src={coins.image.large}
                w={'16'}
                h={'16'}
                objectFit={'contain'}
              />{' '}
              <Stat>
                <StatLabel> {coins.name} </StatLabel>{' '}
                <StatNumber>
                  {' '}
                  {coins.market_data.current_price['pkr']} {currencySymbol}{' '}
                </StatNumber>{' '}
                <StatHelpText>
                  <StatArrow
                    type={
                      coins.market_data.price_change_percentage_24h > 0
                        ? 'increase'
                        : 'decrease'
                    }
                  />{' '}
                  {coins.market_data.price_change_percentage_24h} %
                </StatHelpText>{' '}
              </Stat>{' '}
              <Badge
                fontSize={'2xl'}
                bgColor={'blue.800'}
                borderRadius={'2px'}
                color={'white'}
              >
                {' '}
                {`# ${coins.market_cap_rank}`}{' '}
              </Badge>{' '}
              <CustomBar
                high={`${coins.market_data.high_24h[currency]} ${currencySymbol}`}
                low={`${coins.market_data.low_24h[currency]} ${currencySymbol}`}
              />{' '}
              <Box w={'full'} p="4">
                <Item
                  title={'Max Supply'}
                  value={
                    coins.market_data.max_supply != null
                      ? coins.market_data.max_supply
                      : 'NA'
                  }
                />{' '}
                <Item
                  title={'Circulating Supply'}
                  value={`${coins.market_data.circulating_supply} units`}
                />{' '}
                <Item
                  title={'Market Cap'}
                  value={`${coins.market_data.market_cap[currency]} ${currencySymbol}`}
                />{' '}
                <Item
                  title={'All Time Low'}
                  value={`${coins.market_data.atl[currency]} ${currencySymbol}`}
                />{' '}
                <Item
                  title={'All Time High'}
                  value={`${coins.market_data.ath[currency]} ${currencySymbol}`}
                />{' '}
              </Box>{' '}
            </VStack>{' '}
          </>
        )}{' '}
      </Container>
    );
};
const Item = ({ title, value }) => (
  <HStack justifyContent={'space-between'} w={'full'} my={'4'}>
    <Text fontFamily={'fantasy'} letterSpacing={'widest'}>
      {' '}
      {title}{' '}
    </Text>{' '}
    <Text> {value} </Text>{' '}
  </HStack>
);
const CustomBar = ({ high, low }) => (
  <VStack w={'full'}>
    <Progress value={50} colorScheme={'teal'} w={'full'} />{' '}
    <HStack justifyContent={'space-between'} w={'full'}>
      <Badge children={low} colorScheme={'red'} />{' '}
      <Text fontSize={'sm'}> 24 H Range </Text>{' '}
      <Badge children={high} colorScheme={'green'} />{' '}
    </HStack>{' '}
  </VStack>
);
export default CoinDetails;
