import { Text, Image, FlatList, StyleSheet, View } from "react-native";

import { MOVIES } from "../data/MoviesData";
import SceneTemplate from "../components/ui/SceneTemplate";
import H2 from "../components/ui/H2";
// import Colors from "../utilities/constants/colors";

const MoviesScene = ({ route }) => {
	const category = route.params.category;

	const displayedMovies = MOVIES.filter(
		(movie) => movie.categoryId === category.id
	);

	const renderMovie = (movieItem) => (
		<View>
			<Text style={styles.title}>{movieItem.item.title}</Text>
			<Image
				style={styles.movieImage}
				source={{ uri: movieItem.item.imageUrl }}
			/>
			<Text style={styles.title}>{movieItem.item.plot}</Text>
		</View>
	);

	return (
		<SceneTemplate>
			<H2>{category.name}</H2>
			<FlatList
				data={displayedMovies}
				keyExtractor={(item) => item.id}
				renderItem={renderMovie}
			/>
		</SceneTemplate>
	);
};

const styles = StyleSheet.create({
	title: {
		color: "#f00"
	},
	movieImage: {
		width: "100%",
		height: 400,
		resizeMode: "cover",
		marginBottom: 20
	}
});

export default MoviesScene;
