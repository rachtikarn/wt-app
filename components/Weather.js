import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ImageBackground } from 'react-native';
import Forecast from './Forecast'

export default class Weather extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
    forecast: {
    main: '-', description: '-', temp: 0
    }
    }
    }
    render() {
    return (
    <View style={styles.container}>
        
            <Text>Zip code is {this.props.zipCode}.</Text>
            <Forecast {...this.state.forecast} />
        
         
    </View>
            );
        }
   }
   const styles = StyleSheet.create({
    container: { 
        paddingTop: 25, 
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    backdrop: { width: '100%', height: '100%'},
    
   });