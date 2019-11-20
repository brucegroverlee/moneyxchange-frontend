import handleOnClickConvert from './handleOnClickConvert';

describe('handleOnClickConvert test suit', () => {
  test('should convert it', () => {
    const dispatch = jest.fn();
    const getState = () => ({
      exchanges: [
        { pair: 'USDEUR', rate: 0.5 },
        { pair: 'USDPEN', rate: 1.5 },
      ],
      pages: {
        home: {
          currencyCodeBase: 'USD', 
          currencyValueBase: '$1,000.00', 
          currencyCodeDestination: 'EUR',
        },
      },
    });
    handleOnClickConvert()(dispatch,getState);
    expect(dispatch.mock.calls.length).toBe(1);
    expect(dispatch.mock.calls[0][0].currencyValueDestination).toBe('500');
  });
  
});
