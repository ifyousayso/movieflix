import { StyleSheet, Text } from "react-native";

import COLORS from "../../utilities/constants/colors";

const styles = StyleSheet.create({
	h1: {
		fontSize: 30,
		color: COLORS.primaryText,
		fontWeight: "bold",
		padding: 12
	}
});

export default () => <Text style={styles.h1}>MovieFlix</Text>;
