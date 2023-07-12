import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import GradientText from "../Utility/GradientText";

export default function Intro1({ navigation, nextScreenName }) {
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <GradientText colors={["#9DCEFF", "#8a9dff"]} style={styles.title}>
          <Text>ThriveTrack</Text>
        </GradientText>
        <Text style={styles.smallText}>Everbyody Can Train</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Intro2");
        }}
        style={styles.button}
      >
        <LinearGradient
          colors={["#9DCEFF", "#8a9dff"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={styles.buttonGradient}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "white",
  },
  title: {
    color: "#1D1617",
    fontSize: 36,
    fontWeight: "700",
  },
  smallText: {
    color: "#7B6F72",
    fontSize: 18,
    fontWeight: "400",
  },
  button: {
    marginTop: 250,
  },
  buttonGradient: {
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 99,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 15,
  },
});
