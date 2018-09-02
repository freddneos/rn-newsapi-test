
import React, { Component } from 'react';
import { Text,StyleSheet,View , Image} from 'react-native';


export default class Itens extends Component {

  constructor(props) {
    super(props);
    console.log('Contruindo app'); 
    }
    
  render() {
    return ( 
      <View style={styles.viewPrincipal} >
        <View style={styles.viewImage} >
          <Image source={{ uri: this.props.item.urlToImage } } 
                 style={styles.image}
          />
        </View>
        <View style={styles.viewTexts}>
          <Text style={styles.title}>{this.props.item.title.substr(0, 20) + '...'}</Text>
          <Text style={styles.subTitle}>{this.props.item.description.substr(0, 50) + '...'}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  

  viewImage: {
    height: 75,
    width: 75,
    marginRight: 10,
    
  },
  image: {
    height: 73,
    width: 73,
    borderRadius: 20,
  },
  viewPrincipal: {
    margin: 7,
    padding: 13,
    backgroundColor: '#eeefff',
    borderRadius: 10,
    flexDirection: 'row',
    borderWidth: 0.5,
  },
  viewTexts: {
    margin: 7,
    flex: 1,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,  
  },
  subTitle: {
    fontStyle: 'italic',
    fontSize: 14,
  }
})

