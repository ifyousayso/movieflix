import { ImageBackground, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import COLORS from "../../utilities/constants/colors";

const styles = StyleSheet.create({
	background: {
		height: "100%"
	},
	backgroundImage: {
		opacity: 0.2
	}
});

export default ({ children }) => (
	<LinearGradient colors={COLORS.gradientBackground}>
		<ImageBackground
			source={require("../../assets/images/Batman.jpg")}
			imageStyle={styles.backgroundImage}
			style={styles.background}
			resizeMode="cover"
		>
			{children}
		</ImageBackground>
	</LinearGradient>
);
