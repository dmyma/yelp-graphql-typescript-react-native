import React, { useState, useEffect } from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

import * as Location from 'expo-location'

import SearchBar from '../components/SearchBar'
import YelpBusiness from '../components/YelpBusiness'

import { Coordinates } from '../types'

interface SearchScreenProps {
  navigation: NavigationScreenProp<any,any>
}

const Search: React.FC<SearchScreenProps> = ({navigation}) => {
  const [searchTerm, onChangeSearchTerm] = useState('')
  const [serchLocation, onChangeSearchLocation] = useState('')
  const [serchCategories, onChangeSearchCategories] = useState('')
    
  const [listView, onChangeListView] = useState(true)

  const [userLocation, onChangeUserLocation] = useState<Coordinates | null>(null)
  
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync()
      if (status !== 'granted') {
        console.log('Permission to access location was denied')
      }

      let { coords } = await Location.getCurrentPositionAsync({})
      onChangeUserLocation({
        latitude: coords.latitude,
        longitude: coords.longitude
      })
    })()
  }, [])

  const onBusinessTap = (id: string) => {
    navigation.navigate('Details', {id: id})
  }
    
  return (
    <View style={styles.container} >
      <SearchBar 
        searchTerm = {searchTerm}
        onChangeSearchTerm = {onChangeSearchTerm}
        serchLocation = {serchLocation}
        onChangeSearchLocation = {onChangeSearchLocation}
        serchCategories = {serchCategories}
        onChangeSearchCategories = {onChangeSearchCategories}
        listView = {listView}
        onChangeListView = {onChangeListView}
      />
        <YelpBusiness 
        searchTerm={searchTerm}
        searchLocation={serchLocation}
        userLocation={userLocation}
        categories={serchCategories}
        listView={listView}
        onBusinessTap={onBusinessTap} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column"
    }
})

export default Search