import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CatalogScreen from './src/components/screens/CatalogScreen';
import ItineraryScreen from './src/components/screens/ItineraryScreen';

export default StackNavigator({
  home: { screen: CatalogScreen },
  itinerary: { screen: ItineraryScreen }
})
