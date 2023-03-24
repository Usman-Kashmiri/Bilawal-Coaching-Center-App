import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import WebView from 'react-native-webview'

function App() {

  return <WebView source={{ uri: 'https://www.bilawalcoachingcenter.com/' }} />;
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
  }
});

export default App;
