import { Text, Image, FlatList, View } from "react-native";

import MOVIES from "../data/MoviesData";
import MovieItem from "../components/MovieItem";
import SceneTemplate from "../components/ui/SceneTemplate";

export default ({ navigation, route }) => {
	const category = route.params.category;

	const displayedMovies = MOVIES.filter(
		(movie) => movie.categoryId === category.id
	);

	const renderMovieItem = (movie) => {
		const onPressMovieItem = () => {
			navigation.navigate("Details", { movie: movie.item });
		};

		return <MovieItem item={movie.item} onPress={onPressMovieItem} />;
	};

	return (
		<SceneTemplate>
			<FlatList
				data={displayedMovies}
				keyExtractor={(item) => item.id}
				renderItem={renderMovieItem}
			/>
		</SceneTemplate>
	);
};
