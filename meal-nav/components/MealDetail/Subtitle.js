import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	);
};

export default Subtitle;

const styles = StyleSheet.create({
	subtitle: {
		color: "#f5d2bc",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center"
	},
	subtitleContainer: {
		padding: 6,
		marginHorizontal: 14,
		marginVertical: 4,
		borderColor: "#f5d2bc",
		borderBottomWidth: 1
	}
});
