import React from 'react';
import { View, Text, StyleSheet, Platform, ScrollView, TouchableWithoutFeedback, TextInput, ActivityIndicator } from 'react-native';
import TimerMixin from 'react-timer-mixin';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { UITheme } from '../../utils/MuiTheme';
import Modal from "react-native-modal";
import {events} from '../../events.js';

export default class LoginScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
      userName: '',
      password: '',
    }
  }
// login(this.state.userName.toLowerCase(), this.state.password.toLowerCase())
  handleLogIn(navigation) {
     this.setState({modalVisible: true});

    modalContent = this.renderModelContentLoading();
    loading = false;
    setTimeout(() => {this.setState({modalVisible: false}); this.props.navigation.navigate("Overview")}, 1000);
      
  }
  renderModelContentLoading () {
     return (
      <View>
        <ActivityIndicator size="large" color='#2196F3' />
        <Text style={{ marginTop: 20, fontSize: 17 }}>Logging you in</Text>
      </View>
    )
  }
  renderModelContentRetry () {
    
  }
  render() {
    console.log(this.props);

    const navigate = this.props.navigation;
    
    var loading = this.state.modalVisible;
    var modalContent = this.renderModelContentLoading();
    
    
    
    // modalContent = this.renderModelContentLoading();
    // loading = false;
    // setTimeout(() => {  this.props.navigation.navigate("Template"), events});
      
    
   
   
    return (
     <View style={{ height: '100%', marginTop: 0}}>
        <View style={{ flexDirection: 'column', backgroundColor: UITheme.palette.primaryColor, flex: 0.4, height: '100%', alignItems: 'flex-start', padding: 25  }}>
          <View style={{ flexDirection: 'row', flex: 1, alignSelf: 'center', marginTop: 20  }}>
            <View style={{ alignSelf: 'center', marginTop: 10  }}><Text style={{ color: 'white', fontSize: 28, fontWeight: '300' }}>Feed<Text style={{ fontWeight: '800'}}>ME</Text></Text></View>
          </View>
            <Text style={{ color: 'white', fontSize: 22, fontWeight: '700', alignSelf: 'center', marginTop: 10  }}>University of Pittsburgh</Text>
        </View>
      
        <TouchableWithoutFeedback onPress={() => {this.props.navigation.navigate("Overview")}}>
        <View style={{ flexDirection: 'column', flex: 0.1, height: '100%', marginTop: 60  }}>
        <Text style={{ fontSize: 26, paddingLeft: 25 }}>Sign in</Text>
        </View>
        </TouchableWithoutFeedback>
          <View style={{ flexDirection: 'row', padding: 15, alignSelf: 'center' }}>
           <View style={{  alignItems: 'center', justifyContent: 'center', backgroundColor: UITheme.palette.primaryColor, height: 50,  width: 50 }}>
              <IonIcon name="md-person" color="white" size={25} />
           </View>
            <TextInput
              style={{ padding: 10, width: '80%', height: 50, borderWidth: 0, backgroundColor: '#F7F8FC' }}
              // value={this.state.userName}
              // onChangeText={(userName) => this.setState({userName})}
              placeholder="Username" />
          </View>
          <View style={{ flexDirection: 'column', flex: 0.4, height: '100%' }}>
            <View style={{ flexDirection: 'row', padding: 15, alignSelf: 'center' }}>
           <View style={{  alignItems: 'center', justifyContent: 'center', backgroundColor: UITheme.palette.primaryColor, height: 50,  width: 50 }}>
              <IonIcon name="md-lock" color="white" size={25} />
           </View>
            <TextInput
              style={{ padding: 10, width: '80%', height: 50, borderWidth: 0, backgroundColor: '#F7F8FC' }}
              value={this.state.password}
              onChangeText={(password) => this.setState({password})}
              placeholder="Password"
              secureTextEntry={true} />
          </View>
          </View>
          
           <View style={{ flexDirection: 'column', flex: 1, height: '100%', paddingTop: 15, paddingLeft: 25, paddingRight: 25}}>
              <TouchableWithoutFeedback onPress={() => {this.handleLogIn(this.props.navigation)}}>
                <View style={{ backgroundColor: UITheme.palette.primaryColor, height: 60, alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: 'white', alignSelf: 'center', fontSize: 20}}>Sign in</Text>
                </View>
              </TouchableWithoutFeedback>
                
            </View>
            <Modal isVisible={loading}>
              <View style={modalStyle}>
                {modalContent}
              </View>
            </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: '#F7F8FC',
    height: '100%'


  },
});

const modalStyle = {
    backgroundColor: "white",
    padding: 22,
    justifyContent: "center",
    height: '20%',
    alignItems: "center",
    borderRadius: 4,
    borderColor: "rgba(0, 0, 0, 0.1)"
}

const scrollViewStyle = {
  // marginTop: height/7.5,
  width: '100%',
}

// function mapStateToProps (state) {
//   return {
//     user: state.user
//   }
// }

// function mapDispatchToProps (dispatch) {
//   return {
//     login: () => dispatch(login())
//   }
// }

