import { View, StyleSheet } from "react-native";

import Colors from "../../utilities/constants/colors";

const Card = ({ children }) => {
	return <View style={styles.view}>{children}</View>;
};

const styles = StyleSheet.create({
	view: {
		justifyContent: "center",
		alignItems: "center",
		marginHorizontal: 24,
		padding: 24,
		backgroundColor: Colors.primaryTransparentBackground,
		borderRadius: 8
		// elevation: 10,
		// shadowColor: "#000",
		// shadowOffset: { width: 10, height: 10 },
		// shadowRadius: 10
	}
});

export default Card;
