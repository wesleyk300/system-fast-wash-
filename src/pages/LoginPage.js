import React from 'react'
import {View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';

import FormRow from '../components/FormRow';

export default class LoginPage extends React.Component {
    render () {
        return(
        <View>
            <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                    />
            </FormRow>

            <FormRow>
                    <TextInput 
                        style={styles.input} 
                        placeholder="Senha"
                        secureTextEntry
                    />
            </FormRow>
            <TouchableOpacity
                    style={styles.button}>
                    <Text > Login </Text>
                </TouchableOpacity>
        </View>
                        
        )
    }
}

const styles = StyleSheet.create ({
    input:{
        padding: 8,
        marginRight: 10,
        marginLeft: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#8cc53e',
        borderRadius: 6,
        //color: '#8cc53e' cor da letra
    },

    button: {
        backgroundColor: '#a082c9',
        width: 200,
        height:40,
        borderRadius: 10,
        alignItems: 'center',
    },

  
}) 