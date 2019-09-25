import React from 'react'
import {View, TextInput, StyleSheet,Text, ActivityIndicator, Alert} from 'react-native';
import FormRow from '../components/FormRow';
import Button from 'react-native-button';
import firebase from 'firebase';

//import * as firebase from "firebase/app";
//import "firebase/auth";
//import "firebase/database";


export default class LoginPage extends React.Component {

    constructor(props){
        super (props);

        this.state={
            mail:'',
            password:'',
            isLoading: false,
            message: '' 
        }
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
            firebase.initializeApp(firebaseConfig);
    }

    
    onChangeHandler(field,value){
        this.setState({
            [field]: value
        });
    }

    tryLogin() {
        this.setState({isLoading: true});

        const {mail, password} = this.state
        
        firebase
            .auth()
            .signInWithEmailAndPassword(mail, password)
            .then(user => {
                //this.setState({message: 'Logado com sucesso'});
                this.props.navigation.navigate('Menu'); //SE DER PAU APAGUE
                
               // console.log('usuario logado', user);
               
            })
            

            .catch(error => {
                this.setState({
                    message: this.getMessageByErrorCode(error.code)
                });
                //console.log('usuario não foi logado', error);
            })

            .then(() => this.setState({ isLoading: false }));
    }

    getMessageByErrorCode(errorCode){
        if (errorCode === 'auth/wrong-password'){
            Alert.alert(
                'Senha inválida',
                'Sua senha esta incorreta, digite novamente',
            )
        }
        if (errorCode === 'auth/user-not-found'){
           Alert.alert(
               'Usuário não encontrado',
               'Seu e-mail esta incorreto, digite novamente',
           )        
       }
       if (errorCode === 'auth/invalid-email'){
        Alert.alert(
            'E-mail inválido',
            'E-mail não cadastrado',
        )
    }
    if (errorCode === 'auth/user-disabled'){
        Alert.alert(
            'Usuário desabilitado',
            'Usuário desabilitado pelo usuário',
        )
    }


    }

    renderMessage(){
           const {message}= this.state;
           if (!message)
                return null;
            return (
                <View>
                    <Text>{message}</Text>
                </View>
            ) 
    }

    renderButton(){
        if (this.state.isLoading)
            return <ActivityIndicator />;
        return (
            <Button style={styles.buttonentrar}
                    onPress={() => this.tryLogin()}
            >Entrar </Button>

        );
    }
    
    render () {
        return(
        <View style={styles.alinharview}
                //backgroundColor="#e0f0e0"
                >
            <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#808080"
                        value={this.state.mail}
                        onChangeText={value=>this.onChangeHandler('mail', value)}
                    />
            </FormRow>

            <FormRow>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Senha"
                        placeholderTextColor="#808080"
                        secureTextEntry
                        value={this.state.password}
                        onChangeText={value=>this.onChangeHandler('password', value)}
                    />
            </FormRow>
                    <View style={styles.alinharbutton}>
                        { this.renderButton()}
                        { this.renderMessage()}
                        
                        
                        <Button  style={styles.buttoncadastrar}
                        onPress={() => this.props.navigation.navigate('Cadastro')}
                        >Cadastrar</Button>
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
        marginTop: 20,
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
        flex: 1,
        justifyContent: 'center',
    },

    alinharbutton:{
        alignItems:'center',
    },
}) 