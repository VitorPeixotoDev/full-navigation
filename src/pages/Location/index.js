import { StyleSheet, View, Text } from "react-native"

const Location = () => {
    return(
        <View style={styles.container}>
            <Text>Location</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Location