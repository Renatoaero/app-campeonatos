import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Index from "./src/components";
const { Chaves, Campeonato, Fases } = Index;

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Campeonato'>
        <Stack.Screen
          name="Campeonato"
          component={Campeonato}
          options={{
            title: "Home",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#006400',
          }}
        />
         <Stack.Screen
          name="Fases"
          component={Fases}
          options={{
            title: "Fases do Campeonato",
            headerTitleAlign: "left",
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#006400',
          }}
        />
        <Stack.Screen
          name="Chaves"
          component={Chaves}
          options={{
            title: "Chaveamento",
            headerTitleAlign: "left",
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#006400',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
