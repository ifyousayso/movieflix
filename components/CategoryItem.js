import { Image, Pressable, StyleSheet, Text } from "react-native";

import COLORS from "../utilities/constants/colors";

const styles = StyleSheet.create({
	pressable: {
		flex: 1,
		alignItems: "center",
		marginBottom: 12
	},
	image: {
		width: 105,
		height: 105,
		borderWidth: 1,
		borderRadius: 4,
		borderColor: COLORS.primaryText
	},
	name: {
		color: COLORS.lightText,
		fontSize: 14,
		paddingVertical: 4
	}
});

export default ({ item, onPress }) => (
	<Pressable style={styles.pressable} onPress={onPress}>
		<Image source={item.image} style={styles.image} />
		<Text style={styles.name}>{item.name}</Text>
	</Pressable>
);
