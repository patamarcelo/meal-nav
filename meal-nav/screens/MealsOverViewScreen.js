import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/MealItem";

const MealsOverViewScreen = (props) => {
	// const {
	// 	route: { params }
	// } = props;

	const route = useRoute();
	const { params } = route;

	const myObj = CATEGORIES.filter((data) => data.id === params.categoryId)[0];

	const displayedMeals = MEALS.filter((data) => {
		return data.categoryIds.indexOf(params.categoryId) >= 0;
	});

	const renderListMeal = (itemData) => {
		return <MealItem item={itemData.item} />;
	};
	return (
		<View style={styles.mealContainer}>
			<FlatList
				data={displayedMeals}
				keyExtractor={(item) => item.id}
				renderItem={renderListMeal}
			/>
		</View>
	);
};

export default MealsOverViewScreen;

const styles = StyleSheet.create({
	mealContainer: {
		flex: 1,
		padding: 16
	}
});
