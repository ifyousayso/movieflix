import { Image, Pressable, StyleSheet, Text } from "react-native";

import Colors from "../utilities/constants/colors";

const CategoryItem = ({ item, onPress }) => {
	return (
		<Pressable onPress={onPress}>
			<Image source={item.image} style={styles.image} />
			<Text style={styles.name}>{item.name}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	name: {
		color: Colors.lightText,
		fontSize: 16
	},
	image: {
		width: 100
	}
});

export default CategoryItem;
