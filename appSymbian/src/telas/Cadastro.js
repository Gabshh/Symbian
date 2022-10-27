//import { loadPartialConfigAsync } from "@babel/core";
import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Input from "../componentes/Input";
import Button from "../componentes/Button";
import COLORS from "../const/Cores";
import apiSymbian from '../service/apiSymbian';

const Cadastro = () => {
  
  {/********** CAPTURA DE DADOS COM O USO DE STATE **********
  CRIAÇÃO DA ESTRUTURA DE STATE QUE ARMAZENA OS DADOS DIGITADOS*/}

  const [inputs, setInputs] = React.useState({
    nome: '',
    telefone: '',
    celular: '',
    email: '',
    nome_responsavel: '',
    telefone_responsavel: '',
  });

  {/***********************************************************/}

  // FUNÇÃO QUE MANIPULA A ENTRADA DE DADOS NA STATE NO MÉTODO onChangeText
  const handlerOnChange = (text, input) => {
    setInputs( (prevState) => (
      console.log(prevState),
      //console.log(input + ' ' + text)

      //INJEÇÃO DE DADOS NA STATE 
      {...prevState, [input]:text}
      
      ));
  }

  {/***********************************************************/}

  {/********** VALIDAÇÃO DOS DADOS DE CADASTRO ***********/}
  
  // STATE DE ERRO DE PREENCHIMENTO
  const [errors, setErrors] = React.useState({});

  // FUNÇÃO HANDLER QUE CONFIGURA AS MENSAGENS DE ERRO NA STATE
  const handlerErrors = (errorMessage, input) => {
    setErrors( (prevState)=>({...prevState, [input]:errorMessage}) );
  }

  // FUNÇÃO DE VALIDAÇÃO               
  const validate = () => {
    
    let validate = true;

    if (!inputs.nome) {
      validate = false;
      handlerErrors('Informe seu nome.', 'nome');
      // console.log('NOME EM BRANCO');
    }

    if (!inputs.email) {
      validate = false;
      handlerErrors('Informe seu e-mail.', 'email');
      // console.log('E-MAIL EM BRANCO');
    }

    if (!inputs.celular) {
      validate = false;
      handlerErrors('Informe seu celular.', 'celular');
      // console.log('CELULAR EM BRANCO');
    }

    if (!inputs.telefone) {
      validate = false;
      handlerErrors('Informe seu telefone.', 'telefone');
      // console.log('TELEFONE EM BRANCO');
    }

    if (validate) {
      //ENVIA OS DADOS PARA A API CADASTRAR
      cadastrar();
      console.log('paciente cadastrado!!👨🏼‍⚕️');
    }

    console.log(errors);

  }

  const cadastrar = ()=>{
    
    try{
      const response = apiSymbian.post('/cadastrarPaciente', 
      {
        nome:inputs.nome,
        email:inputs.telefone,
        celular:inputs.celular,
        telefone:inputs.email,
        nome_responsavel:inputs.nome_responsavel,
        telefone_responsavel:inputs.telefone_responsavel
      });
    }catch(error){
      console.log(error)
    }
    
  }

    return(

        //<SafeAreaView style={estilos.safe}>
        <ScrollView style={estilos.scroll}>

            <Text style={estilos.textTitle}>CADASTRO DE PACIENTE</Text>

            <View style={estilos.viewForm}>

            <Input  label="Nome"
                    iconName="account"
                    error={errors.nome}
                    onFocus={ ()=>(handlerErrors(null, 'nome')) }    
                    onChangeText={ (text) => handlerOnChange(text, 'nome' ) }
            />

            <Input  label="Telefone" 
                    iconName="phone"
                    error={errors.telefone}
                    onFocus={ ()=>(handlerErrors(null, 'telefone')) }    
                    onChangeText={ (text) => handlerOnChange(text, 'telefone' ) }      
            />

            <Input  label="Celular" 
                    iconName="cellphone-text"
                    error={errors.celular}
                    onFocus={ ()=>(handlerErrors(null, 'celular')) }    
                    onChangeText={ (text) => handlerOnChange(text, 'celular' ) }
            />

            <Input  label="E-mail"
                    iconName="email"
                    error={errors.email}
                    onFocus={ ()=>(handlerErrors(null, 'email')) }    
                    onChangeText={ (text) => handlerOnChange(text, 'email' ) }
            />
            
            <Input  label="Nome do responsável" 
                    iconName="account-multiple"      
                    error={errors.nome_responsavel}
                    onFocus={ ()=>(handlerErrors(null, 'nome_responsavel')) }    
                    onChangeText={ (text) => handlerOnChange(text, 'nome_responsavel' ) }
            />
            
            <Input  label="Telefone do responsável" 
                    iconName="phone"      
                    error={errors.telefone_responsavel}
                    onFocus={ ()=>(handlerErrors(null, 'telefone_responsavel')) }    
                    onChangeText={ (text) => handlerOnChange(text, 'telefone_responsavel' ) }
            />
            
            <Button title="CADASTRAR" onPress={validate}/>

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
    marginBottom:69,
  },

});

export default Cadastro;