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
      <Svg
        width={desiredWidth}
        height={desiredHeight}
        fill="none"
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
      >
        <Path
          d="M-13.3066 203.102C-13.3066 203.102 11.4182 206.641 36.4741 288.939C61.5301 371.236 131.069 432 221.763 432C312.458 432 400.613 317.517 400.613 243.065V-7H-13.3066V203.102Z"
          fill="url(#paint0_linear_698_3883)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_698_3883"
            x1={400.613}
            y1={432}
            x2={-151.421}
            y2={391.723}
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
