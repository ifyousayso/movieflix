import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

import CATEGORIES from "../data/CategoriesData";
import COLORS from "../utilities/constants/colors";
import H2 from "../components/ui/H2";
import AppName from "../components/ui/AppName";
import SceneTemplate from "../components/ui/SceneTemplate";
import Tag from "../components/ui/Tag";

const styles = StyleSheet.create({
	contentContainer: {
		flexGrow: 1,
		flexDirection: "column",
		padding: 12
	},
	text: {
		color: COLORS.lightText,
		marginBottom: 12
	},
	imageBox: {
		marginBottom: 12,
		alignItems: "center"
	},
	image: {
		width: 300,
		height: 300,
		resizeMode: "cover",
		borderRadius: 150,
		borderWidth: 1,
		borderColor: COLORS.primaryText
	}
});

export default ({ route }) => {
	const movie = route.params.movie;
	const category = CATEGORIES.FILM.find(
		(category) => category.id === movie.categoryId
	);

	return (
		<SceneTemplate>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<View>
					<AppName />
					<H2>{movie.title}</H2>
					<Text style={styles.text}>
						{movie.releaseYear} ・ {movie.runtime}
					</Text>
					<View style={styles.imageBox}>
						<Image style={styles.image} source={{ uri: movie.imageUrl }} />
					</View>
					<Tag>{category.name}</Tag>
					<Text style={styles.text}>{movie.plot}</Text>
					<Text style={styles.text}>Director: {movie.director}</Text>
					<Text style={styles.text}>Stars: {movie.actors}</Text>
				</View>
			</ScrollView>
		</SceneTemplate>
	);
};
