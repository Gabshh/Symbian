import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import COLORS from "../const/Colors";
import apiSymbian from '../service/apiSymbian';

const Listagem = ()=>{

    const [pacientes, setPacientes] = useState([]);

    useEffect(
        ()=>{

            apiSymbian.get('/listarPacientes')
            .then(
                (data)=>{
                    console.log(data.data[4]);
                    setPacientes(data.data);
                }
            )

        },
        []
    );

    return(
        <ScrollView style={estilos.scroll}>
            <View style={estilos.container}>

                {
                    pacientes.map(
                        paciente=>(
                            <TouchableOpacity key={paciente.id_paciente} style={estilos.post} >
                                <View>
                                    <Text style={estilos.nome}>{paciente.nome}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    )
                }

            </View>
        </ScrollView>
    );

}

const estilos = StyleSheet.create({
    scroll:{
        flex:1,
        backgroundColor:COLORS.darkBackground,
      },
    container:{
        alignItems:'center',
    },
    post:{
        width:'95%',
        alignItems:'center',
        backgroundColor:COLORS.darkInput,
        padding:15,
        marginVertical:5,
        borderRadius:5,
        elevation:5,
    },
    nome:{
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        color:COLORS.white,
    }

});

export default Listagem;