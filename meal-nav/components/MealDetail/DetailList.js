import { View, Text, StyleSheet } from "react-native";
const ListDetails = ({ items }) => {
	return (
		<View>
			{items.map((data, i) => {
				return (
					<View key={i} style={styles.listItem}>
						<Text style={styles.itemText} key={i}>
							{data}
						</Text>
					</View>
				);
			})}
		</View>
	);
};

export default ListDetails;

const styles = StyleSheet.create({
	listItem: {
		borderRadius: 6,
		paddingHorizontal: 8,
		paddingVertical: 4,
		marginVertical: 8,
		marginHorizontal: 12,
		backgroundColor: "#f5d2bc"
	},
	itemText: {
		color: "#351401",
		textAlign: "center"
	}
});
