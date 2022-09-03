import { Text, StyleSheet } from "react-native";

import { COLORS } from "../../utilities/constants/colors";

const H2 = ({ children }) => {
	return <Text style={styles.h2}>{children}</Text>;
};

const styles = StyleSheet.create({
	h2: {
		color: COLORS.lightText,
		textAlign: "center",
		fontSize: 20,
		fontWeight: "bold",
		marginBottom: 20
	}
});

export default H2;
