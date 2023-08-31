import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList, StyleSheet } from "react-native";

const renderCategoryitem = (itemData) => {
	return (
		<CategoryGridTile
			title={itemData.item.title}
			color={itemData.item.color}
		/>
	);
};

const CategoriesScreen = () => {
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
