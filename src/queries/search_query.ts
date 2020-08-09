import gql from 'graphql-tag'

const search_query = gql`
    query search($term: String!,
                 $location: String,
                 $latitude: Float,
                 $longitude: Float,
                 $categories: String) {
        search(term: $term,
               location: $location,
               latitude: $latitude,
               longitude: $longitude,
               categories: $categories) {
            business {
                id
                name
                rating
                review_count
                price
                location {
                    city
                }
                coordinates {
                    latitude
                    longitude
                }
                categories {
                    title
                }
            }
        }
    }
  `

  export default search_query