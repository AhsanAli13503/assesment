import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from './App/navigation/MyTabs/MyTabs';

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
