import { FlatList } from "react-native";

import CATEGORIES from "../data/CategoriesData";
import CategoryItem from "../components/CategoryItem";
import SceneTemplate from "../components/ui/SceneTemplate";

export default () => {
	const renderCategoryItem = (category) => (
		<CategoryItem item={category.item} />
	);

	return (
		<SceneTemplate>
			<FlatList
				data={CATEGORIES.FILM}
				numColumns={3}
				keyExtractor={(item) => item.id}
				renderItem={renderCategoryItem}
			/>
		</SceneTemplate>
	);
};
