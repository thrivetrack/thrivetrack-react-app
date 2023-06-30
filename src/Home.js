import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
	return (
		<View className={styles.container}>
			<h1>home</h1>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#25332e",
		alignItems: "center",
		justifyContent: "center",
	},
});
