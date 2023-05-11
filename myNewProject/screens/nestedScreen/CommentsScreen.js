import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';

import { useSelector } from 'react-redux';
import { firestore } from '../../firebase/config';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  onSnapshot,
} from 'firebase/firestore';

const CommentsScreen = ({ route }) => {
  const { postId } = route.params;
  const [comment, setComment] = useState('');
  const [allComments, setAllComments] = useState([]);

  const { nickName } = useSelector(state => state.auth);
  const createPost = async () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    try {
      const postDocRef = await doc(firestore, 'posts', postId);
      await addDoc(collection(postDocRef, 'comments'), {
        comment,
        nickName,
        date,
        time,
      });
      // await updateDoc(postDocRef, { commentsQuantity: commentsQuantity + 1 });
    } catch (error) {
      console.log('error-message', error.message);
    }
  };

  const getAllPosts = async () => {
    try {
      const postDocRef = await doc(firestore, 'posts', postId);
      onSnapshot(collection(postDocRef, 'comments'), snapshot => {
        setAllComments(
          snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        );
      });
    } catch (error) {
      console.log('error-message.get-comments', error.message);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <View style={styles.conteiner}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={allComments}
          renderItem={({ item }) => (
            <View style={styles.commentConteiner}>
              <Text>{item.nickName}</Text>
              <Text>{item.comment}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <View>
        <View style={styles.inputConteiner}>
          <TextInput style={styles.input} onChangeText={setComment} />
        </View>
        <TouchableOpacity onPress={createPost} style={styles.sendBtn}>
          <Text style={styles.sendLabel}>add post</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  commentConteiner: {
    borderWidth: 1,
    borderColor: '#20b2aa',
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  sendBtn: {
    marginHorizontal: 30,
    height: 40,
    borderWidth: 2,
    borderColor: '#20b2aa',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  sendLabel: {
    color: '#20b2aa',
    fontSize: 20,
  },
  inputConteiner: {
    marginHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#20b2aa',
  },
});

export default CommentsScreen;
