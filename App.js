// import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Jag har valt att namnge mina vyer "Scene" eftersom screen betyder skärm och är inte riktigt samma sak.
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
					// Tom titel, både i scenen och i tillbaka-knappen; "null" visar annars "Back" efter pilen.
					options={{ title: "" }}
				/>
				<Stack.Screen
					name="DocumentaryCategories"
					component={DocumentaryCategoriesScene}
					options={{ title: "Documentaries" }}
				/>
				<Stack.Screen
					name="MovieCategories"
					component={MovieCategoriesScene}
					options={{ title: "Movies" }}
				/>
				<Stack.Screen
					name="SeriesCategories"
					component={SeriesCategoriesScene}
					options={{ title: "Series" }}
				/>
				<Stack.Screen
					name="SportCategories"
					component={SportCategoriesScene}
					options={{ title: "Sports" }}
				/>
				<Stack.Screen
					name="Movies"
					component={MoviesScene}
					// Titeln på filmkategorisidan ska vara kategorins namn.
					options={({ route }) => ({ title: route.params.category.name })}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
