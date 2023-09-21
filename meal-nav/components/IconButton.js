import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const IconButton = (props) => {
	const { onPress, name, color } = props;
	return (
		<Pressable
			onPress={onPress}
			android_ripple={{ color: "grey" }}
			style={({ pressed }) => [
				styles.button,
				pressed ? styles.buttonPressed : null
			]}
		>
			<Ionicons name={name} size={24} color={color} />
		</Pressable>
	);
};

export default IconButton;

const styles = StyleSheet.create({
	buttonPressed: {
		opacity: 0.7
	}
});
