import React from 'react';
import PropTypes from 'prop-types';

import ExchangeCard from '@components/home/exchangeCard';
import ExchangesListCard from '@components/home/exchangesListCard';

const Home = (props) => {
  const { 
    strings,
    currencies,
    exchanges,
    currencyCodeBase,
    currencyValueBase,
    currencyCodeDestination,
    currencyValueDestination,
    handleOnChangeCurrencyCodeBase,
    handleOnChangeCurrencyValueBase,
    handleOnChangeCurrencyCodeDestination,
    handleOnClickConvert,
  } = props;
  return(
    <div className="home-html">
      {strings.title}
      <ExchangeCard
        strings={strings.ExchangeCar}
        currencies={currencies}
        currencyCodeBase={currencyCodeBase}
        currencyValueBase={currencyValueBase}
        currencyCodeDestination={currencyCodeDestination}
        currencyValueDestination={currencyValueDestination}
        handleOnChangeCurrencyCodeBase={handleOnChangeCurrencyCodeBase}
        handleOnChangeCurrencyValueBase={handleOnChangeCurrencyValueBase}
        handleOnChangeCurrencyCodeDestination={handleOnChangeCurrencyCodeDestination}
        handleOnClickConvert={handleOnClickConvert}
      />
      <ExchangesListCard 
        exchanges={exchanges}
      />
    </div>
  );
};

Home.propTypes = {
  strings: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired,
  exchanges: PropTypes.array.isRequired,
  currencyCodeBase: PropTypes.string.isRequired,
  currencyValueBase: PropTypes.any.isRequired,
  currencyCodeDestination: PropTypes.string.isRequired,
  currencyValueDestination: PropTypes.any.isRequired,
  handleOnChangeCurrencyCodeBase: PropTypes.func.isRequired,
  handleOnChangeCurrencyValueBase: PropTypes.func.isRequired,
  handleOnChangeCurrencyCodeDestination: PropTypes.func.isRequired,
  handleOnClickConvert: PropTypes.func.isRequired,
};

export default Home;