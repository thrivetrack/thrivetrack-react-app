import React from "react";
import { Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export default function GradientText({ colors, children, style }) {
	return (
		<MaskedView
			maskElement={
				<Text style={[style, { backgroundColor: "transparent" }]}>
					{children}
				</Text>
			}
		>
			<LinearGradient
				start={{ x: 0, y: 0.5 }}
				end={{ x: 1, y: 0.5 }}
				colors={["#9DCEFF", "#8a9dff"]}
			>
				<Text style={[style, { opacity: 0 }]}>{children}</Text>
			</LinearGradient>
		</MaskedView>
	);
}
