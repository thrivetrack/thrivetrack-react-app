import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Intro2({ navigation, route }) {
  return (
    <View style={styles.container}>
      <Text>This is {route.params.a}'s profile</Text>
      <Button
        title="Go bafdfdsck!"
        onPress={() => {
          navigation.pop();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
});
