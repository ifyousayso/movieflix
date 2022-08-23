import { Alert, View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

import Colors from "../utilities/constants/colors";
import H2 from "../components/ui/H2";
import Card from "../components/ui/Card";
import PrimaryButton from "../components/ui/PrimaryButton";

const LoginScene = ({ logIn }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const onChangeTextEmail = (email) => {
		setEmail(email);
	};

	const onChangeTextPassword = (password) => {
		setPassword(password);
	};

	const onPressLogin = () => {
		if (email.trim().length === 0 || password.trim().length === 0) {
			Alert.alert(
				"Login error",
				"E-mail address and password must be supplied!",
				[{ text: "OK", style: "default" }]
			);

			// if (email.trim().length === 0) {
			// 	setEmail("");
			// 	console.log("-" + email + "-");
			// }

			// if (password.trim().length === 0) {
			// 	setPassword("");
			// }

			return;
		}

		logIn();

		console.log("login!" + Math.random());
	};

	const onPressRegister = () => {
		console.log("register!" + Math.random());
	};

	return (
		<View>
			<H2>Welcome</H2>
			<Card>
				<TextInput
					style={styles.textInput}
					placeholder="e-mail"
					placeholderTextColor={Colors.darkText}
					keyboardType="email-address"
					autoCapitalize="none"
					autoCorrect={false}
					onChangeText={onChangeTextEmail}
				/>
				<TextInput
					style={styles.textInput}
					placeholder="password"
					placeholderTextColor={Colors.darkText}
					keyboardType="default"
					secureTextEntry={true}
					autoCapitalize="none"
					onChangeText={onChangeTextPassword}
				/>
				<View style={styles.buttonRow}>
					<PrimaryButton onPress={onPressLogin}>Log in</PrimaryButton>
					<PrimaryButton onPress={onPressRegister}>Register</PrimaryButton>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	textInput: {
		fontSize: 16,
		padding: 4,
		borderBottomWidth: 1,
		width: "100%",
		borderBottomColor: Colors.secondaryText,
		textAlign: "center",
		marginBottom: 24,
		color: Colors.lightText
	},
	buttonRow: {
		flexDirection: "row"
	}
});

export default LoginScene;
