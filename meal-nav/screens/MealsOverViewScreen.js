import { MEALS } from "../data/dummy-data";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

const MealsOverViewScreen = (props) => {
	// const {
	// 	route: { params }
	// } = props;
	const route = useRoute();
	const navigation = useNavigation();
	const catId = route.params.categoryId;

	useLayoutEffect(() => {
		const categoriTitle = CATEGORIES.find(
			(data) => data.id === catId
		).title;
		navigation.setOptions({ title: categoriTitle });
	}, [navigation, catId]);

	const { params } = route;

	const myObj = CATEGORIES.filter((data) => data.id === params.categoryId)[0];

	const displayedMeals = MEALS.filter((data) => {
		return data.categoryIds.indexOf(params.categoryId) >= 0;
	});

	return <MealsList items={displayedMeals} />;
};

export default MealsOverViewScreen;
