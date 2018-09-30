import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';
import Forecast from './Forecast'

export default class Weather extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    forecast: {
    main: 'main', description: 'description', temp: 0
            }
        };
    }
    fetchData = () => {
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
        .then((response) => response.json())
        .then((json) => {
        this.setState(
        {
            forecast: {
                main: json.weather[0].main,
                description: json.weather[0].description,
                temp: json.main.temp
                    }
                });
        })
        .catch((error) => {
            console.warn(error);
            });
        }
       
        componentDidMount = () => this.fetchData()
    render() {
    return (
    <View >
        <ImageBackground source={require('../bg.jpeg')} style={styles.backdrop}>
        <View style={styles.container}>
            <Text style={styles.display}>Zip code is {this.props.zipCode}.</Text>
            <Forecast {...this.state.forecast} />
        </View>
        </ImageBackground>    
    </View>
            );
        }
   }
   const styles = StyleSheet.create({
    container:{
        paddingTop: 20,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#999966',
        opacity: 0.3,
        height: '40%'
        
      },
      display: {
        fontSize: 15,
        color: '#003300'
      },
      backdrop: { 
        width: '100%', 
        height: '100%'
    },
   });