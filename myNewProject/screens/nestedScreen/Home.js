import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, Button } from 'react-native';
import { useState, useEffect } from 'react';
import { firestore } from '../../firebase/config';
import {
  collection,
  query,
  doc,
  onSnapshot,
  updateDoc,
} from 'firebase/firestore';

const Home = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const ref = query(collection(firestore, 'posts'));
      onSnapshot(ref, snapshot => {
        setPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      });
    } catch (error) {
      console.log('error-message', error.message);
    }
  };
  useEffect(() => {
    getAllPosts();
  }, []);
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

            <View>
              <Text>{item.comment}</Text>
            </View>
            <View>
              <Button
                title="go to map"
                onPress={() => {
                  navigation.navigate('Map', { location: item.location });
                }}
              />
              <Button
                title="go to comments"
                onPress={() => {
                  navigation.navigate('Comments', { postId: item.id });
                }}
              />
            </View>
          </View>
        )}
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
