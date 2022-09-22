//import { loadPartialConfigAsync } from "@babel/core";
import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Input from "../componentes/Input";
import Button from "../componentes/Button";
import COLORS from "../const/Cores";

const Cadastro = () => {

  //const nome = 'TELA DE CADASTRO';

    return(

        //<SafeAreaView style={estilos.safe}>
        <ScrollView style={estilos.scroll}>

            <Text style={estilos.textTitle}>CADASTRO DE PACIENTE</Text>

            <View style={estilos.viewForm}>

            <Input  label="NOME"    iconName="account"       />
            <Input  label="E-MAIL"  iconName="email"  />
            <Input  label="CELULAR" iconName="cellphone-text"      />
            <Button title="CADASTRAR"/>

            </View>
        </ScrollView>
        //</SafeAreaView>

    
    );

}

const estilos = StyleSheet.create({

  safe:{
    flex:1,
    backgroundColor:COLORS.darkBackground,
  },
  scroll:{
    paddingHorizontal:20,
    paddingTop:50,
    backgroundColor:COLORS.darkBackground,
  },
  textTitle:{
    color:COLORS.white,
    fontSize:25,
    fontWeight:"bold",
  },
  viewForm:{
    marginVertical:20,
  },

});

export default Cadastro;