import { FlatList, StyleSheet } from "react-native";

import CATEGORIES from "../data/CategoriesData";
import CategoryItem from "../components/CategoryItem";
import SceneTemplate from "../components/ui/SceneTemplate";

const styles = StyleSheet.create({
	flatList: {
		flexGrow: 0,
		paddingBottom: 24
	}
});

export default ({ navigation }) => {
	const renderCategoryItem = (category) => {
		const onPressCategoryItem = () => {
			navigation.navigate("Movies", {
				category: category.item
			});
		};

		return <CategoryItem item={category.item} onPress={onPressCategoryItem} />;
	};

	return (
		<SceneTemplate>
			<FlatList
				style={styles.flatList}
				data={CATEGORIES.FILM}
				numColumns={3}
				keyExtractor={(item) => item.id}
				renderItem={renderCategoryItem}
			/>
		</SceneTemplate>
	);
};
