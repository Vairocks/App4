import React from "react";
import { View, Text, Button } from "react-native";

const AsteroidInfo = ({ navigation, route }) => {
  const data = route.params.data;
  return (
    <View style={{ justifyContent: "center" }}>
      <Text>Name : {data.name}</Text>
      <Text>nasa_jpl_url : {data.nasa_jpl_url}</Text>
      <Text>
        is_potentially_hazardous_asteroid:{" "}
        {data.is_potentially_hazardous_asteroid ? "true" : "false"}
      </Text>
    </View>
  );
};

export default AsteroidInfo;
