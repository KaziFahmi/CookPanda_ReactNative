import React, { useEffect, useState } from "react";
import { FlatList, View, Button } from "react-native";
import styles from "./HomeScreen.style"
import { AuthContext } from "../../providers/AuthProvider";
import Card from "../../components/Card/Card";
import APIInfo from "../../core/API";
import { TouchableOpacity } from "react-native-gesture-handler";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomeScreen = (props) => {
  const [recipes, setRecipes] = useState([]);
  const [clicked, setClicked] = useState(false);
  const [searchPhrase, setSearchPhrase] = useState('');
  useEffect(() =>{
    // setQuery('biriyani');
    let li = []
    console.log(searchPhrase)
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchPhrase}&app_id=${APIInfo.id}&app_key=${APIInfo.key}`,{method: "GET"})
    .then((response) => response.json())
      .then((json) => {
        setRecipes(json["hits"]);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [searchPhrase])
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View style={styles.background}>
          <View style={styles.searchBar}>
            <TouchableOpacity onPress={() => setClicked(true)}>
              <SearchBar
                clicked={clicked}
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                setClicked={setClicked}
              />
            </TouchableOpacity>
            <Button
            title="log out"
            style={styles.logoutButton}
            onPress={() => {
              auth.setIsLoggedIn(false);
            }}
          />
          </View>

          <FlatList 
            style={{width:'100%'}}
            contentContainerStyle={{justifyContent: "center"}}
            data = {recipes}
            renderItem={({item})=>
              <TouchableOpacity onPress={() => props.navigation.navigate('RecipeDescription', {header: item.recipe.label, imageLink: item.recipe.images.SMALL.url, ingredients: item.recipe.ingredientLines})}>
                <Card style={styles.card}
                  header={item.recipe.label}
                  imageLink={item.recipe.images.SMALL.url}
                />
              </TouchableOpacity>
            }
          />

        </View>
      )}
    </AuthContext.Consumer>
  );
};

export default HomeScreen;
