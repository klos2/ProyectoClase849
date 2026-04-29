import { TouchableOpacity, View, StyleSheet, Text } from "react-native";

type CustomButtonProps = {
    title: string;
    onPress: () => void;

};

export default function CustomButton({title, onPress}:CustomButtonProps){

    return(<TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}> {title}</Text>
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
    button: {
        borderColor: "red",
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: "#14041b",
    },

    buttonText: {
        color: "#ffffff",
    }
});