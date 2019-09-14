import React from 'react'
import {View, TextInput, StyleSheet,Text, ActivityIndicator, Alert,Picker} from 'react-native';
import FormRow from '../components/FormRow';
import Button from 'react-native-button';
import firebase from 'firebase';
import { CheckBox } from 'react-native-elements'        



export default class LoginPage extends React.Component {

    constructor(props){
        super (props);

        this.state={
            local:'',
            servico:'sem valor',
            modelo:'',
            placa:'',
            cor:''
            
        }
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
                    <Text style={styles.textlabel}>Local:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Ex: Asa Norte"
                        placeholderTextColor="#808080"
                        value={this.state.local}
                        onChangeText={value=>this.onChangeHandler('local', value)}
                    />
            </FormRow>
            <FormRow>
                    <Text style={styles.textlabel}>Dados do Carro:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Modelo"
                        placeholderTextColor="#808080"
                        value={this.state.modelo}
                        onChangeText={value=>this.onChangeHandler('modelo', value)}
                    />
            </FormRow>
            <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="Placa"
                        placeholderTextColor="#808080"
                        value={this.state.placa}
                        onChangeText={value=>this.onChangeHandler('placa', value)}
                    />
            </FormRow>

            <FormRow>
                    <TextInput
                        style={styles.input}
                        placeholder="Cor"
                        placeholderTextColor="#808080"
                        value={this.state.cor}
                        onChangeText={value=>this.onChangeHandler('cor', value)}
                    />
            </FormRow>

            <Text style={styles.textlabel}>Serviço:</Text>
            <FormRow>
                    <Picker style={styles.picker}
                    
                        selectedValue={this.state.servico}
                        
                        onValueChange={(itemValue) => 
                        this.setState({servico: itemValue})
                        }>
                        <Picker.Item label="Selecione o Serviço" value="0" />
                        <Picker.Item label="Descrição do Serviço 1" value="Serviço 1 selecionado" />
                        <Picker.Item label="Descrição do Serviço 2" value="Serviço 2 selecionado" />
                        <Picker.Item label="Descrição do Serviço 3" value="Serviço 3 selecionado" />
                        
            </Picker>
            <Text>Linguagm: {servico}</Text>
            </FormRow>

            
                    <View style={styles.alinharbutton}>
                        <Button  style={styles.buttoncadastrar}
                        
                        >Solicitar</Button>
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




