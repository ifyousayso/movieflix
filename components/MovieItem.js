import { Image, Pressable, StyleSheet, Text } from "react-native";

import COLORS from "../utilities/constants/colors";

const styles = StyleSheet.create({
	h3: {
		color: COLORS.primaryText
	},
	image: {
		width: "100%",
		height: 400,
		resizeMode: "cover",
		marginBottom: 20
	},
	plot: {
		color: COLORS.lightText
	}
});

export default ({ item, onPress }) => (
	<Pressable onPress={onPress}>
		<Text style={styles.h3}>{item.title}</Text>
		<Image style={styles.image} source={{ uri: item.imageUrl }} />
		<Text style={styles.plot}>{item.plot}</Text>
	</Pressable>
);
