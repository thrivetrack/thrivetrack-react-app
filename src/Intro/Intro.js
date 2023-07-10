import * as React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Intro1 from "./Intro1";
import Intro2 from "./Intro2";

// This is simply a stack you can push and pop from. You will always be on the most recently pushed stack. LIFO ordering

const Stack = createStackNavigator();

const stackScreens = [
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
    component: Intro2,
    screenComponent: (props) => {
      return <Intro2 />;
    },
    headerShow: true,
  },
];

const Intro = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          {stackScreens.map((item, index) => {
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
    flex: 1,
    backgroundColor: "blue",
  },
});

export default Intro;
