import { View, StyleSheet, Image } from "react-native";

import SceneTemplate from "../components/ui/SceneTemplate";
import H2 from "../components/ui/H2";
import PrimaryButton from "../components/ui/PrimaryButton";
import Colors from "../utilities/constants/colors";

const MainScene = ({ navigation }) => {
	const onPressDocumentaries = () => {
		navigation.navigate("DocumentaryCategories");
	};

	const onPressMovies = () => {
		navigation.navigate("MovieCategories");
	};

	const onPressSeries = () => {
		navigation.navigate("SeriesCategories");
	};

	const onPressSports = () => {
		navigation.navigate("SportCategories");
	};

	return (
		<SceneTemplate>
			<View style={styles.categoriesBox}>
				<H2>What would you like to watch?</H2>
				<View style={styles.buttonRow}>
					<PrimaryButton onPress={onPressSeries}>Series</PrimaryButton>
					<PrimaryButton onPress={onPressMovies}>Movies</PrimaryButton>
				</View>
				<View style={styles.buttonRow}>
					<PrimaryButton onPress={onPressDocumentaries}>
						Documentaries
					</PrimaryButton>
					<PrimaryButton onPress={onPressSports}>Sport</PrimaryButton>
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
		</SceneTemplate>
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
