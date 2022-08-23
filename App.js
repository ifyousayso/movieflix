import {
	StyleSheet,
	ImageBackground,
	StatusBar,
	SafeAreaView,
	View
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

import Colors from "./utilities/constants/colors";
import Title from "./components/ui/Title";
import LoginScene from "./scenes/LoginScene";
import MainScene from "./scenes/MainScene";

export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const logIn = () => {
		setIsLoggedIn(true);
	};

	let scene = <LoginScene logIn={logIn} />;

	if (isLoggedIn) {
		scene = <MainScene />;
	}

	return (
		<>
			<StatusBar barStyle="light-content" />
			<LinearGradient colors={Colors.gradientBackground}>
				<ImageBackground
					source={require("./assets/images/bg_batman.jpg")}
					imageStyle={styles.backgroundImage}
					resizeMode="cover"
				>
					<SafeAreaView style={styles.screen}>
						<Title />
						<View style={styles.scene}>{scene}</View>
					</SafeAreaView>
				</ImageBackground>
			</LinearGradient>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		height: "100%"
	},
	backgroundImage: {
		opacity: 0.2
	},
	scene: {
		flex: 1,
		flexDirection: "column",
		padding: 4,
		justifyContent: "space-evenly"
	}
});
