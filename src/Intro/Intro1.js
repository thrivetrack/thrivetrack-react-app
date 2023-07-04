import React from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Intro1({ navigation, nextScreenName }) {
  return (
    <View style={styles.container}>
      <LinearGradient colors={["#92A3FD", "#9DCEFF"]} style={styles.container}>
        <Text style={styles.title}>
          ThriveTrack<Text style={styles.X}>X</Text>
        </Text>
        <Text style={styles.smallText}>Everbyody Can Train</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.push("Profile", { a: "aaa", b: "bbb" })}
        >
          <LinearGradient
            colors={["#92A3FD", "#9DCEFF"]}
            style={styles.container}
          >
            <Text>Hello man</Text>
          </LinearGradient>
        </Pressable>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    // padding: "371px 30px 40px 30px",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: "0",
    // gap: "271px",
    // borderRadius: "40px",
  },
  title: {
    color: "#1D1617",
    fontSize: 36,
    fontFamily: "Poppins",
    fontWeight: "700",
    lineHeight: "normal",
  },
  X: {
    color: "white",
    fontSize: 40,
    fontWeight: "900",
  },
  smallText: {
    color: "#7B6F72",
    fontSize: 18,
    fontFamily: "Poppins",
    fontWeight: "400",
    lineHeight: "normal",
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
