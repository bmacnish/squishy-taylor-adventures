import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { Dimensions, StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapContainer: {
    flex: 1,
    height: 200,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    overflow: 'hidden',
  },
  map: {
    height: 200,
  },
})

export interface Coordinates {
  latitude: number
  longitude: number
}

interface MapProps {
  coordinates: Coordinates
}

export default function Map({ coordinates }: MapProps) {
  const itemWidth = Dimensions.get('window').width - 64
  const { latitude, longitude } = coordinates
  return (
    <View style={styles.container}>
      <View style={styles.mapContainer}>
        <MapView
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={[styles.map, { width: itemWidth }]}
        >
          <Marker coordinate={coordinates} />
        </MapView>
      </View>
    </View>
  )
}
