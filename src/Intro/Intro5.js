import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Intro2({ navigation, route }) {
  const { key, name, params } = route;

  return (
    <View style={styles.container}>
      {/* <Text>This is {params.a}'s profile</Text> */}
      <Button title="Go back!" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});
