import React, {useState, useCallback, useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat';

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
          backgroundColor: 'red',
        }}>
        <Text>Abdul</Text>
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
