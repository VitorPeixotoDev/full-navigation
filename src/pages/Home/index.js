import { StyleSheet, View, Text } from 'react-native'

import OpenDrawerBtn from '../../components/OpenDrawerBtn'
import NewPostBtn from '../../components/NewPostBtn'
import LocationBtn from '../../components/LocationBtn'

const Home = () => {
    return(
        <View style={styles.container}>
            <OpenDrawerBtn/>
            <LocationBtn/>
            <NewPostBtn/>
            <Text>Home</Text>
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

export default Home