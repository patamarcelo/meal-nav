import {
	View,
	Text,
	StyleSheet,
	Image,
	ScrollView,
	Button
} from "react-native";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import DetailList from "../components/MealDetail/DetailList";
import { useContext, useLayoutEffect } from "react";

import { FavoritesContext } from "../store/context/favorites-context";

import { useSelector, useDispatch } from "react-redux";
import { idsSelector } from "../store/redux/selector";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

import IconButton from "../components/IconButton";

const MealDetailScreen = (props) => {
	// const context = useContext(FavoritesContext);
	const contextIds = useSelector(idsSelector);
	const dispatch = useDispatch();

	const route = useRoute();
	const navigate = useNavigation();
	const { item } = route.params;

	const headerButtonPressHandler = (id) => {
		const idsExists = contextIds.includes(id);
		if (idsExists) {
			dispatch(removeFavorite({ id: id }));
			// context.removeFavorite(id);
		} else {
			// context.addFavorite(id);
			dispatch(addFavorite({ id: id }));
		}
	};

	useLayoutEffect(() => {
		const titleForm = `${item.title.split(" ")[0]}`;
		const idsExists = contextIds.includes(item.id);
		navigate.setOptions({
			title: titleForm,
			headerRight: () => {
				return (
					<IconButton
						onPress={headerButtonPressHandler.bind(this, item.id)}
						name={idsExists ? "star" : "star-outline"}
						color={"blue"}
					/>
				);
			}
		});
	}, [navigate, headerButtonPressHandler]);

	return (
		<ScrollView>
			<View style={styles.mainContainer}>
				<Image style={styles.image} source={{ uri: item.imageUrl }} />
				<Text style={styles.text}>{item.title}</Text>
				<MealDetails item={item} textStyle={styles.detailText} />
				<View style={styles.listMainContainer}>
					<View style={styles.listContainer}>
						<Subtitle>INGREDIENTS: </Subtitle>

						<DetailList items={item.ingredients} />
						<Subtitle>STEPS: </Subtitle>
						<DetailList items={item.steps} />
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		padding: 8,
		marginBottom: 32
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 16,
		borderRadius: 8,

		// backgroundColor: "white",
		shadowColor: "black",
		shadowOpacity: 0.25,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8
	},
	image: {
		width: "100%",
		height: 350
	},
	text: {
		color: "white",
		padding: 10,
		fontSize: 24,
		margin: 8,
		textAlign: "center"
	},
	detailText: {
		color: "grey"
	},
	subtitle: {
		color: "#f5d2bc",
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "center"
	},
	subtitleContainer: {
		padding: 6,
		marginHorizontal: 24,
		marginVertical: 4,
		borderColor: "#f5d2bc",
		borderBottomWidth: 1
	},
	listContainer: {
		maxWidth: "90%"
	},
	listMainContainer: {
		alignItems: "center"
	}
});
