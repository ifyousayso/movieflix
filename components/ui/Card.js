import { View, StyleSheet } from "react-native";

import COLORS from "../../utilities/constants/colors";

const styles = StyleSheet.create({
	view: {
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 24,
		padding: 24,
		backgroundColor: COLORS.primaryTransparentBackground,
		borderRadius: 8
	}
});

export default ({ children }) => <View style={styles.view}>{children}</View>;
