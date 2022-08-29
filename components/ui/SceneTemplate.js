import { ImageBackground, StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import AppName from "./AppName";
import Colors from "../../utilities/constants/colors";

const SceneTemplate = ({ children }) => (
	<LinearGradient colors={Colors.gradientBackground}>
		<ImageBackground
			source={require("../../assets/images/bg_batman.jpg")}
			imageStyle={styles.backgroundImage}
			style={styles.background}
			resizeMode="cover"
		>
			<AppName />
			<View style={styles.scene}>{children}</View>
		</ImageBackground>
	</LinearGradient>
);

const styles = StyleSheet.create({
	background: {
		height: "100%"
	},
	backgroundImage: {
		opacity: 0.2
	},
	scene: {
		flex: 1,
		flexDirection: "column",
		padding: 4,
		justifyContent: "space-evenly"
	}
});

export default SceneTemplate;