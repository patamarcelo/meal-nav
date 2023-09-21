import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealItem = (props) => {
	const { item } = props;
	const navigation = useNavigation();

	const navihandler = (item) => {
		navigation.navigate("MealDetail", { item: item });
	};

	return (
		<View style={styles.container}>
			<Pressable
				android_ripple={{ color: "grey" }}
				style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
				onPress={navihandler.bind(this, item)}
			>
				<View style={styles.innerContainer}>
					<View>
						<Image
							source={{ uri: item.imageUrl }}
							style={styles.image}
						/>
						<Text style={styles.title}>{item.title}</Text>
					</View>
					<MealDetails item={item} />
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
	}
});
