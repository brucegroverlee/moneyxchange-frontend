import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'semantic-ui-react';

import CurrencyCard from '@components/home/currencyCard';

import getBaseCurrencies from './functions/getBaseCurrencies';
import getDestinantionCurrencies from './functions/getDestinantionCurrencies';
import transformCurrencies from './functions/transformCurrencies';

const ExchangeCard = (props) => {
  const { 
    strings,
    currencies,
    currencyCodeBase,
    currencyValueBase,
    currencyCodeDestination,
    currencyValueDestination,
    handleOnChangeCurrencyCodeBase,
    handleOnChangeCurrencyValueBase,
    handleOnChangeCurrencyCodeDestination,
    handleOnClickConvert,
  } = props;
  const baseCurrencies = transformCurrencies(getBaseCurrencies(currencies));
  const destinationCurrencies = transformCurrencies(getDestinantionCurrencies(currencies));
  return(
    <div className="exchange-card-component">
      <div className="exchange-card-component__currency-base">
        <CurrencyCard
          options={baseCurrencies}
          currencyCode={currencyCodeBase}
          currencyValue={currencyValueBase}
          handleOnChangeCurrencyCode={handleOnChangeCurrencyCodeBase}
          handleOnChangeCurrencyValue={handleOnChangeCurrencyValueBase}
          readOnly={false}
        >
          <Button onClick={() => handleOnClickConvert()} >{strings.exchangeButton}</Button>
        </CurrencyCard>
      </div>

      <div className="exchange-card-component__currency-transform">
        <CurrencyCard
          options={destinationCurrencies}
          currencyCode={currencyCodeDestination}
          currencyValue={currencyValueDestination}
          handleOnChangeCurrencyCode={handleOnChangeCurrencyCodeDestination}
          handleOnChangeCurrencyValue={() => {}}
          readOnly={true}
        />
      </div>
    </div>
  );
};

ExchangeCard.propTypes = {
  strings: PropTypes.object.isRequired,
  currencies: PropTypes.array.isRequired,
  currencyCodeBase: PropTypes.string.isRequired,
  currencyValueBase: PropTypes.any.isRequired,
  currencyCodeDestination: PropTypes.string.isRequired,
  currencyValueDestination: PropTypes.any.isRequired,
  handleOnChangeCurrencyCodeBase: PropTypes.func.isRequired,
  handleOnChangeCurrencyValueBase: PropTypes.func.isRequired,
  handleOnChangeCurrencyCodeDestination: PropTypes.func.isRequired,
  handleOnClickConvert: PropTypes.func.isRequired,
};

export default ExchangeCard;
