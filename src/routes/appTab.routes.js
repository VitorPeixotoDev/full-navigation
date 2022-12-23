import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
const { Navigator, Screen } = createBottomTabNavigator()

import { SimpleLineIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import AppStackRoutes from "./appStack.routes"
import AppHomeRoutes from "./appHomeStack.routes"

import Home from '../pages/Home'
import Message from "../pages/Message"
import Pics from '../pages/Pics'

const AppTabRoutes = () => {
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarActiveTintColor: '#bb0941',
                tabBarInactiveTintColor: '#bbb'
            }}
        >
            <Screen 
                name='TabHome' 
                component={AppHomeRoutes}
                options={{
                    tabBarIcon: ({color}) => 
                    <SimpleLineIcons name="home" size={24} color={color} />
                }}
            />
            <Screen 
                name='TabChat' 
                component={AppStackRoutes}
                options={{
                    tabBarIcon: ({color}) =>
                    <Ionicons name="md-chatbox-outline" size={24} color={color} />
                }}
                />
            <Screen 
                name='Message' 
                component={Message}
                options={{
                    tabBarIcon: ({color}) =>
                    <MaterialCommunityIcons name="email-send-outline" size={24} color={color} />
                }}
            /> 
            <Screen 
                name='Pics' 
                component={Pics}
                options={{
                    tabBarIcon: ({color}) => 
                    <AntDesign name="camerao" size={24} color={color} />
                }}
            />            
        </Navigator>
    )
}

export default AppTabRoutes