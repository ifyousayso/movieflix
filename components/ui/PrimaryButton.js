import { Pressable, Text, StyleSheet } from "react-native";

import Colors from "../../utilities/constants/colors";

const PrimaryButton = ({ children, onPress }) => {
	return (
		<Pressable style={styles.pressable} onPress={onPress}>
			<Text style={styles.text}>{children}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	pressable: {
		borderColor: Colors.secondaryText,
		borderWidth: 2,
		marginHorizontal: 8,
		borderRadius: 6,
		backgroundColor: Colors.primaryBackground,
		width: 130,
		height: 30,
		justifyContent: "center"
	},
	text: {
		textAlign: "center",
		color: Colors.secondaryText,
		fontSize: 14,
		fontWeight: "bold"
	}
});

export default PrimaryButton;
