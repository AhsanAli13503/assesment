import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TABS_ROUTES from '../routes';
import {tabs} from './tabs';

const Tab = createBottomTabNavigator();

const MyTabs = ({initialRouteName = TABS_ROUTES.HOME}) => {
  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      {tabs.map((item: any) => {
        return (
          <Tab.Screen
            key={item.name}
            name={item.name}
            component={item.component}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default MyTabs;
