import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Platform } from "react-native";
const MealItem = (props) => {
	const { item } = props;

	return (
		<View style={styles.container}>
			<Pressable
				android_ripple={{ color: "grey" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image
							source={{ uri: item.imageUrl }}
							style={styles.image}
						/>
						<Text style={styles.title}>{item.title}</Text>
					</View>
					<View style={styles.details}>
						<Text style={styles.detailitem}>{item.duration}</Text>
						<Text style={styles.detailitem}>
							{item.complexity.toUpperCase()}
						</Text>
						<Text style={styles.detailitem}>
							{item.affordability.toUpperCase()}
						</Text>
					</View>
				</View>
			</Pressable>
		</View>
	);
};

export default MealItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		margin: 16,
		borderRadius: 8,
		overflow: Platform.OS === "android" ? "hidden" : "visible",
		backgroundColor: "white",
		elevation: 4,

		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8
	},
	innerContainer: {
		borderRadius: 8,
		overflow: "hidden"
	},
	buttonPressed: {
		opacity: 0.5
	},
	image: {
		width: "100%",
		height: 200
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 20,
		margin: 8
	},
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
