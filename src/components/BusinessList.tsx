import React from 'react'
import { FlatList, Text, StyleSheet } from 'react-native'

import { Business } from '../types'

import BusinessRow from './BusinessRow'

interface ListProps {
  businesses: Business[]
  onBusinessTap: Function
}

interface ItemProps {
  item: Business
}

const renderEmptyState = () => (
  <Text style={[styles.text, styles.emptyState]}>No search results</Text>
)

const BusinessList: React.FC<ListProps> = ({ businesses, onBusinessTap }) => {
 
  const renderItem = ({item}: ItemProps) => {
    return <BusinessRow business={item} onBusinessTap={onBusinessTap}/>
  }

  return (
    <FlatList
      style={styles.flex}
      keyExtractor={(item) => `${item.id}`}
      data={businesses}
      ListEmptyComponent={renderEmptyState}
      renderItem={renderItem}

    />
  )
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  emptyState: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 40,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
  },
})

export default BusinessList
