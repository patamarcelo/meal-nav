import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";

const Stack = createNativeStackNavigator();
export default function App() {
	return (
		<>
			<StatusBar style="dark" />
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
						component={CategoriesScreen}
					/>
					<Stack.Screen
						name="MealsOverView"
						component={MealsOverViewScreen}
						options={{
							title: "All Categories"
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}
