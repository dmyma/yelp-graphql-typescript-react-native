import React from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

interface SearchBarProps {
    searchTerm: string,
    onChangeSearchTerm: Function,
    serchLocation: string,
    onChangeSearchLocation: Function,
    serchCategories: string,
    onChangeSearchCategories: Function,
    listView: boolean,
    onChangeListView: Function
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({searchTerm,
    onChangeSearchTerm,
    serchLocation,
    onChangeSearchLocation,
    serchCategories,
    onChangeSearchCategories,
    listView,
    onChangeListView}) => {
    return (
        <View style={styles.container}>
            <View style={styles.section}> 
                <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeSearchTerm(text)}
                placeholder="What are you looking for?"
                value={searchTerm} />
                <TextInput
                style={styles.textInput}
                onChangeText={text => onChangeSearchLocation(text)}
                placeholder="Where?"
                value={serchLocation} />
                <TextInput
                style={styles.textInput}
                placeholder="Categories"
                onChangeText={text => onChangeSearchCategories(text)}
                value={serchCategories} />
            </View>


            <View style={styles.group}>
                <TouchableOpacity
                    style={[
                    styles.button,
                    styles.first,
                    listView ? styles.active : null
                    ]}
                    onPress={() => onChangeListView(true)}
                >
                    <Text
                    style={[
                        styles.buttonText,
                        listView ? styles.activeText : null
                    ]}
                    >
                    List View
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[
                    styles.button,
                    styles.last,
                    !listView ? styles.active : null
                    ]}
                    onPress={() => onChangeListView(false)}
                >
                    <Text
                    style={[
                        styles.buttonText,
                        !listView ? styles.activeText : null
                    ]}
                    >
                    Map View
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
  }
  
  const styles = StyleSheet.create({
        container: {
            flex: .45,
            flexDirection: "column",
            alignItems: 'center',
        },
        textInput: {
          height: 34,
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: 'gray',
          paddingHorizontal: 10,
          margin: 5,
        },
        button: {
          height: 40,
          padding: 10,
          alignContent: "center",
          alignItems: "center"
        },
        buttonText: {
          textAlign: "center",
          fontWeight: "500"
        },
        section: {
          flexDirection: "column",
          alignSelf: 'stretch',
        },
        group: {
          flexDirection: "row",
          borderRadius: 14,
          borderWidth: 1,
          borderColor: "#FF7657",
        },
        active: {
          backgroundColor: "#FF7657"
        },
        activeText: {
          color: "#FFF"
        },
        first: {
          borderTopLeftRadius: 13,
          borderBottomLeftRadius: 13
        },
        last: {
          borderTopRightRadius: 13,
          borderBottomRightRadius: 13
        },
  })
  
  export default SearchBar