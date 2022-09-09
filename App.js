import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import COLORS from "./utilities/constants/colors";
// Jag har valt att kalla mina vyer "Scene" eftersom screen betyder skärm och är inte riktigt samma sak.
import MovieScene from "./scenes/MovieScene";
import DocumentaryCategoriesScene from "./scenes/DocumentaryCategoriesScene";
import LoginScene from "./scenes/LoginScene";
import MainScene from "./scenes/MainScene";
import MovieCategoriesScene from "./scenes/MovieCategoriesScene";
import MovieListScene from "./scenes/MovieListScene";
import SeriesCategoriesScene from "./scenes/SeriesCategoriesScene";
import SportCategoriesScene from "./scenes/SportCategoriesScene";

const Stack = createNativeStackNavigator();

export default () => (
	<NavigationContainer>
		<Stack.Navigator
			screenOptions={{
				headerStyle: { backgroundColor: COLORS.primaryBackground },
				headerTintColor: COLORS.lightText,
				contentStyle: { backgroundColor: COLORS.primaryBackground }
			}}
		>
			<Stack.Screen
				name="Login"
				component={LoginScene}
				// Tom titel, både i scenen och i tillbaka-knappen; "null" visar annars "Back" efter pilen.
				options={{ title: "" }}
			/>
			<Stack.Screen
				name="Main"
				component={MainScene}
				// Tom titel i scenen men "Log off" i tillbaka-knappen!
				options={{ title: "", headerBackTitle: "Log off" }}
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
				component={MovieListScene}
				// Titeln på filmkategorisidan ska vara kategorins namn.
				options={({ route }) => ({ title: route.params.category.name })}
			/>
			<Stack.Screen
				name="Details"
				component={MovieScene}
				options={{ title: "" }}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);
