import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const MapScreen = ({ route }) => {
  const { longitude, latitude } = route.params.location;
  return (
    <View style={styles.conteiner}>
      <MapView
        style={styles.map}
        initialRegion={{
          longitude,
          latitude,
          latitudeDelta: '0.1',
          longitudeDelta: '0.1',
        }}
      >
        <Marker coordinate={{ longitude, latitude }} />
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
