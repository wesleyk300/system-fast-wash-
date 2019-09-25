import React from 'react'
import {View, TextInput, StyleSheet,Text, ActivityIndicator, Alert,Picker,
        PermissionsAndroid,Platform} 
        from 'react-native';
import FormRow from '../components/FormRow';
import Button from 'react-native-button';
import firebase from 'firebase';
import Geolocation from '@react-native-community/geolocation';
 
      



export default class SolicitarPedido extends React.Component {

    constructor(props){
        super (props);

        this.state={
            local:'',
            servico:'',
            modelo:'',
            placa:'',
            cor:'',
            currentLongitude: '',
            currentLatitude: '',
            
        }
       this.cadastropedido = this.cadastropedido.bind(this);
    }    
    
    componentDidMount = () => {
        var that =this;
        //Checking for the permission just after component loaded
        if(Platform.OS === 'ios'){
          this.callLocation(that);
        }else{
          async function requestLocationPermission() {
            try {
              const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,{
                  'title': 'Location Access Required',
                  'message': 'This App needs to Access your location'
                }
              )
              if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                that.callLocation(that);
              } else {
                alert("Permission Denied");
              }
            } catch (err) {
              alert("err",err);
              console.warn(err)
            }
          }
          requestLocationPermission();
        }    
    }
    
    callLocation(that){
        
          Geolocation.getCurrentPosition(
            
             (position) => {
                const currentLongitude = JSON.stringify(position.coords.longitude);
                
                const currentLatitude = JSON.stringify(position.coords.latitude);
                
                that.setState({ currentLongitude:currentLongitude });
                
                that.setState({ currentLatitude:currentLatitude });
                
             },
             (error) => alert(error.message),
             { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
          );
          that.watchID = Geolocation.watchPosition((position) => {
            
              console.log(position);
              const currentLongitude = JSON.stringify(position.coords.longitude);
              
              const currentLatitude = JSON.stringify(position.coords.latitude);
              
             that.setState({ currentLongitude:currentLongitude });
             
             that.setState({ currentLatitude:currentLatitude });
             
          });
    }
    
    componentWillUnmount = () => {
          Geolocation.clearWatch(this.watchID);
    }

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

    cadastropedido() {
        const {currentUser} = firebase.auth();

         
             firebase
             .database()
             .ref(`Clientes/Pedidos/${currentUser.uid}`)
             .push({
                local:this.state.local, 
                servico:this.state.servico,
                modelo:this.state.modelo,
                placa:this.state.placa,
                cor:this.state.cor,
                atuallongitude:this.state.currentLongitude,
                atuallatitude:this.state.currentLatitude,
               });

              this.props.navigation.navigate('Menu');
           
          Alert.alert(
            'Serviço solicitado',
            'Serviço a caminho....',
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
           
            </FormRow>

            
                    <View style={styles.alinharbutton}>
                        <Button  style={styles.buttoncadastrar}
                                    onPress={this.cadastropedido}
                        
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




