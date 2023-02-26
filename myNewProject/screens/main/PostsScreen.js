import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PostScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Text>PostScreen</Text>
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

export default PostScreen;
