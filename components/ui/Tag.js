import { StyleSheet, Text, View } from "react-native";

import COLORS from "../../utilities/constants/colors";

const styles = StyleSheet.create({
	textBox: {
		alignSelf: "flex-start",
		borderWidth: 1,
		borderRadius: 16,
		borderColor: COLORS.darkText,
		marginBottom: 12,
		backgroundColor: COLORS.primaryTransparentBackground
	},
	text: {
		color: COLORS.lightText,
		paddingHorizontal: 12,
		paddingVertical: 4
	}
});

export default ({ children }) => (
	<View style={styles.textBox}>
		<Text style={styles.text}>{children}</Text>
	</View>
);
