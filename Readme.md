# Search businesses on yelp

### Instructions
- Install [brew](https://brew.sh/)
- Install yarn `brew install yarn`
- Get [node](https://nodejs.org/en/download/)
- Install expo-cli `npm install -g expo-cli`
- Install react-native-cli`npm i -g react-native-cli`
- Clone repo
- Install dependecies `yarn`
- Install node modules `expo install`
- Star expo `expo start`
- Run iOS simulator `i`

### App Features
#### View businesses on search:
- key words, user current location as a default location search
- categories
- location, has higher priority than current location
#### User can :
- view the search result in the list
- view the search result on the map
- toggle between views
#### MapView
- on business tap shows calout with business details
- on callout tap navigates to details screen
#### ListView
- on business tap shows details screen

### Improvements (pros and cons)
- During this session there are a lot of tradeofs have been made due to time consrtaints 
- Save varibles in .env file, but since I am sharing the full code, I would just add it in the config file 🤷
- Search only on button tap and do not send request every single time, saves a lot of 💸
- I would add Context api or Redux to manage state a bit better instead of props drilling(ex. onBusinessTap)
- Map Autofocus on location update
- Error, loading, state handling
- On deatils screen review as a list
- Add tests, because we ❤️ tests =) 