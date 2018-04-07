import React from 'react';
import { View, Text, StyleSheet, Platform, ScrollView, TouchableWithoutFeedback, Alert } from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { UITheme } from '../../utils/MuiTheme';
import { height, width } from '../../utils/getDimensions';
// import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';

export default class DescBar extends React.Component {

  render() {

    return (
      <View style={style}>
        
        <View style={displayOption}>
          
          
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Overview")}>
          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <Text style={{ color: 'white', fontSize: 18, flex: 1, alignSelf: 'flex-end', opacity: 0.7 }}>List View</Text>
          </View>
          </TouchableWithoutFeedback>
          <View flex="0.2" /> 
          
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Map")}>
          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <Text style={{ color: 'white', fontSize: 18, flex: 1, opacity: 0.7 }}>Map View</Text>
         </View>
         </TouchableWithoutFeedback>
        </View>
        <View style={innerWrapper}>
         <Text style={{ color: 'white', fontSize: 30, flex: 1.25 }}>{this.props.name}</Text>
        {/*} <Text style={{ color: 'white', fontSize: 18, flex: 1, opacity: 0.9 }}>Near you</Text>*/}
        </View>
       
       
        
      </View>
       
    );
  }
}
const dayActiveOuter = {
  borderRadius: 200,
  alignItems:'center', 
  flex: 1
}
const dayActiveInner = {
  backgroundColor: 'white',
  overflow: 'hidden',
  borderRadius: 200,
  alignSelf:'center', 
  height: 30,
  width: 30,

}
const dayStyle = {
  color: 'white', 
  fontSize: 20,
  opacity: 1,
  flex: 1,
  textAlign: 'center',
  paddingLeft: 10,
  paddingRight: 10,

}

const dowStyle = {
  color: 'white', 
  fontSize: 12,
  opacity: 0.9,
  flex: 1,
  paddingLeft: 10,
  paddingRight: 10,
  textAlign: 'center',

}

const style = {
  height: (Platform.OS === 'ios') ? 100 : 0, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)
  backgroundColor: UITheme.palette.primaryColor,
  height: height/5,
  paddingTop: (Platform.OS === 'ios') ? 30 : 0, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)
}
const calendarStrip = StyleSheet.create({
  contentContainer: {
    flex: 0.7,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    overflow: 'scroll'

  }
});

const innerWrapper = {
  flex: 1,
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
 
}
const displayOption = {
  height: 50,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
 
}

