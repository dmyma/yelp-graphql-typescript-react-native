import Coordinates from './Coordinates'
import Location from './Location'
import Category from './Category'
import Review from './Review'

export default interface Business {
  id: string
  name: string
  rating: number
  review_count: number
  price: number
  photos: string
  reviews: Review[]
  location: Location
  coordinates: Coordinates
  categories: Category[]
}