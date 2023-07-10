import * as React from "react";
import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Intro1 from "./Intro1";
import Intro2 from "./Intro2";
import Intro3 from "./Intro3";
import Intro4 from "./Intro4";
import Intro5 from "./Intro5";

const Tab = createMaterialTopTabNavigator();

const tabScreens = [
  {
    id: 0,
    name: "Intro1",
    component: Intro1,
    // Not sure if I need this
    // screenComponent: (props) => {
    //   return <Intro1 />;
    // },
  },
  {
    id: 1,
    name: "Intro2",
    component: Intro2,
  },
  {
    id: 2,
    name: "Intro3",
    component: Intro3,
  },
  {
    id: 3,
    name: "Intro4",
    component: Intro4,
  },
  {
    id: 4,
    name: "Intro5",
    component: Intro5,
  },
];

const Intro = () => {
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          {tabScreens.map((item, index) => {
            return (
              <Tab.Screen
                key={index}
                name={item.name}
                component={item.component}
                options={{
                  tabBarStyle: {
                    height: 0,
                  },
                }}
              />
            );
          })}
        </Tab.Navigator>
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
