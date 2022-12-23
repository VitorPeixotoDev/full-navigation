import { StyleSheet, TouchableOpacity } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { MaterialCommunityIcons } from '@expo/vector-icons'

const OpenDrawerBtn = () => {
    const { openDrawer } = useNavigation()

    return(
        <TouchableOpacity
            style={styles.btnStyle}
            onPress={() => openDrawer()}
        >
            <MaterialCommunityIcons name="menu-right-outline" size={28} color="#bb0941" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btnStyle: {
        position: 'absolute',
        top: '5%',
        left: '4%',
        height: 24,
        width: 24,
        borderRadius: 12
    }
})

export default OpenDrawerBtn