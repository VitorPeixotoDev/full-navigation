import { StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { FontAwesome } from '@expo/vector-icons';

const NewPostBtn = () => {
    const { navigate } = useNavigation()

    return(
            <TouchableOpacity
                onPress={() => navigate('NewPost')}
                style={styles.containerNewPost}
            >
                <FontAwesome name="keyboard-o" size={35} color='#bb0941' />
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerNewPost: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: 50,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '8%',
        right: '7%',
        borderWidth: 1,
        borderColor: '#bb0941'
    }
})

export default NewPostBtn