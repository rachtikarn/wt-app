import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    
    render() {
    return (
    <View>
    <Text style={styles.display1}>{this.props.main}</Text>
    <Text style={styles.display}>{this.props.description}</Text>
    <Text style={styles.display1}>{this.props.temp}°C</Text>
    </View>
    );
    }
   }
   
   const styles = StyleSheet.create({
  display: {
    fontSize: 15,
    color: '#003300'
  },
  display1: {
    fontSize: 25,
    color: '#003300'
  },
});
   
   

 