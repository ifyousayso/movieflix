import { Text, StyleSheet } from "react-native";

import Colors from "../../utilities/constants/colors";

const Title = () => {
	return <Text style={styles.h1}>MovieFlix</Text>;
};

const styles = StyleSheet.create({
	h1: {
		fontSize: 30,
		color: Colors.primaryText,
		fontWeight: "bold",
		padding: 12
	}
});

export default Title;
