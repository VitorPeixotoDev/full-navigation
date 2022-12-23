import { createDrawerNavigator } from "@react-navigation/drawer"
const { Navigator, Screen } = createDrawerNavigator()

import Settings from '../pages/Settings'
import Profile from '../pages/Profile'

import AppTabRoutes from "./appTab.routes"

import { AntDesign } from '@expo/vector-icons'
import { SimpleLineIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons';

const AppRoutes = () => {
    return(
        <Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,

                drawerStyle: {
                    backgroundColor: '#bb0941'
                },
                drawerActiveBackgroundColor: '#eee',
                drawerActiveTintColor: '#bb0941',
                drawerInactiveTintColor: '#eee'
            }}
        >
            <Screen 
                name='Profile' 
                component={Profile}
                options={{
                    title: 'perfil',
                    drawerIcon: ({color}) => 
                    <AntDesign name="user" size={24} color={color} />
                }}
            />
            <Screen 
                name='Home' 
                component={AppTabRoutes}
                options={{
                    drawerIcon: ({color}) => 
                    <SimpleLineIcons name="home" size={24} color={color} />
                }}
            />
            <Screen 
                name='Settings' 
                component={Settings}
                options={{
                    title: 'configurações',
                    drawerIcon: ({color}) => 
                    <Ionicons name="settings-outline" size={24} color={color} />
                }}
            />
        </Navigator>
    )
}

export default AppRoutes