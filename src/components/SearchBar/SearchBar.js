import React from "react";
import { TextInput, View, Keyboard, Button } from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";
import styles from "./SearchBar.style";

const SearchBar = ({clicked, searchPhrase, setSearchPhrase, setClicked}) => {
  return (
    <View style={styles.container}>
      <View
        style={ clicked ? styles.searchBar__clicked : styles.searchBar__unclicked}
      >
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: 1 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => setClicked(true)}
        />
        {clicked && (
          <Entypo name="cross" size={20} color="black" style={{ padding: 1 }} onPress={() => {
              setSearchPhrase("");
              Keyboard.dismiss();
              setClicked(false);
          }}/>
        )}
      </View>
    
    </View>
  );
};
export default SearchBar;