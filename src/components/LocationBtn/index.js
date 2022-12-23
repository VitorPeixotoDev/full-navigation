import { StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { MaterialCommunityIcons } from '@expo/vector-icons'

const LocationBtn = () => {
    const { navigate } = useNavigation()
    return(
        <TouchableOpacity
            onPress={() => navigate('Location')}
            style={styles.btnIcon}
        >
            <MaterialCommunityIcons name="google-maps" size={24} color='#bb0941' />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnIcon: {
        position: 'absolute',
        backgroundColor: '#fff',
        width: 50,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '18%',
        right: '7%',
        borderWidth: 1,
        borderColor: '#bb0941'
    }
})

export default LocationBtn