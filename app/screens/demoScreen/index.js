import React, {useEffect} from 'react';
import {Text, Pressable, FlatList, View} from 'react-native';
import * as styles from './styles';
import {useQuery} from '@apollo/client';
import {CONTINENT_QUERY} from '../../gql/Query';
export const DemoScreen = () => {
  const {data, loading} = useQuery(CONTINENT_QUERY); //execute query

  // eslint-disable-next-line react/no-unstable-nested-components
  const ContinentItem = ({continent}) => {
    const {name} = continent; //get the name of continent
    return (
      <Pressable>
        <Text />
        <Text style={styles.title()}>{name}</Text>
        {/* //display name of continent */}
      </Pressable>
    );
  };

  useEffect(() => {}, [data]);
  if (loading) {
    return <Text>Fetching data...</Text>; //while loading return this
  }

  return (
    <FlatList
      data={data.continents}
      ListHeaderComponent={
        <View>
          <Text>Continent List</Text>
        </View>
      }
      renderItem={({item}) => <ContinentItem continent={item} />}
      keyExtractor={(item, index) => index}
    />
  );
};
