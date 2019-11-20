import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import getExchanges from './actions/getExchanges';
import getCurrencies from './actions/getCurrencies';
import handleOnChangeCurrencyCodeBase from './actions/handleOnChangeCurrencyCodeBase';
import handleOnChangeCurrencyValueBase from './actions/handleOnChangeCurrencyValueBase';
import handleOnChangeCurrencyCodeDestination from './actions/handleOnChangeCurrencyCodeDestination';
import handleOnClickConvert from './actions/handleOnClickConvert';

import './home.scss';
import HomeHtml from './home.html.jsx';
import homeStrings from './home.strings.js';

const REFRESH_EXCHANGES = 10 * 60 * 1000;

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getExchanges, getCurrencies } = this.props;
    getExchanges();
    getCurrencies();

    setInterval((getExchanges) => {
      getExchanges();
    }, REFRESH_EXCHANGES, getExchanges);
  }

  render() {
    const { 
      language,
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
    } = this.props;
    const strings = homeStrings[language];
    return(
      <div className="home-container">
        <HomeHtml
          strings={strings}
          currencies={currencies}
          exchanges={exchanges}
          currencyCodeBase={currencyCodeBase}
          currencyValueBase={currencyValueBase}
          currencyCodeDestination={currencyCodeDestination}
          currencyValueDestination={currencyValueDestination}
          handleOnChangeCurrencyCodeBase={handleOnChangeCurrencyCodeBase}
          handleOnChangeCurrencyValueBase={handleOnChangeCurrencyValueBase}
          handleOnChangeCurrencyCodeDestination={handleOnChangeCurrencyCodeDestination}
          handleOnClickConvert={handleOnClickConvert}
        />
      </div>
    );
  }
}

HomeContainer.propTypes = {
  language: PropTypes.string.isRequired,
  currencies: PropTypes.array.isRequired,
  exchanges: PropTypes.array.isRequired,
  currencyCodeBase: PropTypes.string.isRequired,
  currencyValueBase: PropTypes.any.isRequired,
  currencyCodeDestination: PropTypes.string.isRequired,
  currencyValueDestination: PropTypes.any.isRequired,
  getExchanges: PropTypes.func.isRequired,
  getCurrencies: PropTypes.func.isRequired,
  handleOnChangeCurrencyCodeBase: PropTypes.func.isRequired,
  handleOnChangeCurrencyValueBase: PropTypes.func.isRequired,
  handleOnChangeCurrencyCodeDestination: PropTypes.func.isRequired,
  handleOnClickConvert: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  language: state.language,
  currencies: state.currencies,
  exchanges: state.exchanges,
  currencyCodeBase: state.pages.home.currencyCodeBase,
  currencyValueBase: state.pages.home.currencyValueBase,
  currencyCodeDestination: state.pages.home.currencyCodeDestination,
  currencyValueDestination: state.pages.home.currencyValueDestination,
});

const mapDispatchToProps = dispatch => ({
  getExchanges: () => dispatch(getExchanges()),
  getCurrencies: () => dispatch(getCurrencies()),
  handleOnChangeCurrencyCodeBase: (currencyCode) => dispatch(handleOnChangeCurrencyCodeBase(currencyCode)),
  handleOnChangeCurrencyValueBase: (currencyValue) => dispatch(handleOnChangeCurrencyValueBase(currencyValue)),
  handleOnChangeCurrencyCodeDestination: (currencyCode) => dispatch(handleOnChangeCurrencyCodeDestination(currencyCode)),
  handleOnClickConvert: () => dispatch(handleOnClickConvert()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);