import React from "react";
import { View, Image } from "react-native";
import { Text } from "react-native";
import styles from "./Card.style";

const Card = (props) => {
    const {imageLink, header, ingredients, modalVisible} = props;
    return(
        <View style={styles.card}>
            <View style={styles.cardContent}>
                <Text style={styles.header}>{header}</Text>
                <Image style={styles.image} source={{uri: imageLink}} />
            </View>
        </View>
    )
}

export default Card;