import { SafeAreaView, StyleSheet } from "react-native";
// import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import LoginScene from "./scenes/LoginScene";
import MainScene from "./scenes/MainScene";
import DocumentaryCategoriesScene from "./scenes/DocumentaryCategoriesScene";
import MovieCategoriesScene from "./scenes/MovieCategoriesScene";
import SeriesCategoriesScene from "./scenes/SeriesCategoriesScene";
import SportCategoriesScene from "./scenes/SportCategoriesScene";
import MoviesScene from "./scenes/MoviesScene";

const Stack = createNativeStackNavigator();

export default function App() {
	// const [isLoggedIn, setIsLoggedIn] = useState(false);

	// const logIn = () => {
	// 	setIsLoggedIn(true);
	// };

	// let scene = <LoginScene logIn={logIn} />;
	// scene = <CategoriesScene />;

	// if (isLoggedIn) {
	// 	scene = <MainScene />;
	// }

	return (
		<>
			<SafeAreaView style={styles.screen}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: { backgroundColor: "#000" },
							headerTintColor: "#fff",
							contentStyle: { backgroundColor: "#000" }
						}}
					>
						<Stack.Screen
							name="Main"
							component={MainScene}
							options={{ title: "" }}
						/>
						<Stack.Screen
							name="DocumentaryCategories"
							component={DocumentaryCategoriesScene}
							options={{ title: "Categories" }}
						/>
						<Stack.Screen
							name="MovieCategories"
							component={MovieCategoriesScene}
							options={{ title: "Categories" }}
						/>
						<Stack.Screen
							name="SeriesCategories"
							component={SeriesCategoriesScene}
							options={{ title: "Categories" }}
						/>
						<Stack.Screen
							name="SportCategories"
							component={SportCategoriesScene}
							options={{ title: "Categories" }}
						/>
						<Stack.Screen
							name="Movies"
							component={MoviesScene}
							options={{ title: "Movies" }}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</SafeAreaView>
		</>
	);
}

const styles = StyleSheet.create({
	screen: {
		height: "100%"
	}
});
