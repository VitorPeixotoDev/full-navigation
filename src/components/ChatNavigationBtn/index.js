import { StyleSheet, View, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { EvilIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons';

const ChatNavigationBtn = () => {
    const { navigate } = useNavigation()

    return(
        <View style={styles.container}>
            <View style={styles.btnContainer}>
                <TouchableOpacity
                    onPress={() => navigate('Search')}
                >
                    <EvilIcons name="search" size={30} color="#bb0941" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate('Favorites')}
                >
                    <MaterialIcons name="favorite-outline" size={24} color="#bb0941" />
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '22%',
        position: 'absolute',
        top: '5%',
        right: '4%'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginRight: 10
    }
})

export default ChatNavigationBtn