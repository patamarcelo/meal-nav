import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteScreen from "./screens/FavoriteScreen";

import { Ionicons } from "@expo/vector-icons";

// import FavoriteContextProvider from "./store/context/favorites-context";

import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "#351401"
				},
				headerTintColor: "white",
				sceneContainerStyle: {
					backgroundColor: "#3f2f25"
				},
				drawerContentStyle: { backgroundColor: "#351401" },
				drawerInactiveTintColor: "white",
				drawerActiveTintColor: "#e4baa1"
			}}
		>
			<Drawer.Screen
				name="Home"
				component={CategoriesScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name="list" color={color} size={size} />
					)
				}}
			/>
			<Drawer.Screen
				name="Favorites"
				component={FavoriteScreen}
				options={{
					drawerIcon: ({ color, size }) => (
						<Ionicons name="star" color={color} size={size} />
					)
				}}
			/>
		</Drawer.Navigator>
	);
};

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			{/* <FavoriteContextProvider> */}
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator
						initialRouteName="Categories"
						screenOptions={{
							title: "All Categories",
							headerStyle: {
								backgroundColor: "#351401"
							},
							headerTintColor: "white",
							contentStyle: {
								backgroundColor: "#3f2f25"
							}
						}}
					>
						<Stack.Screen
							name="Categories"
							component={DrawerNavigator}
							options={{
								headerShown: false
							}}
						/>
						<Stack.Screen
							name="MealsOverView"
							component={MealsOverViewScreen}
							// options={({ route, navigation }) => {
							// 	const catId = route.params.categoryId;
							// 	return {
							// 		title: catId
							// 	};
							// }}
						/>

						<Stack.Screen
							name="MealDetail"
							component={MealDetailScreen}
						/>
					</Stack.Navigator>
				</NavigationContainer>
			</Provider>
			{/* </FavoriteContextProvider> */}
		</>
	);
}
