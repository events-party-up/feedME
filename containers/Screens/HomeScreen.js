import React from 'react';
import {View, Text, StyleSheet, Platform, Dimensions, ScrollView, TouchableWithoutFeedback, Modal } from 'react-native';
import { Toolbar, ActionButton, Card } from 'react-native-material-ui';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, CardItem } from "native-base";

import { UITheme } from '../../utils/MuiTheme';
import AppBar from '../../components/AppBar';
import ListItem from '../../components/ListItem';
import CreateEvents from '../../components/CreateEvents';
import {events, pushToFile} from '../../events.js';
import {events2} from '../../events2.js';
import {
  StackNavigator,
} from 'react-navigation';


var {height, width} = Dimensions.get('window')

export default class HomePage extends React.Component {

 constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      events: events2

    }
    this.handleOpenClose = this.handleOpenClose.bind(this);
    this.handleCreateEvent = this.handleCreateEvent.bind(this);
    this.createDayArray = this.createDayArray.bind(this);
    this.updateEvents = this.updateEvents.bind(this);


   
  }
  
  handleCreateEvent(event){
    const events = this.state.events;
    events.unshift(event);
    pushToFile(event);
    this.setState({ events });
    // console.log(events)
  }
  
  handleOpenClose() {
    console.log("N HERE");
    this.setState({
      modalVisible: !this.state.modalVisible,
    });
  }

  //creates an array of events for a particular day and returns it
  updateEvents() {

  }

  createDayArray(day) {

    var dayEvents = [];

    for(var i = 0; i < events.length; i++){
      
      if(events[i].day === day){
        dayEvents.push(events[i]);
      }
    }
   this.setState({events: dayEvents});
   return dayEvents;
  }
  
  
  render() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position.coords);
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
    const hold = this;
    

    const navigate = this.props.navigation;
    // var {navigate} = this.prop.navigation;
  	var csc = "Our club will be recruiting new members. We will also answer any questions you may have!";
  	var delta = "Looking to rush for the spring 2018 semester? Stop by to learn more about our Fraternity";
  	var AP = "Want to help raise awareness for mental illness? Come to your fundraiser and learn more about our organization!";
    return (
     
    	
      <View>
      {// <Button full rounded primary
      //       style={{ marginTop: 10 }}
      //       onPress={() => this.props.navigation.navigate("Map")}>
      //       <Text>Goto Profiles</Text>
      //     </Button>
    }
        	<AppBar navigation={navigate}  handleOpen={this.handleOpenClose} createDayArray={this.createDayArray}/>
    			 
           
       				<ScrollView contentContainerStyle={{height: 960, overflow:'scroll'}}>
              <View style={{height: '100%'}}>

                {

                  this.state.events.map(function(event, i){
                      
                     return( 

                      <TouchableWithoutFeedback key={i} onPress={() => {navigate.navigate("Template", {event: event}) }}>
                          <View>
                            <ListItem org= {event.name} time= {event.time} food={event.food} description={event.shortDescription} />
                          </View>
                      </TouchableWithoutFeedback>
                      )
                  })
                }
                </View>
       			   
    		  		</ScrollView> 
             
     
              
              <Modal
                  visible={this.state.modalVisible}
                  animationType={'slide'}  
              >
             <View>
                <CreateEvents handleClose={this.handleOpenClose} handleCreateEvent={this.handleCreateEvent}/>
             </View>
          </Modal>
      		
       </View>
       
    );
  }
}







const styles = StyleSheet.create({
  container: {
    backgroundColor: UITheme.palette.secondaryColor,
    position: 'absolute',
    top: -340,
    right: -5,
  }

})

const calendarStrip = StyleSheet.create({
  contentContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 35
  }
});

const List = StyleSheet.create({
  contentContainer: {
  
    justifyContent: 'center',
  }

})
const paper = StyleSheet.create({
container: {

 top: -50, 
}
})
const style = {
     flex: 1,
    top: 175,
    flexDirection: 'column',
}