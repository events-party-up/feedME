import React from 'react';
import {View, Text, StyleSheet, Platform, Dimensions, ScrollView, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Toolbar, ActionButton, Card } from 'react-native-material-ui';
import { Container, Header, Title, Left, Icon, Right, Body, Content, CardItem } from "native-base";

import { UITheme } from '../../utils/MuiTheme';
import AppBar from '../../components/AppBar';
import StrippedBar from '../../components/AppBar/StrippedAppBar.js';
import ListItem from '../../components/ListItem';



import {events} from '../../events.js';
import {events2} from '../../events2.js';

import {
  StackNavigator,
} from 'react-navigation';


import MapView, { Marker } from 'react-native-maps';

var {height, width} = Dimensions.get('window')

const util = require('util');


const { Component } = React;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: 20,
    paddingLeft: 15,
    paddingTop: 0,
    backgroundColor: 'steelblue',

  },
  caption: {
    fontSize: 20,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
   left: 0,
   right: 0,
   top: 0,
   bottom: 0,
   alignSelf: 'stretch',
  marginTop: 0,
   height: '100%',
   width: 380,

     },
     main: {
          flex: 1,
          backgroundColor: 'red',
           backgroundColor: '#fff',
           alignItems: 'center',
          justifyContent: 'center',
        },

});


export default class MapScreen extends Component {
  
 constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedItem: 'About',
      events: events2,
      position: {longitude: 0, latitude: 0}

    }

    this.createDayArray = this.createDayArray.bind(this);
     
  }

  componentDidMount(){

    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          position: position.coords,
          error: null,
        });
      },
      (error) => console.log("ERROR " + error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  

  createDayArray(day) {
    var dayEvents = [];

    for(var i = 0; i < events.length; i++){
      
      if(events[i].day === day){
        dayEvents.push(events[i]);
      }
    }
   this.setState({events: dayEvents});

  }
  

  render() {





     const navigate = this.props.navigation;

    return (
      <View>
       	<StrippedBar navigation = {navigate} createDayArray={this.createDayArray}/>
          


           <MapView style={styles.map}
       initialRegion={{
         latitude: 40.442907,
         longitude: -79.958946,
         latitudeDelta: 0.0222,
         longitudeDelta: 0.0121,
       }}

       >

       {
          this.state.events.map(function(event, i){

            if(event.food === "Cookies") var pic = require("../../images/cookie.png"); 
            else if (event.food === "Pizza") var pic = require("../../images/Pizza-icon.png");
            else if (event.food === "Coffee") var pic = require("../../images/coffee.png"); 
            else if (event.food === "Bagels") var pic = require("../../images/bagel.png");
            else if (event.food === "Sandwiches") var pic = require("../../images/sandwiches.png");  
                     

            return( 

              <TouchableWithoutFeedback key={i} onPress={() => navigate.navigate("Template", {event:event})}>

                <MapView.Marker
                  coordinate={{latitude: event.lat, longitude: event.long}}
                  title={event.name}
                  description={event.shortDescription}      
                > 
                  <Image
                    style={{width: event.imgWidth, height: event.imgHeight}}
                    source={pic}

                  />
                </MapView.Marker>
            </TouchableWithoutFeedback>
              )


                  })
                }

          <MapView.Marker
                coordinate={{latitude: this.state.position.latitude,
                             longitude: this.state.position.longitude}}
                title={"You"}
                     
            > 
                        
                <Image
                    style={{width: 30, height: 30}}
                    source={require("../../images/you.png")}

                />
          </MapView.Marker>
         
     </MapView>
   </View>


/**<MapView.Marker
            coordinate={{latitude: 40.445025,
            longitude: -79.960803}}
            title={"Random Event"}
            description={"This event offers free pizza"}
           
            > 

            <Image
              style={{width: 40, height: 40 }}
          source={require('../../images/Pizza-icon.png')}

        />
            </MapView.Marker>

            <MapView.Marker
            coordinate={{latitude: 40.445042,
            longitude: -79.956612}}
            title={"Computer Science Event"}
            description={"This event offers free cookies"}
           
            > 

            <Image
              style={{width: 30, height: 30 }}
          source={require('../../images/cookie.png')}

        />
            </MapView.Marker>

             <MapView.Marker
            coordinate={{latitude: 40.439517,
            longitude: -79.961271}}
            title={"Computer Science Event"}
            description={"This event offers hot coffee"}
           
            > 

            <Image
              style={{width: 40, height: 40 }}
          source={require('../../images/coffee.png')}

        />
            </MapView.Marker>


**/
       
 
    );
  }
};
