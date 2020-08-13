import React from 'react';
import { createDrawerNavigator} from '@react-navigation/drawer';

import Home from '../components/Home';
import Perfil from '../components/Perfil';
import Profile from '../components/Profile';

const AppDrawer = createDrawerNavigator();

function AppRoutes(){
  return (
    <AppDrawer.Navigator
      drawerStyle={{
        backgroundColor: '#171717'
      }}
      drawerContentOptions={{
        labelStyle: {
          fontWeight: 'bold',
        },
        activeTintColor: '#fff',
        activeBackgroundColor: '#00b94a',
        inactiveBackgroundColor: '#000',
        inactiveTintColor: '#ddd',
        itemStyle: {
          marginVertical: 4
        }
      }}
    >
      <AppDrawer.Screen name='Home' component={Home} />
      <AppDrawer.Screen name='Perfil' component={Perfil} />
      <AppDrawer.Screen name='Profile' component={Profile} />
    </AppDrawer.Navigator>
  );
}

export default AppRoutes;