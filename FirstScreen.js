import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
const axios = require("axios");

const FirstScreen = ({ navigation }) => {
  const [value, onChangeText] = useState("");

  const pickRandomAsteroidAndMove = () => {
    try {
      axios
        .get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
        .then((response) => {
          data = response.data.near_earth_objects;
          let rand = Math.floor(Math.random() * data.length);
          let val = data[rand].id;
          fetchDataAndMove(val);
        })
        .catch((e) => {
          Alert.alert(`${e}`);
        });
    } catch (e) {
      Alert.alert(`${e}`);
    }
  };

  const fetchDataAndMove = (val) => {
    try {
      axios
        .get(
          `https://api.nasa.gov/neo/rest/v1/neo/${val}?api_key=XEXvkyZvA8JUgfjddI8fKVChSOOv2zdgMeoLl4Xa`
        )
        .then((response) => {
          navigation.navigate("AsteroidInfo", {
            data: response.data,
          });
        })
        .catch((e) => {
          Alert.alert(`Invalid id`);
        });
    } catch (e) {
      Alert.alert(`${e}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Enter asteroid Id</Text>
      <TextInput
        style={{ borderColor: "gray", borderWidth: 1, width: 150 }}
        onChangeText={(text) => onChangeText(text)}
        value={value}
      />
      <Button
        title="Submit"
        onPress={() => {
          fetchDataAndMove(value);
        }}
        disabled={!value}
      />
      <Button
        title="Random Asteroid"
        onPress={() => {
          pickRandomAsteroidAndMove();
        }}
      />
    </View>
  );
};

export default FirstScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
