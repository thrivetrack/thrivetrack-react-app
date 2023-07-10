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
    <LinearGradient
      colors={["#9DCEFF", "#8a9dff"]}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.container}
    >
      <Text style={styles.title}>
        ThriveTrack<Text style={styles.X}>X</Text>
      </Text>
      <Text style={styles.smallText}>Everbyody Can Train</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate("Intro2", { a: "aaa", b: "bbb" });
        }}
      >
        <GradientText colors={["blue", "white"]} style={styles.smallText}>
          Get Started
        </GradientText>
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#1D1617",
    fontSize: 36,
    fontWeight: "700",
  },
  X: {
    color: "white",
    fontSize: 40,
    fontWeight: "900",
  },
  smallText: {
    color: "#7B6F72",
    fontSize: 18,
    fontWeight: "400",
  },
  button: {
    marginTop: 250,
    width: 300,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 99,
    elevation: 3,
    backgroundColor: "white",
  },
});
