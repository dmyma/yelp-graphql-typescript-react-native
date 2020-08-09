import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"

import { Details, Search } from "../screens"

const SearchStack = createStackNavigator({
  Search,
  Details
})

export default createAppContainer(SearchStack)