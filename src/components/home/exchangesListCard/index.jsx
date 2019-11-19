import React from 'react';
import PropTypes from 'prop-types';

const ExchangesListCard = ({exchanges}) => {
  const rows = exchanges.map((exchange) => {
    return(
      <div key={exchange.pair}>
        {exchange.pair}: {exchange.rate}
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
