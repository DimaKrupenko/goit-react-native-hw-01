import React from 'react';
import { Camera, CameraType } from 'expo-camera';
import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CreatePostScreen = () => {
  return (
    <View style={styles.conteiner}>
      <Camera style={styles.camera}>
        <TouchableOpacity onPress={() => {}} style={styles.snapConteiner}>
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  camera: {
    height: 300,
    marginTop: 50,
    alignItems: 'center',
  },
  snap: {
    color: 'white',
  },
  snapConteiner: {
    borderWidth: 1,
    borderColor: 'red',
    marginTop: 200,
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CreatePostScreen;
