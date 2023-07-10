import "react-native-gesture-handler";
// This MUST be at the top, it's a special import and nothing can come before it

import { StyleSheet, SafeAreaView } from "react-native";
import Intro from "./src/Intro/Intro";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Intro />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
