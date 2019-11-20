import React from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  Input,
  Select,
} from 'semantic-ui-react';

import getFormatCurrency from './function/getFormatCurrency';

import './currencyCard.scss';

const CurrencyCard = (props) => {
  const { 
    options,
    currencyCode,
    currencyValue,
    handleOnChangeCurrencyCode,
    handleOnChangeCurrencyValue, 
    readOnly,
    children,
  } = props;
  return(
    <div className="currency-card-component">
      <Form.Field
        control={Select}
        options={options}
        placeholder={currencyCode}
        value={currencyCode}
        onChange={(event, data) => handleOnChangeCurrencyCode(data.value)}
      />
      <Form.Field
        control={Input}
        placeholder={currencyValue}
        value={getFormatCurrency(currencyCode, currencyValue)}
        onChange={(event) => handleOnChangeCurrencyValue(event.target.value)}
        readOnly={readOnly}
      />
      {children}
    </div>
  );
};

CurrencyCard.propTypes = {
  options: PropTypes.array.isRequired,
  currencyCode: PropTypes.string.isRequired,
  currencyValue: PropTypes.any.isRequired,
  handleOnChangeCurrencyCode: PropTypes.func.isRequired,
  handleOnChangeCurrencyValue: PropTypes.func.isRequired,
};

export default CurrencyCard;
