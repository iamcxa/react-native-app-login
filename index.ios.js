/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import LoginView from './src/AppLogin';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

class app extends Component {
  render() {
    return (
      <View style={styles.container}>
        <LoginView />
      </View>
    );
  }
}

AppRegistry.registerComponent('app', () => app);
