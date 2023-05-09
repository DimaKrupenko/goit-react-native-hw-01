import React from 'react';
import { useSelector } from 'react-redux';
import { Camera } from 'expo-camera';
import { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as Location from 'expo-location';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { firestore, storage } from '../../firebase/config';
import { collection, addDoc } from 'firebase/firestore';

const CreatePostScreen = ({ navigation }) => {
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState('');
  const [comment, setComment] = useState('');
  const [location, setLocation] = useState(null);

  const { userId, nickName } = useSelector(state => state.auth);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        console.log('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const takePhoto = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      // const location = await Location.getCurrentPositionAsync({});
      await MediaLibrary.createAssetAsync(photo.uri);
      setPhoto(photo.uri);
    }
  };

  const sendPhoto = async () => {
    await uploadPostToServer();
    navigation.navigate('Home', { photo });
  };

  const uploadPostToServer = async () => {
    try {
      const photo = await uploadPhotoToServer();
      const createPost = await addDoc(collection(firestore, 'posts'), {
        photo,
        comment,
        location: location.coords,
        userId,
        nickName,
      });
    } catch (error) {
      console.log('error-message', error.message);
    }
  };

  const uploadPhotoToServer = async () => {
    const responce = await fetch(photo);
    const file = await responce.blob();

    const uniquePostId = Date.now().toString();

    const imageRef = ref(storage, `photos/${uniquePostId}`);
    const res = await uploadBytes(imageRef, file);

    const processedPhoto = await getDownloadURL(imageRef);
    // console.log(processedPhoto);
    return processedPhoto;
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
              style={{ height: 200, width: 200, borderRadius: 10 }}
            />
          </View>
        )}
        <TouchableOpacity onPress={takePhoto} style={styles.snapConteiner}>
          <Text style={styles.snap}>SNAP</Text>
        </TouchableOpacity>
      </Camera>
      <View>
        <View style={styles.inputConteiner}>
          <TextInput
            style={styles.input}
            placeholder="Название ..."
            onChangeText={setComment}
          />
        </View>
        <TouchableOpacity onPress={sendPhoto} style={styles.sendBtn}>
          <Text style={styles.sendLabel}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
  },
  camera: {
    // height: 50,
    marginTop: 40,
    // marginBottom: 50,
    marginHorizontal: 10,
    borderRadius: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  snap: {
    color: 'white',
  },
  snapConteiner: {
    borderWidth: 1,
    borderColor: 'red',
    marginBottom: 10,
    width: 70,
    height: 70,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  takePhotoConteiner: {
    position: 'absolute',
    top: 50,
    left: 10,
    borderRadius: 10,
    borderColor: '#fff',
    borderWidth: 1,
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
  },
  sendLabel: {
    color: '#20b2aa',
    fontSize: 20,
  },
  inputConteiner: {
    marginHorizontal: 10,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#fff',
    borderBottomColor: '#20b2aa',
  },
});

export default CreatePostScreen;
