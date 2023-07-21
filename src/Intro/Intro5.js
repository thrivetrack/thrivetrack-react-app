import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const WavyBackground = () => {
  const originalWidth = 390;
  const originalHeight = 432;

  // Desired height
  const desiredHeight = 432;
  // Calculate the new width to maintain the aspect ratio
  const desiredWidth = (desiredHeight * originalWidth) / originalHeight;

  return (
    <View>
      <Svg width={390} height={347} viewBox="0 0 390 347" fill="none">
        <Path
          d="M0 118.599C0 118.599 14.3867 76.4389 44.4427 87.378C86.3547 102.606 193.787 346.158 306.523 346.158C364.312 346.158 390 303.599 390 303.599V-27H0V118.599Z"
          fill="url(#paint0_linear_698_3954)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_698_3954"
            x1={390}
            y1={346.158}
            x2={-129.504}
            y2={304.144}
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#92A3FD" />
            <Stop offset={1} stopColor="#9DCEFF" />
          </LinearGradient>
        </Defs>
      </Svg>
    </View>
  );
};

export default function Intro2({ navigation }) {
  return (
    <View style={styles.container}>
      <WavyBackground />
      <Text>Track Your Goals</Text>
      <Text>
        Don't worry if you have trouble determining your goals, We can help you
        determine your goals and track your goals
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    // justifyContent: "center",
    // alignItems: "center",
  },
  image: {
    marginTop: 27,
    marginLeft: 8,
  },
});
