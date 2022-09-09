import { FlatList, StyleSheet, View } from "react-native";

import CATEGORIES from "../data/CategoriesData";
import AppName from "../components/ui/AppName";
import CategoryItem from "../components/CategoryItem";
import SceneTemplate from "../components/ui/SceneTemplate";

const styles = StyleSheet.create({
	contentContainer: {
		flexGrow: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		padding: 12
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
				contentContainerStyle={styles.contentContainer}
				// AppName fick vara i headern på FlatList för att den ska scrolla med resten av innehållet.
				ListHeaderComponent={AppName}
				// En tom View används i footern för att m.h.a. justifyContent skapa plats i botten men inte ovanför titeln när innehållet inte fyller upp skärmen på höjden.
				ListFooterComponent={View}
			/>
		</SceneTemplate>
	);
};
