import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// Stacks
import CoinStack from 'CryptoTracker/src/containers/CoinStack';

const App = () => {
  return (
    <NavigationContainer>
      <CoinStack />
    </NavigationContainer>
  );
};

export default App;
