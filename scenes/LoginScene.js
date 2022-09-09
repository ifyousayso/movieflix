import { createRef, useState } from "react";
import { Alert, TextInput, StyleSheet, View } from "react-native";

import COLORS from "../utilities/constants/colors";
import AppName from "../components/ui/AppName";
import Card from "../components/ui/Card";
import H2 from "../components/ui/H2";
import PrimaryButton from "../components/ui/PrimaryButton";
import SceneTemplate from "../components/ui/SceneTemplate";

const styles = StyleSheet.create({
	containerBox: {
		flexGrow: 1,
		flexDirection: "column",
		justifyContent: "space-between",
		padding: 12
	},
	textInput: {
		fontSize: 16,
		padding: 4,
		borderBottomWidth: 1,
		width: "100%",
		borderBottomColor: COLORS.secondaryText,
		textAlign: "center",
		marginBottom: 24,
		color: COLORS.lightText
	},
	buttonRow: {
		flexDirection: "row"
	}
});

export default ({ navigation }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const emailRef = createRef();
	const passwordRef = createRef();

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

			// Om båda fälten anses tomma, kommer först lösenordet att få fokus …
			if (password.trim().length === 0) {
				setPassword("");
				passwordRef.current.focus();
			}

			// … och sedan e-postadressen.
			if (email.trim().length === 0) {
				setEmail("");
				emailRef.current.focus();
			}

			return;
		}

		setPassword("");
		passwordRef.current.blur();
		setEmail("");
		emailRef.current.blur();

		navigation.navigate("Main");
	};

	const onPressRegister = () => {
		// Math.random() skapar olika meddelanden som är lätta att se om fönstret är fullt.
		console.log("register!" + Math.random());
	};

	return (
		<SceneTemplate>
			<View style={styles.containerBox}>
				<AppName />
				<View>
					<H2>Welcome</H2>
					<Card>
						<TextInput
							style={styles.textInput}
							placeholder="e-mail"
							placeholderTextColor={COLORS.darkText}
							value={email}
							ref={emailRef}
							keyboardType="email-address"
							autoCapitalize="none"
							autoCorrect={false}
							onChangeText={onChangeTextEmail}
						/>
						<TextInput
							style={styles.textInput}
							placeholder="password"
							placeholderTextColor={COLORS.darkText}
							value={password}
							ref={passwordRef}
							keyboardType="default"
							secureTextEntry={true}
							autoCapitalize="none"
							onChangeText={onChangeTextPassword}
						/>
						<View style={styles.buttonRow}>
							<PrimaryButton onPress={onPressLogin}>Log in</PrimaryButton>
							<PrimaryButton onPress={onPressRegister} disabled={true}>
								Register
							</PrimaryButton>
						</View>
					</Card>
				</View>
				<View />
			</View>
		</SceneTemplate>
	);
};
