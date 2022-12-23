import { StyleSheet, View, Text } from 'react-native'

import OpenDrawerBtn from '../../components/OpenDrawerBtn'
import ChatNavigationBtn from '../../components/ChatNavigationBtn'

const Chat = () => {
    return(
        <View style={styles.container}>
            <OpenDrawerBtn/>
            <ChatNavigationBtn/>
            <Text>Chat</Text>
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

export default Chat