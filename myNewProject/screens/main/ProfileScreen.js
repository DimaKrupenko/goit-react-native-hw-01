import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, FlatList, Image } from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { authSignOutUser } from '../../redux/auth/authOperations';
import { firestore } from '../../firebase/config';
import { collection, query, onSnapshot, where } from 'firebase/firestore';

const ProfileScreen = () => {
  const [userPosts, setUserPosts] = useState([]);

  const { nickName, userId } = useSelector(state => state.auth);

  const getUserPosts = async () => {
    try {
      const ref = query(
        collection(firestore, 'posts'),
        where('userId', '==', `${userId}`)
      );
      onSnapshot(ref, snapshot => {
        setUserPosts(snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })));
      });
    } catch (error) {
      console.log('error-message', error.message);
    }
  };

  useEffect(() => {
    getUserPosts();
  }, []);

  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(authSignOutUser());
  };

  return (
    <View style={styles.conteiner}>
      <FlatList
        data={userPosts}
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
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
