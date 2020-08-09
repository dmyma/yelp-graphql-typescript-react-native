import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

import { Business } from '../types'

interface BusinessProps {
  business: Business
  onBusinessTap: Function
}

const BusinessRow: React.FC<BusinessProps> = ({ business, onBusinessTap }) => {
  const {
    id,
    name,
    rating,
    review_count,
    price
  } = business

  return (
    <TouchableOpacity style={styles.row}>
      <Text style={styles.text}
            onPress={() => onBusinessTap(id)}>{`${name}
      ⭐️${rating} - 💬${review_count} - 💰${price ? price : "🤷"}`}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  row: {
    padding: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'gray',
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
  },
})

export default BusinessRow
