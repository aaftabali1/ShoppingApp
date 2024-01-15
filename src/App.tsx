import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import Home from './screens/Home';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name={'home'} component={Home} />
          <Stack.Screen name={'productDetails'} component={ProductDetails} />
          <Stack.Screen name={'cart'} component={Cart} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
