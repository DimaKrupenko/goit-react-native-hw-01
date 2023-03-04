import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => {
  return (
    <View style={styles.conteiner}>
      <MapView
        style={styles.map}
        initialRegion={{
          longitude: 30.7475568,
          latitude: 46.4445025,
          latitudeDelta: '0.1',
          longitudeDelta: '0.1',
        }}
      >
        <Marker coordinate={{ longitude: 30.7475568, latitude: 46.4445025 }} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
});

export default MapScreen;
