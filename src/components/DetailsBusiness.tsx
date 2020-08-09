import React from "react"
import { Image, ImageSourcePropType, StyleSheet, Text, View } from 'react-native'

import { useQuery } from "@apollo/react-hooks"
import { business_query } from "../queries"

import { BusinessData } from '../types'

interface DetailsProps {
    id: string
}

const DetailsBusiness: React.FC<DetailsProps> = ({id}) => {
    const { data } = useQuery<BusinessData>(business_query, {
        variables: {id: id}
    })

    let view = data ? 
        ( <View style={ styles.container }>
            <Text style={ styles.text }>{`${data.business.name}`}</Text>
            
            <Image source={data.business.photos as ImageSourcePropType} style = {styles.image} />

            <Text style= { styles.review }>{data.business.reviews[0].text}</Text>
            <Text style= { styles.review }>{data.business.reviews[1].text}</Text>
            <Text style= { styles.review }>{data.business.reviews[2].text}</Text>
            
        </View>) :
        <Text>Loading...</Text>

    return view
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "95%",
        alignItems: "flex-start",
        flexDirection: "column"
    },
    text: {
        alignSelf: 'center',
        fontSize: 24,
        lineHeight: 24,
        paddingVertical: 10
    },
    image: {
        height: 300,
        width: 300,
        resizeMode: 'stretch',
        alignSelf: 'center',
        margin: 5,
        paddingVertical: 10
    },
    review: {
        fontSize: 14,
        lineHeight: 14,
        paddingBottom: 10
    }
})
  

export default DetailsBusiness;