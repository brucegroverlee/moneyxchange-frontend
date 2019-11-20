import React from 'react';
import PropTypes from 'prop-types';

import getFormat from './function/getFormat';

import './exchangesListCard.scss';

const ExchangesListCard = ({exchanges}) => {
  const rows = exchanges.map((exchange) => {
    return(
      <div key={exchange.pair}>
        {exchange.pair}: {getFormat(exchange.rate)}
      </div>
    );
  });
  return(
    <div className="exchanges-list-card-component">
      {rows}
    </div>
  );
};

ExchangesListCard.propTypes = {
  exchanges: PropTypes.array.isRequired,
};

export default ExchangesListCard;
