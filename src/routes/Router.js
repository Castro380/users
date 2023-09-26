import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Posts from "../screens/Posts";
import User from "../screens/User";

const Stack = createStackNavigator();

export default function Router() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="User" component={User} />
                <Stack.Screen name="Posts" component={Posts} />

            </Stack.Navigator>
        </NavigationContainer>



    )
}