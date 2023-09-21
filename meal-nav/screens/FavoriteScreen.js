import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorites-context";
import MealsList from "../components/MealsList/MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
import { idsSelector } from "../store/redux/selector";

const FavoriteScreen = () => {
	// const context = useContext(FavoritesContext);
	const contextIds = useSelector(idsSelector);
	const favoriteMeals = MEALS.filter((meal) => contextIds.includes(meal.id));

	if (favoriteMeals.length === 0) {
		return (
			<View style={styles.container}>
				<Text style={styles.text}>No Favorite Meals Yet!!</Text>
			</View>
		);
	}
	return <MealsList items={favoriteMeals} />;
};

export default FavoriteScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
	},
	text: {
		fontSize: 24,
		color: "white",
		fontWeight: "bold"
	}
});
