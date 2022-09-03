import { Pressable, Text, StyleSheet } from "react-native";

import { COLORS } from "../../utilities/constants/colors";

const PrimaryButton = ({ children, onPress }) => {
	return (
		<Pressable style={styles.pressable} onPress={onPress}>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	pressable: {
		borderColor: COLORS.secondaryText,
		borderWidth: 2,
		marginHorizontal: 8,
		borderRadius: 6,
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

export default PrimaryButton;
