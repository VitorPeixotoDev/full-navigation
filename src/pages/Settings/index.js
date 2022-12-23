import { StyleSheet, View, Text } from "react-native"

import OpenDrawerBtn from '../../components/OpenDrawerBtn'
import BackHomeBtn from '../../components/BackHomeBtn'

const Settings = () => {
    return(
        <View style={styles.container}>
            <BackHomeBtn/>
            <OpenDrawerBtn/>
            <Text>Settings</Text>
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

export default Settings