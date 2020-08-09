import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

import { DetailsBusiness } from '../components'

interface DetailsScreenProps {
    navigation: NavigationScreenProp<any,any>
}

const Details: React.FC<DetailsScreenProps> = ({navigation}) => {
    return (
        <View style= { styles.container } >
            <DetailsBusiness id={navigation.state.params.id}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Details
