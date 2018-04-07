import React from 'react';
import { View, Text, StyleSheet, Platform, ScrollView, TouchableWithoutFeedback, Button, Alert, Modal} from 'react-native';
import { Toolbar } from 'react-native-material-ui';
import { UITheme } from '../../utils/MuiTheme';
import { height, width } from '../../utils/getDimensions';
// import Icon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import {events} from '../../events.js';
import {events2} from '../../events2.js';
import CreateEvents from '../CreateEvents';

export default class AppBar extends React.Component {
  
   constructor(props) {
    super(props);
    this.state = {
      selectedDate: 6,
      events: events,
      numEvents: 6

    }
     
  }
  
  // iterateDays(){
  //   var days = [];
  //   for(int i = 1; i < 31; i++){
  //     days[i] = i;
  //   }
  //   var week = ["Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed"];
  //   var j = 0;
  //   var i = 0;
  //   for(i = 0; i < 31; i++){
                 
  //     return(
  //       <View style={{ flexDirection: 'column' }}>       
  //         <Text style={dowStyle}>{week[j]}</Text>
  //         <Text style={dayStyle}>{i}</Text>
  //       </View>
  //     )
  //     j++;
  //     if(j === 7) j = 0;
  //   }
  // }

  handleClickDate(selectedDate){
    this.setState({selectedDate});
    this.state.numEvents=this.props.createDayArray(selectedDate).length; //stores number of events


  }

  renderActive(i){
    return(
         <View style={dayActiveOuter}>
            <View style={dayActiveInner}>
                <Text style={focus}>{i}</Text>
            </View>
         </View>

      )
  }

  renderNonActive(i){
    return(
       
        <Text style={dayStyle}>{i}</Text>
    )
  }

  render() {

  // console.log(this.createDayArray());
  
  

  var days = [];
  for(var i = 1; i < 32; i++){
    days[i] = i;
  }

  const hold = this;
  var week = ["Thurs", "Fri", "Sat", "Sun", "Mon", "Tues", "Wed"];
  var j = -1;
    

    const dates = days.map(function(days, i){
      j++;
      if(j===7) j = 0;
      var date = hold.state.selectedDate === i ? hold.renderActive(i) : hold.renderNonActive(i);

      return(      
      <TouchableWithoutFeedback key={i} onPress={() => {hold.handleClickDate(i)}}>
        
        <View  style={{ flexDirection: 'column' }}>       
         

          <Text style={dowStyle}>{week[j]}</Text>
               
          {date}

          </View>
      </TouchableWithoutFeedback>
      )
      

    })
  
   
    return (

    	<View style={style}>
       
      
      <TouchableWithoutFeedback onPress={() => { this.props.handleOpen()} } style={{backgroundColor: 'blue', position:'absolute'}}>
          <View style={{position:'absolute' }}>
            <EntypoIcon name="plus" size={50} color='white' />
          </View>
        </TouchableWithoutFeedback>
       
     
        <View style={displayOption}>
         
          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <Text style={{ color: 'white', fontSize: 18, flex: 1, alignSelf: 'flex-end', fontWeight: 'bold' }}>List View</Text>
          </View>
          <View flex="0.2" /> 
          
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate("Map")}>
          <View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <Text style={{ color: 'white', fontSize: 18, flex: 1, opacity: 0.7 }}>Map View</Text>
         </View>
         </TouchableWithoutFeedback>
        </View>
        <View style={innerWrapper}>
    	   <Text style={{ color: 'white', fontSize: 24, flex: 1.25 }}>University of Pittsburgh</Text>
         <Text style={{ color: 'white', fontSize: 40, flex: 2.25 }}>{this.state.numEvents}</Text>
        {/*} <Text style={{ color: 'white', fontSize: 18, flex: 1, opacity: 0.9 }}>Near you</Text>*/}
        </View>
       

        <View contentContainerStyle={calendarStrip.contentContainer}>
           <Text style={{ color: 'white', fontSize: 25, paddingBottom: 15, alignSelf: 'center' }}>March</Text>
           <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingBottom: 5, flexDirection: 'column', alignSelf: 'center', overflow:'scroll'}} horizontal = {true}>
           <View style={{ flexDirection: 'row' }} >
              {dates}

           </View>
           
         
          </ScrollView>
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
  height: height/2.7,
  paddingTop: (Platform.OS === 'ios') ? 30 : 0, //this is just to test if the platform is iOS to give it a height of 20, else, no height (Android apps have their own status bar)
  paddingTop: height >= 800 ? 60 : 30
}
const calendarStrip = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 35
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

const focus = {
  color: UITheme.palette.primaryColor,
  fontSize: 20,
  textAlign: 'center', 
  top: 3
}

