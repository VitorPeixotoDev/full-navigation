import { StyleSheet, View, Text } from "react-native"

const NewPost = () => {
    return(
        <View style={styles.container}>
            <Text>NewPost</Text>
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

export default NewPost