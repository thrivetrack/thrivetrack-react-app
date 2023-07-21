import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const WavyBackground = () => {
  const originalWidth = 390;
  const originalHeight = 219;

  // Desired height
  const desiredHeight = 219;
  // Calculate the new width to maintain the aspect ratio
  const desiredWidth = (desiredHeight * originalWidth) / originalHeight;

  return (
    <View>
      <Svg
        width={desiredWidth}
        height={desiredHeight}
        viewBox={`0 0 ${originalWidth} ${originalHeight}`}
        fill="none"
      >
        <Path
          d="M0 214.043C0 214.043 61.8107 90.4374 126.915 90.4374C192.019 90.4374 237.605 218.742 302.709 218.742C367.813 218.742 360.603 151.957 390 151.957V-40H0V214.043Z"
          fill="url(#paint0_linear_698_3798)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_698_3798"
            x2={390}
            y1={218.742}
            x1={-125.884}
            y2={158.571}
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
