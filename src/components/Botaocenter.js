import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class Botaocenter extends React.Component {
    render (){
        const {titulo} = this.props;
        return (
                <View style={styles.btnAlinhar}>
                    <TouchableOpacity
                        style={styles.button}>
                        <Text style={styles.txtButton}>{titulo}</Text>
                    </TouchableOpacity>

                </View>
        );
    }

}

const styles = StyleSheet.create ({

    bntAlinhar: {     
        alignItems: 'center',   
        marginRight: 20,
        paddingTop:7
    },

    button: {
        backgroundColor: '#a082c9',
        width: 100,
        height:40,
        borderRadius: 10,
        flex: 3,
        
    },

    textButton: {
        color: '#fff',
        fontSize: 20,
        textAlign:'center',
        paddingVertical: 5
    },
}) 

