import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CreatePostScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text>CreatePostScreen</Text>
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

export default CreatePostScreen;
