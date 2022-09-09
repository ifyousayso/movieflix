import { Pressable, StyleSheet, Text } from "react-native";

import COLORS from "../../utilities/constants/colors";

const styles = StyleSheet.create({
	enabledPressable: {
		borderColor: COLORS.secondaryText
	},
	disabledPressable: {
		borderColor: COLORS.darkText
	},
	pressable: {
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
		fontSize: 14,
		fontWeight: "bold"
	},
	enabledText: {
		color: COLORS.secondaryText
	},
	disabledText: {
		color: COLORS.darkText
	}
});

export default ({ children, onPress, disabled }) => {
	const onPressButton = () => {
		if (disabled !== true) {
			onPress();
		}
	};

	return (
		<Pressable
			style={[
				styles.pressable,
				disabled === true ? styles.disabledPressable : styles.enabledPressable
			]}
			onPress={onPressButton}
		>
			<Text
				style={[
					styles.text,
					disabled === true ? styles.disabledText : styles.enabledText
				]}
			>
				{children}
			</Text>
		</Pressable>
	);
};
