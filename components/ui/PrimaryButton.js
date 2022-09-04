import { Pressable, Text, StyleSheet } from "react-native";

import COLORS from "../../utilities/constants/colors";

const styles = StyleSheet.create({
	pressable: {
		borderColor: COLORS.secondaryText,
		borderWidth: 2,
		marginHorizontal: 8,
		borderRadius: 4,
		backgroundColor: COLORS.primaryBackground,
		width: 130,
		height: 30,
		justifyContent: "center"
	},
	text: {
		textAlign: "center",
		color: COLORS.secondaryText,
		fontSize: 14,
		fontWeight: "bold"
	}
});

export default ({ children, onPress }) => (
	<Pressable style={styles.pressable} onPress={onPress}>
		<Text style={styles.text}>{children}</Text>
	</Pressable>
);
