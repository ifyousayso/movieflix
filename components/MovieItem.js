import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import COLORS from "../utilities/constants/colors";

const styles = StyleSheet.create({
	pressable: {
		marginVertical: 16
	},
	h3: {
		color: COLORS.lightText,
		fontSize: 17,
		marginBottom: 12
	},
	view: {
		flexDirection: "row"
	},
	image: {
		width: 100,
		height: 100,
		resizeMode: "cover",
		borderWidth: 1,
		borderColor: COLORS.primaryText,
		borderRadius: 4,
		marginRight: 12
	},
	plotBox: {
		flexShrink: 1
	},
	plot: {
		color: COLORS.lightText
	}
});

export default ({ item, onPress }) => (
	<Pressable onPress={onPress} style={styles.pressable}>
		<Text style={styles.h3}>{item.title}</Text>
		<View style={styles.view}>
			<Image style={styles.image} source={{ uri: item.imageUrl }} />
			<View style={styles.plotBox}>
				<Text style={styles.plot}>{item.plot}</Text>
			</View>
		</View>
	</Pressable>
);
