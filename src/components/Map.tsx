import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, {Marker} from 'react-native-maps'

import { Business, Coordinates } from '../types'

interface MapProps {
  businesses: Business[]
  userCoordinates: Coordinates | null
  onBusinessTap: Function
}

const Map: React.FC<MapProps> = ({ businesses, userCoordinates, onBusinessTap }) => (
  <MapView
    showsUserLocation
    showsMyLocationButton
    initialRegion={{
      latitude: (userCoordinates) ? userCoordinates?.latitude : 0,
      longitude: (userCoordinates) ? userCoordinates?.longitude  : 0,
      latitudeDelta: .25,
      longitudeDelta: .25,
    }}
    style={styles.flex}
    >
    {businesses && businesses.map((business) => {
      const {id, name, rating, review_count, price, coordinates} = business

      return (
        <Marker
          key={id}
          coordinate={coordinates}
          title={name}
          description={`⭐️${rating} - 💬${review_count} - 💰${price ? price : "🤷"}`}
          onCalloutPress={() => onBusinessTap(id)}
        />
      )
    })}
  </MapView>
)

const styles = StyleSheet.create({
  flex: {
    flex: 1
  },
})

export default Map
