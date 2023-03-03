import React from 'react';
import { Camera, CameraType } from 'expo-camera';
import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as MediaLibrary from 'expo-media-library';

const CreatePostScreen = () => {
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState('');

  const takePhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      await MediaLibrary.createAssetAsync(photo.uri);
      setPhoto(photo.uri);
    }
  };

  return (
    <View style={styles.conteiner}>
      <Camera
        style={styles.camera}
        ref={ref => {
          setCameraRef(ref);
        }}
      >
        {photo && (
          <View style={styles.takePhotoConteiner}>
            <Image
              source={{ uri: photo }}
              style={{ height: 200, width: 200 }}
            />
          </View>
        )}

        <TouchableOpacity onPress={takePhoto} style={styles.snapConteiner}>
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
    // height: 300,
    // marginTop: 50,
    flex: 1,
    alignItems: 'center',
  },
  snap: {
    color: 'white',
  },
  snapConteiner: {
    borderWidth: 1,
    borderColor: 'red',
    marginTop: 650,
    width: 70,
    height: 70,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  takePhotoConteiner: {
    position: 'absolute',
    top: 50,
    left: 10,
    borderColor: '#fff',
    borderWidth: 1,
  },
});

export default CreatePostScreen;
