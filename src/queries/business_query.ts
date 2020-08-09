import gql from 'graphql-tag'

const business_query = gql`
    query business($id: String!) {
        business(id: $id) {
            id
            name
            rating
            review_count
            price
            photos
            reviews {
                text
            }
        }
    }
  `

  export default business_query