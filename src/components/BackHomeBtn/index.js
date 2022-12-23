import { StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { SimpleLineIcons } from '@expo/vector-icons'

const BackHomeBtn = () => {
    const { navigate } = useNavigation()

    return(
        <TouchableOpacity
            style={styles.btnHome}
            onPress={() => navigate('Home')}
        >
            <SimpleLineIcons name="home" size={24} color='#bb0941' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnHome: {
        position: 'absolute',
        top: '5%',
        right: '4%'
    }
})

export default BackHomeBtn