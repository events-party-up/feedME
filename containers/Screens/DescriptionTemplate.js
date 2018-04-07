import React from 'react';
import {View, Text, StyleSheet, Platform, Dimensions, ScrollView, TouchableWithoutFeedback, Modal, Image } from 'react-native';
import { Toolbar, ActionButton, Card } from 'react-native-material-ui';
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, CardItem } from "native-base";
import MapView, { Marker } from 'react-native-maps';
import IonIcon from 'react-native-vector-icons/Ionicons';

import { UITheme } from '../../utils/MuiTheme';
import AppBar from '../../components/AppBar';
import StrippedBar from '../../components/AppBar/StrippedAppBar.js';
import DescBar from '../../components/AppBar/DescriptionBar.js';
import ListItem from '../../components/ListItem';
import DescriptionItem from '../../components/ListItem/DescriptionItem.js';
import TimeItem from '../../components/ListItem/TimeItem.js';
import LocationItem from '../../components/ListItem/locationItem.js';
import FoodItem from '../../components/ListItem/foodItem.js';
import CommentItem from '../../components/ListItem/commentItem.js';

import {events} from '../../events.js';

import {
  StackNavigator,
} from 'react-navigation';



var {height, width} = Dimensions.get('window')

export default class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      position: {latitude: 0, longitude: 0}
    }

  }



  componentDidMount(){
    console.log("CALLED");
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

  
  render() {
    console.log("STATE");
    console.log(this.state);
    // var {navigate} = this.prop.navigation;
    var csc = "OOOOIIIiI";
    var delta = "Looking to rush for the spring 2018 semester? Stop by to learn more about our Fraternity";
    var AP = "Want to help raise awareness for mental illness? Come to your fundraiser and learn more about our organization!";
    const navigate = this.props.navigation;
    var event = this.props.navigation.state.params.event;
    var array = [event];

    
    if(event.food === "Cookies") {var pic = require("../../images/cookie.png");  event.imgWidth = 30; event.imgHeight = 30;} 
    else if (event.food === "Pizza") {var pic = require("../../images/Pizza-icon.png"); event.imgWidth = 40; event.imgHeight = 40;}
    else if (event.food === "Coffee") {var pic = require("../../images/coffee.png"); event.imgWidth = 40; event.imgHeight = 40;} 
    else if (event.food === "Bagels") {var pic = require("../../images/bagel.png"); event.imgWidth = 40; event.imgHeight = 40;}
    else if (event.food === "Sandwiches") {var pic = require("../../images/sandwiches.png"); event.imgWidth = 40; event.imgHeight = 40;} 
    console.log(event);

    console.log(pic);
    return (
     
      <View>
      
          <DescBar name = {event.name} navigation = {navigate}/>
           
          
              <ScrollView contentContainerStyle={{overflow:'scroll'}}>
                <View style={{ flexDirection: 'row', alignItems: 'center', height: height/16 }}>
                  <Text style={{ color: '#BDBDBD', fontWeight: 'bold', left: 15 }}>Description</Text>
                </View>
               <DescriptionItem description = {event.description} />
    
                 <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', height: height/16 }}>
                  <Text style={{ color: '#BDBDBD', fontWeight: 'bold', left: 15 }}>Date and Time</Text>
                </View>
                  <TimeItem time = {event.time} date= {event.date} />
                 
                 <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', height: height/16 }}>
                  <Text style={{ color: '#BDBDBD', fontWeight: 'bold', left: 15 }}>Location</Text>
                </View>
                 <LocationItem location = {event.location} />
                 
                 <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', height: height/16 }}>
                  <Text style={{ color: '#BDBDBD', fontWeight: 'bold', left: 15 }}>Food</Text>
                </View>
                <FoodItem food = {event.foodDescription} />
                 
                 <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F8F8F8', height: height/16 }}>
                  <Text style={{ color: '#BDBDBD', fontWeight: 'bold', left: 15 }}>Additional Comments</Text>
                </View>
                <CommentItem comments = {event.comments} />

              
                <View style={row}>
                <TouchableWithoutFeedback onPress={() => {this.setState({modalVisible: !this.state.modalVisible})}}>
                <View style ={{backgroundColor: 'orange', width: '100%', height: 50, alignItems: 'center'}}>
                  <Text style={{ color: 'white', paddingTop: 15, fontWeight: 'bold', fontSize: 15}}>View on Map</Text>
                </View>
                </TouchableWithoutFeedback>
                </View>
                <Modal
                  visible={this.state.modalVisible}
                  animationType={'slide'}  
                >
                  <View>
                    <View style={{ flexDirection: 'row', paddingTop: 35, paddingBottom: 20, backgroundColor: UITheme.palette.primaryColor, justifyContent: 'center', alignItems: 'center'}}>
                       <Text style={{ alignSelf: 'center', textAlign: 'center', fontSize: 22, fontWeight: 'bold', color: 'white' }}>{event.date}</Text>
                        <View style={{ position: 'absolute', left: '90%', top: 20 }}>
                        <TouchableWithoutFeedback onPress={() => {this.setState({modalVisible: false})}}>
                          <IonIcon name="ios-close" size={55} color="white" style={{ alignSelf: 'flex-end' }}/>
                        </TouchableWithoutFeedback>
                        </View>
                    </View>
                   
                    <MapView style={styles.map}
                      initialRegion={{
                        latitude: event.lat,
                        longitude: event.long,
                        latitudeDelta: 0.0222,
                        longitudeDelta: 0.0121,
                      }}
                    >
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
                </Modal>

              
                
                
        </ScrollView>     
            

          
          
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

})

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
  flexDirection: 'row',
  alignSelf: 'center',
  flex: 3,
}

const votes = {
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  flex: 1,
  backgroundColor: 'white'
}

const row = {
  flex: 1,
  width: '100%',
  height:  height/3.5,

  margin: 0,
  padding: 0,
  alignItems: 'center' 
 
}

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