import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/home";
import Details from "../screens/details";

const Stack = createStackNavigator();

function MainStackNavigator({ navigator }) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} Navigator={navigator} />
        <Stack.Screen
          name="Details"
          component={Details}
          navigator={navigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
