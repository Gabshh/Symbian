import React from "react";
import { StyleSheet } from "react-native";
import Cadastro from "./src/telas/Cadastro";
import Listagem from "./src/telas/Listagem";
import { NavigationContainer        } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {

  return (

    <NavigationContainer>
      <Stack.Navigator>
    
        <Stack.Screen
        name="Cadastro"
        component={Cadastro}
        options={{title:'CADASTRO DE PACIENTE'}}
        />

        <Stack.Screen
        name="Listagem"
        component={Listagem}
        options={{title:'LISTA DE PACIENTES'}}
        />

      </Stack.Navigator>
    </NavigationContainer>

    // <Cadastro/>
    // <Listagem/>

  );

}

export default App;
