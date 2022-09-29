//import { loadPartialConfigAsync } from "@babel/core";
import React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Input from "../componentes/Input";
import Button from "../componentes/Button";
import COLORS from "../const/Cores";

const Cadastro = () => {
  
  {/********** CAPTURA DE DADOS COM O USO DE STATE **********
  CRIAÇÃO DA ESTRUTURA DE STATE QUE ARMAZENA OS DADOS DIGITADOS*/}

  const [inputs, setInputs] = React.useState({
    nome: '',
    email: '',
    celular: '',
    telefone: '',
    nomeResponsavel: '',
    telefoneResponsavel: '',
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

    // if (validate) {
    //   //ENVIA OS DADOS PARA A API CADASTRAR
    //   cadastrar();
    //   console.log('cadastrou!!🤨');
    // }

    console.log(errors);

  }

  // const cadastrar = ()=>{
    
  //   try{
  //     const response = apiPaciente.post('/cadastrarPacientes', 
  //     {
  //       nome:inputs.nome,
  //       email:inputs.email,
  //       celular:inputs.celular,
  //       telefone:inputs.telefone,
  //       nomeResponsavel:inputs.nomeResponsavel,
  //       telefoneResponsavel:inputs.telefoneResponsavel
  //     });
  //   }catch(error){
  //     console.log(error)
  //   }
    
  // }
  
  //const nome = 'TELA DE CADASTRO';

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

            <Input  label="E-mail"
                    iconName="email"
                    error={errors.email}
                    onFocus={ ()=>(handlerErrors(null, 'email')) }    
                    onChangeText={ (text) => handlerOnChange(text, 'email' ) }
            />

            <Input  label="Celular" 
                    iconName="cellphone-text"
                    error={errors.celular}
                    onFocus={ ()=>(handlerErrors(null, 'celular')) }    
                    onChangeText={ (text) => handlerOnChange(text, 'celular' ) }
            />
            
            <Input  label="Telefone" 
                    iconName="phone"
                    error={errors.telefone}
                    onFocus={ ()=>(handlerErrors(null, 'telefone')) }    
                    onChangeText={ (text) => handlerOnChange(text, 'telefone' ) }      
            />
            
            <Input  label="Nome do responsável" 
                    iconName="account-multiple"      
                    error={errors.nomeResponsavel}
                    onFocus={ ()=>(handlerErrors(null, 'nomeResponsavel')) }    
                    onChangeText={ (text) => handlerOnChange(text, 'nomeResponsavel' ) }
            />
            
            <Input  label="Telefone do responsável" 
                    iconName="phone"      
                    error={errors.telefoneResponsavel}
                    onFocus={ ()=>(handlerErrors(null, 'telefoneResponsavel')) }    
                    onChangeText={ (text) => handlerOnChange(text, 'telefoneResponsavel' ) }
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
  },

});

export default Cadastro;