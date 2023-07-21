import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Image } from "react-native";
import { Svg, Path, Defs, LinearGradient, Stop } from "react-native-svg";

const WavyBackground = () => {
  return (
    <View>
      <Svg width={390} height={433} viewBox="0 0 390 433" fill="none">
        <Path
          d="M390 263.901C390 263.901 314.666 426.894 197.763 432.5C80.8601 438.105 -2 377.512 -2 377.512V-10H390V263.901Z"
          fill="url(#paint0_linear_698_3705)"
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_698_3705"
            x1={390}
            y1={432.866}
            x2={-133.129}
            y2={397.035}
            gradientUnits="userSpaceOnUse"
          >
            <Image
              style={styles.image}
              source={require("../../public/images/frame.png")}
            ></Image>
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
