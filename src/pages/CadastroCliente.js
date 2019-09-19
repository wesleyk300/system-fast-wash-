import React from 'react'
import {View, TextInput, StyleSheet,Text,ScrollView,Alert} from 'react-native';
import FormRow from '../components/FormRow';
import Button from 'react-native-button';
import firebase from 'firebase';

export default class CadastroCliente extends React.Component {


    constructor(props){
        super (props);

        this.state={
            mail:'',
            password:'',
            message: '',
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
          
    }



    onChangeHandler(field,value){
        this.setState({
            [field]: value
        });
    }

    tryLoginCad() {
        //this.setState({isLoading: true});

        const {mail, password} = this.state
        
        firebase
            .auth()
            .createUserWithEmailAndPassword(mail, password)
            .then(user => {
            this.props.navigation.navigate('CadastroClienteLogin')
            })
            
            

            .catch(error => {
                this.setState({
                    message: this.getMessageByErrorCode(error.code)
                });
                //console.log('usuario não foi criado', error);
            })

            //.then(() => this.setState({ isLoading: false }));
    }
    
    getMessageByErrorCode(errorCode){
        if (errorCode === 'auth/invalid-email'){
            Alert.alert(
                'Senha inválida',
                'Sua senha esta incorreta, digite novamente',
            )
        }
        if (errorCode === 'auth/email-already-in-use'){
           Alert.alert(
               'E-mail em uso',
               'Endereço de e-mail já cadastrado',
           )        
       }
       if (errorCode === 'auth/operation-not-allowed'){
        Alert.alert(
            'Conta desativada',
            'Habilite sua conta com o Administrador',
        )
    }
    if (errorCode === 'auth/weak-password'){
        Alert.alert(
            'Senha fraca',
            'A senha deve conter números e letras maiúsculas',
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

                    { this.renderMessage()}

                   <Button  style={styles.buttoncadastrar}
                    //        onPress={this.singUp}
                    onPress={() => this.tryLoginCad()}
                    >Seguir</Button>
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
        marginTop: 30,
        //color: '#8cc53e' cor da letra
    },
    
    buttoncadastrar:{
        fontSize:17,
        color:'white',
        backgroundColor: '#6acd75',
        padding: 10,
        marginTop: 10,
        borderRadius:10,
        width: 200
    },

   
    alinharview:{
        flex: 1,
        //backgroundColor:'#e0f0e0'
        },

    alinharbutton:{
        alignItems:'center',
    },
}) 