import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro1 from "./Intro1";
import Intro2 from "./Intro2";

// This is simply a stack you can push and pop from. You will always be on the most recently pushed stack. LIFO ordering

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Jane"
        onPress={() => navigation.push("Profile", { name: "Jane" })}
      />
    </View>
  );
};
const ProfileScreen = ({ navigation, route }) => {
  return (
    <View>
      <Text>This is {route.params.a}'s profile</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();

const Intro = () => {
  const pages = [Intro1, Intro2];
  {
    /* {pages.map((page, index) => {
            <Stack.Screen name={index} component={page}></Stack.Screen>;
          })} */
  }
  {
    /* <Stack.Screen
            name="Intro 1"
            component={Intro1}
            // options={{ title: "Intro 1", headerShown: true }}
          ></Stack.Screen> */
  }

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Intro 1"
            component={Intro1}
            // options={{ title: "Intro 1", headerShown: true }}
          ></Stack.Screen>
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "red",
    // justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  home: {
    backgroundColor: "red",
  },
});

export default Intro;
