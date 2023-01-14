import React from "react";
import { View , Text, Image, FlatList } from "react-native";
import { AuthContext } from "../../providers/AuthProvider";
import styles from "./RecipeDescription.style";

const RecipeDescription = (props) => {
  const {ingredients, header, imageLink} = props.route.params;
  return (
    <AuthContext.Consumer >
      {(auth) => (
        <View>
            <Text style={styles.header}>{header}</Text>
            <View style={styles.content}>
                <Image style={styles.image} source={{uri: imageLink}} />
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>Ingredients: </Text>
                <FlatList 
                style={{width:'100%'}}
                contentContainerStyle={{justifyContent: "center"}}
                data = {ingredients}
                renderItem={({item})=>
                <View>
                    <Text style={styles.text}>{item}</Text>
                </View>
                }
            />
            </View>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

export default RecipeDescription;
