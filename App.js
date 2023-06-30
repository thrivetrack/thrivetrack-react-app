import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import Intro from "./src/Intro/Intro";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Button title="Hello"></Button>
			<Intro />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "grey",
		alignItems: "center",
		justifyContent: "center",
		marginTop: 50,
		marginBottom: 50,
	},
});
