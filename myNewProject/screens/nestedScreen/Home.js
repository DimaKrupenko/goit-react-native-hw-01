import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';
import { useState, useEffect } from 'react';

const Home = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts(prevState => [...prevState, route.params]);
    }
  }, [route.params]);
  return (
    <View style={styles.conteiner}>
      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              marginBottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              source={{ uri: item.photo }}
              style={{ width: 350, height: 200 }}
            />
          </View>
        )}
      />
      <Button
        title="go to map"
        onPress={() => {
          navigation.navigate('Map');
        }}
      />
      <Button
        title="go to comments"
        onPress={() => {
          navigation.navigate('Comments');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});

export default Home;
