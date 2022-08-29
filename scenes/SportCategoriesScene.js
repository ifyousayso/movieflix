import { FlatList } from "react-native";

import { SPORT_CATEGORIES } from "../data/CategoriesData";
import SceneTemplate from "../components/ui/SceneTemplate";
import CategoryItem from "../components/CategoryItem";

const SportCategoriesScene = () => {
	const renderCategoryItem = (category) => {
		return <CategoryItem item={category.item} />;
	};

	return (
		<SceneTemplate>
			<FlatList
				data={SPORT_CATEGORIES}
				numColumns={3}
				keyExtractor={(item) => item.id}
				renderItem={renderCategoryItem}
			/>
		</SceneTemplate>
	);
};

export default SportCategoriesScene;
