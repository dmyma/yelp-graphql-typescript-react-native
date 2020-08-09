import React from 'react'
import { useQuery } from "@apollo/react-hooks"

import search_query from "../queries/search_query"

import { Business, SearchData,Coordinates } from '../types'

import BusinessList from './BusinessList'
import Map from './Map'
import { EmptyState, ErrorState, LoadingState } from '../components/states/LoadingStates'

interface SearchProps {
    searchTerm: string
    searchLocation: string
    userLocation: Coordinates | null
    categories: string
    listView: boolean
    onBusinessTap: Function
}

const YelpBusiness: React.FC<SearchProps> = ({searchTerm,  searchLocation, userLocation, categories, listView, onBusinessTap}) => {
    
    const variables = {
        term: searchTerm,
        location: searchLocation,
        latitude: (searchLocation && userLocation) ? null : userLocation?.latitude, 
        longitude: (searchLocation && userLocation) ? null : userLocation?.longitude,
        categories: categories
    }

    if (!searchTerm) return <EmptyState />
    
    const { data, error, loading } = useQuery<SearchData>(search_query, {
        variables: variables
    })

    if (loading) return <LoadingState />
    if (error ) return <ErrorState />

    const businesses: Business[] = (data) ? data.search.business : []
    const view = listView ? 
                            (<BusinessList businesses={businesses}
                                           onBusinessTap={onBusinessTap}/>) :
                            (<Map businesses={businesses} 
                                  userCoordinates={userLocation}
                                  onBusinessTap={onBusinessTap}/>)
    return view
}

export default YelpBusiness
