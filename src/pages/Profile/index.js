import { StyleSheet, View, Text, TouchableOpacity } from "react-native"

import OpenDrawerBtn from '../../components/OpenDrawerBtn'
import BackHomeBtn from "../../components/BackHomeBtn"

const Profile = () => {

    return(
        <View style={styles.container}>
            <BackHomeBtn/>
            <OpenDrawerBtn/>
            <Text>Profile</Text>
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

export default Profile