import { View, Text, StyleSheet, Image } from "react-native";

import Colors from "../utilities/constants/colors";
import H2 from "../components/ui/H2";
import PrimaryButton from "../components/ui/PrimaryButton";

const MainScene = () => {
	return (
		<>
			<View style={styles.categoriesBox}>
				<H2>What would you like to watch?</H2>
				<View style={styles.buttonRow}>
					<PrimaryButton>Series</PrimaryButton>
					<PrimaryButton>Movies</PrimaryButton>
				</View>
				<View style={styles.buttonRow}>
					<PrimaryButton>Documentaries</PrimaryButton>
					<PrimaryButton>Sport</PrimaryButton>
				</View>
			</View>
			<View style={styles.recommendedBox}>
				<H2>We recommend …</H2>
				<Image
					style={styles.poster}
					resizeMode="cover"
					source={require("../assets/images/the-batman.jpg")}
				/>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	categoriesBox: {
		alignItems: "center"
	},
	buttonRow: {
		flexDirection: "row",
		height: 50
	},
	recommendedBox: {
		alignItems: "center"
	},
	poster: {
		width: 160,
		height: 160,
		borderWidth: 1,
		borderColor: Colors.primaryText,
		borderRadius: 4
	}
});

export default MainScene;
