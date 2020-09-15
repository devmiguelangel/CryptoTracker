# Crypto Tracker application

## Getting started

- Setting up the development environment

https://reactnative.dev/docs/environment-setup

- Create a React Native application and update libraries

```bash
npx react-native init CryptoTracker

yarn upgrade --latest --exact
```

- Routing and navigation libraries

```bash
yarn add yarn add @react-navigation/native @react-navigation/stack --latest --exact

yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view --latest --exact
```

- Automatic Linking

```bash
npx pod-install ios
```

```js
// index.js

import 'react-native-gesture-handler';
```
