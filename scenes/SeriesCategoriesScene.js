import { FlatList } from "react-native";

import { MOVIE_SERIES_CATEGORIES } from "../data/CategoriesData";
import SceneTemplate from "../components/ui/SceneTemplate";
import CategoryItem from "../components/CategoryItem";

const SeriesCategoriesScene = () => {
	const renderCategoryItem = (category) => {
		return <CategoryItem item={category.item} />;
	};

	return (
		<SceneTemplate>
			<FlatList
				data={MOVIE_SERIES_CATEGORIES}
				numColumns={3}
				keyExtractor={(item) => item.id}
				renderItem={renderCategoryItem}
			/>
		</SceneTemplate>
	);
};

export default SeriesCategoriesScene;