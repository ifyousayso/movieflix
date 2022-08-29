import { FlatList } from "react-native";

import { DOCUMENTARY_CATEGORIES } from "../data/CategoriesData";
import SceneTemplate from "../components/ui/SceneTemplate";
import CategoryItem from "../components/CategoryItem";

const DocumentaryCategoriesScene = () => {
	const renderCategoryItem = (category) => {
		return <CategoryItem item={category.item} />;
	};

	return (
		<SceneTemplate>
			<FlatList
				data={DOCUMENTARY_CATEGORIES}
				numColumns={3}
				keyExtractor={(item) => item.id}
				renderItem={renderCategoryItem}
			/>
		</SceneTemplate>
	);
};

export default DocumentaryCategoriesScene;
