
import React, { Component } from 'react';
import { View , Text} from 'react-native';
import Itens from './itens';
import axios from 'axios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listaItens: []
      };
    }
  
    //news api key 
    componentDidMount() {
      const key = '08d87d2666724ce8ba37ee1e11c104f9';
     //axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
     axios.get(`https://newsapi.org/v2/top-headlines?sources=globo&apiKey=${key}`)
      .then(response => { 
        this.setState({ 
          listaItens: response.data.articles
         });
          console.log(this.state.listaItens);
      })
      .catch(err => { console.log(err); });    
    }    
  render() {
    return (
      <View>
       {this.state.listaItens.map(function(item) { return (<Text> {item.description } </Text>); }) }
      </View>
    );
  }
}
