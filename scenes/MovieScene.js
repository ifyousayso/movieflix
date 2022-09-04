import { Image, StyleSheet, Text, View } from "react-native";

import CATEGORIES from "../data/CategoriesData";
import COLORS from "../utilities/constants/colors";
import H2 from "../components/ui/H2";
import SceneTemplate from "../components/ui/SceneTemplate";

const styles = StyleSheet.create({
	header: {
		color: COLORS.lightText
	},
	image: {
		width: 300,
		height: 300,
		resizeMode: "contain"
	}
});

export default ({ route }) => {
	const movie = route.params.movie;
	const category = CATEGORIES.FILM.find(
		(category) => category.id === movie.categoryId
	);

	return (
		<SceneTemplate>
			<View>
				<H2>{movie.title}</H2>
				<Text style={styles.header}>
					{movie.releaseYear} ・ {movie.runtime}
				</Text>
				<Image style={styles.image} source={{ uri: movie.imageUrl }} />
				<Text>{category.name}</Text>
				<Text>{movie.plot}</Text>
				<Text>Director: {movie.director}</Text>
				<Text>Stars: {movie.actors}</Text>
			</View>
		</SceneTemplate>
	);
};
