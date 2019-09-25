import React from 'react'
import {View, Text} from 'react-native';
import firebase from 'firebase';
import Button from 'react-native-button';

export default class test extends React.Component {

    componentDataBase(){
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



                listarPedido() {
                    const {currentUser} = firebase.auth();
                        
                         firebase
                         .database()
                         .ref(`Clientes/Pedidos/${currentUser.uid}`)
                         .on('value', snapshot => {
                            console.log(snapshot.val());
                        });
                  }

    
    render () {
        
        return(
            <View>
               <Text>{snapshot}</Text>

               <Button  
               onPress={this.listarPedido}
               >Solicitar</Button>
            </View>                     
            )
        }
    }




