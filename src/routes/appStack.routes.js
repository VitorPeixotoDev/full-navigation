import { createStackNavigator } from "@react-navigation/stack"
const { Navigator, Screen } = createStackNavigator()

import Chat from "../pages/Chat"
import Search from '../pages/Search'
import Favorites from "../pages/Favorites"


const AppStackRoutes = () => {
    return(
        <Navigator>
            <Screen 
                name='Chat' 
                component={Chat}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name='Search'
                component={Search}
                options={{
                    title: 'pesquisar'
                }}    
            />
            <Screen 
                name='Favorites' 
                component={Favorites}
                options={{
                    title: 'favoritos'
                }}
            />
        </Navigator>
    )
}

export default AppStackRoutes