import { View, Text, StyleSheet } from "react-native";
const MealDetails = ({ item, style, textStyle }) => {
	return (
		<View style={[styles.details, style]}>
			<Text style={[styles.detailitem, textStyle]}>{item.duration}</Text>
			<Text style={[styles.detailitem, textStyle]}>
				{item.complexity.toUpperCase()}
			</Text>
			<Text style={[styles.detailitem, textStyle]}>
				{item.affordability.toUpperCase()}
			</Text>
		</View>
	);
};

export default MealDetails;

const styles = StyleSheet.create({
	details: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		padding: 8
	},
	detailitem: {
		marginHorizontal: 4,
		fontSize: 11,
		color: "grey",
		fontStyle: "italic",
		fontWeight: "bold"
	}
});
