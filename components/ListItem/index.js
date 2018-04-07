import React from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { height, width } from '../../utils/getDimensions';
import { UITheme } from '../../utils/MuiTheme';

export default class ListItem extends React.Component {
  render() {
    const vote = this.props.vote ? this.props.vote: '';
    return (
    	<View style={wrapperStyle}>
        <Text style={{flex: 1, alignSelf: 'flex-start', paddingLeft: 15, paddingTop: 5, fontWeight: 'bold', color: '#4bce9c', }}>{this.props.org}</Text>
        <View style={description}>
            <Text style={{ fontSize: 13, alignSelf: 'flex-start' }}>{this.props.description}</Text>
        </View>
        <View style={row}> 
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <MaterialIcons name="clock" size={12} color="#666666"></MaterialIcons>
            <Text style={{ color: '#999999'}}>{this.props.time}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
            <MaterialIcons name="food" size={12} color="#666666"></MaterialIcons>
            <Text style={{ color: '#999999' }}>{this.props.food}</Text>
          </View>
          
         
        </View>
                 
      </View>
    );
  }
}

const wrapperStyle = {
  flexDirection: 'column',
  alignSelf: 'center',
  width: width, 
  height: height/6,
  borderBottomWidth: 1,
  borderBottomColor: '#E0E0E0',
  paddingBottom: 5
}

const info = {
  flexDirection: 'column',
  alignItems: 'center',
  flex: 3,
  backgroundColor: 'white'

}
const specs = {
  flexDirection: 'row',
  alignSelf: 'center',
  flex: 1,
}
const description = {
  paddingLeft: 15,
  alignItems: 'flex-start',
  justifyContent: 'flex-start'
}

const votes = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  backgroundColor: 'white'
}

const row = {
  flexDirection: 'row',
  paddingLeft: 15,
  paddingTop: 15,
}