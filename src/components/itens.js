
import React, { Component } from 'react';
import { Text } from 'react-native';


export default class Itens extends Component {

  constructor(props) {
    super(props);
    console.log('Contruindo app'); 
    }
    
  render() {
    return (
      <Text>Detalhes do iten</Text>
    );
  }
}
