import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import {API_URL, API_TOKEN} from '@env';
const App = () => {
  return (
    <SafeAreaView
      style={{
        flexGrow: 1,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '700',
          }}>
          APK GENERATE FROM GITHUB ACTION
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '700',
            marginVertical: 10,
            textDecorationLine: 'underline',
          }}>
          VALUE FROM .ENV FILE
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: 'red',
            marginVertical: 10,
          }}>
          API_URL ::{API_URL}
        </Text>

        <Text
          style={{
            fontSize: 18,
            fontWeight: '500',
            color: 'red',
            marginVertical: 10,
          }}>
          API_TOKEN ::{API_TOKEN}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default App;
