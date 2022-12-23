import { createStackNavigator } from "@react-navigation/stack"
const { Navigator, Screen } = createStackNavigator()

import Home from '../pages/Home'
import NewPost from '../pages/NewPost'
import Location from "../pages/Location"

const AppHomeRoutes = () => {
    return(
        <Navigator>
            <Screen 
                name='home' 
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <Screen 
                name='NewPost' 
                component={NewPost}
                options={{
                    title: 'criar uma postagem'
                }}
            />
            <Screen
                name='Location'
                component={Location}
                options={{
                    title: 'pessoas próximas'
                }}
            />
        </Navigator>
    )
}

export default AppHomeRoutes