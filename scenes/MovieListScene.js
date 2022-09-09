import { FlatList, StyleSheet, View } from "react-native";

import MOVIES from "../data/MoviesData";
import AppName from "../components/ui/AppName";
import MovieItem from "../components/MovieItem";
import SceneTemplate from "../components/ui/SceneTemplate";

const styles = StyleSheet.create({
	contentContainer: {
		flexGrow: 1,
		flexDirection: "column",
		padding: 12
	}
});

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
				contentContainerStyle={styles.contentContainer}
				// AppName fick vara i headern på FlatList för att den ska scrolla med resten av innehållet.
				ListHeaderComponent={AppName}
				// En tom View används i footern för att m.h.a. justifyContent skapa plats i botten men inte ovanför titeln när innehållet inte fyller upp skärmen på höjden.
				ListFooterComponent={View}
			/>
		</SceneTemplate>
	);
};
