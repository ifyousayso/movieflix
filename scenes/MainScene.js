import { Image, Pressable, StyleSheet, View } from "react-native";

import COLORS from "../utilities/constants/colors";
import H2 from "../components/ui/H2";
import MOVIES from "../data/MoviesData";
import AppName from "../components/ui/AppName";
import PrimaryButton from "../components/ui/PrimaryButton";
import SceneTemplate from "../components/ui/SceneTemplate";

const styles = StyleSheet.create({
	containerBox: {
		flexGrow: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		padding: 12
	},
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
		width: 200,
		height: 200,
		borderWidth: 1,
		borderColor: COLORS.primaryText,
		borderRadius: 4
	}
});

export default ({ navigation }) => {
	// Ladda Alien som affisch-film.
	const posterMovie = MOVIES.find((movie) => movie.id === "tt0078748");

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

	const onPressPoster = () => {
		navigation.navigate("Details", { movie: posterMovie });
	};

	return (
		<SceneTemplate>
			<View style={styles.containerBox}>
				<AppName />
				<View style={styles.categoriesBox}>
					<H2>What would you like to watch?</H2>
					<View style={styles.buttonRow}>
						<PrimaryButton onPress={onPressSeries} disabled={true}>
							Series
						</PrimaryButton>
						<PrimaryButton onPress={onPressMovies}>Movies</PrimaryButton>
					</View>
					<View style={styles.buttonRow}>
						<PrimaryButton onPress={onPressDocumentaries} disabled={true}>
							Documentaries
						</PrimaryButton>
						<PrimaryButton onPress={onPressSports} disabled={true}>
							Sports
						</PrimaryButton>
					</View>
				</View>
				<View style={styles.recommendedBox}>
					<H2>We recommend …</H2>
					<Pressable onPress={onPressPoster}>
						<Image
							style={styles.poster}
							resizeMode="cover"
							source={{
								uri: posterMovie.imageUrl
							}}
						/>
					</Pressable>
				</View>
				<View />
			</View>
		</SceneTemplate>
	);
};
