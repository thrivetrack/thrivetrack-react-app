import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Intro1 from "./Intro1";
import Intro2 from "./Intro2";

// This is simply a stack you can push and pop from. You will always be on the most recently pushed stack. LIFO ordering

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<Text>Hello good sir</Text>
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
			<Text>This is {route.params.name}'s profile</Text>
		</View>
	);
};

const Stack = createNativeStackNavigator();

const Intro = () => {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				{/* <Text>Startttttttttttttttttttt</Text> */}
				<Stack.Navigator>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={{ title: "welcome" }}
					></Stack.Screen>
					<Stack.Screen name="Profile" component={ProfileScreen} />
				</Stack.Navigator>
				<Text>End</Text>
			</NavigationContainer>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "red",
		justifyContent: "center",
		width: "100%",
	},
	back: {
		flex: 1,
		backgroundColor: "#f2f2f2",
		padding: 10,
	},
	text: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 10,
	},
});

export default Intro;
