import React from 'react'
import {View, StyleSheet} from 'react-native';
import Button from 'react-native-button';



export default class MenuApp extends React.Component {

    render () {
        return(
            <View style={styles.alinharbutton}>
                    <Button style={styles.buttonpedido}
                            onPress={() => this.props.navigation.navigate('SolicitarPedido')}
                            >Solicitar Pedido</Button>
                    
                
                    <Button style={styles.buttonpedido}
                            onPress={() => this.props.navigation.navigate('Cadastro')}
                            >Valores</Button>
                        
            
                    <Button style={styles.buttonpedido}
                            onPress={() => this.props.navigation.navigate('Cadastro')}
                            >Histórico</Button>

                    <Button style={styles.buttonpedido}
                            onPress={() => this.props.navigation.navigate('Cadastro')}
                            >Editar Cadastro</Button>

             </View> 
                             
        )
    }
}

const styles = StyleSheet.create ({
    buttonpedido:{
        fontSize:17,
        color:'#4386ee',
        padding: 10,
        marginTop: 10,
        borderRadius:10,
        width: 200,
        
        
        
    },

    alinharbutton:{
        alignItems:'center',
    },
}) 