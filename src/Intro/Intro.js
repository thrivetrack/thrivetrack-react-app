import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro1 from "./Intro1";
import Intro2 from "./Intro2";

// This is simply a stack you can push and pop from. You will always be on the most recently pushed stack. LIFO ordering

const ProfileScreen = ({ navigation, route }) => {
  return (
    <View style={styles.test}>
      <Text>This is {route.params.a}'s profile</Text>
      <Button
        title="Go back!"
        onPress={() => {
          navigation.pop();
        }}
      />
    </View>
  );
};

const stackNavigItems = [
  {
    id: 0,
    name: "Intro1",
    component: Intro1,
    screenComponent: (props) => {
      return <Intro1 />;
    },
    headerShown: false,
  },
  {
    id: 1,
    name: "Intro2",
    component: ProfileScreen,
    screenComponent: (props) => {
      return <ProfileScreen />;
    },
    headerShow: true,
  },
];

const Stack = createNativeStackNavigator();

const Intro = () => {
  // const pages = [ProfileScreen];

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {stackNavigItems.map((item, index) => {
            return (
              <Stack.Screen
                key={index}
                name={item.name}
                component={item.component}
                options={{
                  title: item.title,
                  headerShown: false,
                }}
              />
            );
          })}
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "white",
    // justifyContent: "center",
    width: "100%",
    height: "100%",
  },
  test: {
    display: "flex",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});

export default Intro;
