import { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

export default function App() {
  const [data, setData] = useState("");

  // Default to the "prod" URL
  var url = "https://api.sampleapis.com/beers/ale";

  const getURL = () => {
    // switch to the mock URL if in the dev env
    if (process.env["NODE_ENV"] === "development") {
      url = "http://localhost:3000/data";
    }
  };

  const getData = async () => {
    const resp = await fetch(url);
    const json = await resp.json();
    setData(json[0]);
  };

  useEffect(() => {
    getURL();
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
