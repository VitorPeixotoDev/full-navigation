import { StyleSheet, View, Text } from 'react-native'

import OpenDrawerBtn from '../../components/OpenDrawerBtn'

const Pics = () => {
    return(
        <View style={styles.container}>
            <OpenDrawerBtn/>
            <Text>Pics</Text>
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

export default Pics