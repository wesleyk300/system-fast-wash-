import React from 'react'
import {View, TextInput, StyleSheet,Text,ScrollView} from 'react-native';
import FormRow from '../components/FormRow';
import Button from 'react-native-button';

export default class LoginPage extends React.Component {
    render () {
        return(
            <ScrollView>
        <View style={styles.alinharview}
                
                >
            <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        placeholderTextColor="#808080"
                    />
            </FormRow>
            
            

            <FormRow>
                    <TextInput 
                        style={styles.input} 
                        placeholder="CPF"
                        placeholderTextColor="#808080"
                        />
            </FormRow>

            <FormRow>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Endereço"
                        placeholderTextColor="#808080"
                        />
            </FormRow>
            <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#808080"
                    />
            </FormRow>
            <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="#808080"
                        secureTextEntry
                    />
            </FormRow>

                    <View style={styles.alinharbutton}>

                        <Button  style={styles.buttoncadastrar}>
                        Cadastrar</Button>
                        
                    </View>
                    
                                        
        </View>
        </ScrollView>                     
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