import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet } from "react-native";

const CategoriesScreen = (props) => {
	const { navigation } = props;

	const renderCategoryitem = (itemData) => {
		const pressHandler = (item) => {
			console.log("press Item", item);
			navigation.navigate("MealsOverView", { categoryId: item.id });
		};
		return (
			<CategoryGridTile
				title={itemData.item.title}
				color={itemData.item.color}
				onPress={pressHandler.bind(this, itemData.item)}
			/>
		);
	};

	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryitem}
			numColumns={2}
		/>
	);
};

export default CategoriesScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center"
	}
});
