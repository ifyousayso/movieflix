import { Text, Image, FlatList, StyleSheet, View } from "react-native";

import { MOVIES } from "../data/MoviesData";
import SceneTemplate from "../components/ui/SceneTemplate";
// import Colors from "../utilities/constants/colors";

const MoviesScene = ({ navigation, route }) => {
	const category = route.params.category;

	const displayedMovies = MOVIES.filter(
		(movie) => movie.categoryId === category.id
	);

	const renderMovie = (movieItem) => (
		<View>
			<Text style={styles.h3}>{movieItem.item.title}</Text>
			<Image style={styles.image} source={{ uri: movieItem.item.imageUrl }} />
			<Text style={styles.plot}>{movieItem.item.plot}</Text>
		</View>
	);

	return (
		<SceneTemplate>
			<FlatList
				data={displayedMovies}
				keyExtractor={(item) => item.id}
				renderItem={renderMovie}
			/>
		</SceneTemplate>
	);
};

const styles = StyleSheet.create({
	h3: {
		color: "#f00"
	},
	image: {
		width: "100%",
		height: 400,
		resizeMode: "cover",
		marginBottom: 20
	},
	plot: {
		color: "#fff"
	}
});

export default MoviesScene;
