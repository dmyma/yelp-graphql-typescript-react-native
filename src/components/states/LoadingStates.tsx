import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const EmptyState = () => (
    <Text style={styles.text}>Let's start searching</Text>
)

export const LoadingState = () => (
    <Text style={styles.text}>Loading...</Text>
)

export const ErrorState = () => (
    <Text style={styles.text}>Error, please try again</Text>
)

const styles = StyleSheet.create({
    text: {
        flex: 1,
        alignSelf: 'center',
        marginTop: 40,
        fontSize: 18,
        lineHeight: 24,
    }
})
  