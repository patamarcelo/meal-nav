import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealsList = (props) => {
	const { items } = props;

	const renderListMeal = (itemData) => {
		return <MealItem item={itemData.item} />;
	};
	return (
		<View style={styles.mealContainer}>
			<FlatList
				data={items}
				keyExtractor={(item) => item.id}
				renderItem={renderListMeal}
			/>
		</View>
	);
};

export default MealsList;

const styles = StyleSheet.create({
	mealContainer: {
		flex: 1,
		padding: 16
	}
});
