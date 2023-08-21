import React, {useState, useCallback, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';
import {API_URL, API_TOKEN} from '@env';
const App = () => {
  const user = {
    _id: 1,
    name: 'John',
    avatar: 'https://placeimg.com/140/140/any',
  };

  // Initial chat messages state
  const [messages, setMessages] = useState([]);

  // Helper function to handle sending messages
  const onSend = useCallback((newMessages = []) => {
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessages));
  }, []);

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
        <GiftedChat
          messages={messages}
          user={user}
          // onSend={messages => onSend(messages)}
          onSend={messages => console.log('message=>', messages)}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
