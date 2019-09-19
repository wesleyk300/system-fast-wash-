import React from 'react'
import {View, TextInput, StyleSheet,Text, ActivityIndicator, Alert,Picker} from 'react-native';
import FormRow from '../components/FormRow';
import Button from 'react-native-button';
import firebase from 'firebase';
      



export default class CadastroClienteLogin extends React.Component {

    constructor(props){
        super (props);

        this.state={
            nome:'',
            CPF:'',
            Endereco:'',
            }

       this.CadastroClienteLogin = this.CadastroClienteLogin.bind(this);
    }

    componentDidMount(){
        const firebaseConfig = {
            apiKey: "AIzaSyAY4luErnInF6ggzwU_ZJtBwDkUxXcG04U",
            authDomain: "systemwashfast.firebaseapp.com",
            databaseURL: "https://systemwashfast.firebaseio.com",
            projectId: "systemwashfast",
            storageBucket: "",
            messagingSenderId: "269048051961",
            appId: "1:269048051961:web:3a9f57fc49b92b08678a28"
          };
           
    }

    CadastroClienteLogin() {
        const {currentUser} = firebase.auth();

         
             firebase
             .database()
             .ref(`Clientes/DadosPessoais/${currentUser.uid}`)
             .push({
                nome:this.state.nome, 
                CPF:this.state.CPF,
                endereco:this.state.endereco,
                });

                this.props.navigation.navigate('Menu');
           
          Alert.alert(
            'Bem Vindo',
            'Cadastro realizado com sucesso....',
          )
      }
   

























    onChangeHandler(field,value){
        this.setState({
            [field]: value
        });
    }
    
    render () {
        const servico = this.state.servico;
        return(
        <View style={styles.alinharview}>
            <FormRow>
                    <Text style={styles.textlabel}>Informe seus dados pessoais:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor="#808080"
                        value={this.state.nome}
                        onChangeText={value=>this.onChangeHandler('nome', value)}
                    />
            </FormRow>
            <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="CPF"
                        placeholderTextColor="#808080"
                        value={this.state.CPF}
                        onChangeText={value=>this.onChangeHandler('CPF', value)}
                    />
            </FormRow>
            <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="Endereço"
                        placeholderTextColor="#808080"
                        value={this.state.endereco}
                        onChangeText={value=>this.onChangeHandler('endereco', value)}
                    />
            </FormRow>

            <View style={styles.alinharbutton}>
                        <Button  style={styles.buttoncadastrar}
                                    onPress={this.CadastroClienteLogin}
                        
                        >Finalizar</Button>
                    </View>                    
        </View>                     
        )
    }
}

const styles = StyleSheet.create ({
    input:{
        padding: 8,
        marginRight: 30,
        marginLeft: 30,
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        //backgroundColor: '#8cc53e',
        borderRadius: 6,
        marginTop: 5,
        //color: '#8cc53e' cor da letra
    },
    
    buttonentrar:{
        fontSize:17,
        color:'white',
        backgroundColor: '#6acd75',
        padding: 10,
        marginTop: 10,
        borderRadius:10,
        width: 200
    },

    buttoncadastrar:{
        fontSize:17,
        color:'white',
        backgroundColor: '#4386ee',
        padding: 10,
        marginTop: 10,
        borderRadius:10,
        width: 200
    },

    alinharview:{
        
        justifyContent: 'center',
    },

    alinharbutton:{
        alignItems:'center',
    },

    textlabel:{       
        marginRight: 30,
        marginLeft: 30,
        marginTop: 30,
        fontSize:17,
       
    },

    picker:{       
        marginRight: 30,
        marginLeft: 30,
        fontSize:17,
       
    },
}) 




