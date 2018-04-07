import { COLOR, ThemeProvider } from 'react-native-material-ui';
import { StyleSheet, Platform } from 'react-native';




export const UITheme = {
  palette: {
    primaryColor: '#35C38D',
    secondaryColor: '#FF4081',
    outline: '#EEEEEE',
    secondaryText: '#9E9E9E',
  },
  toolbar: {
    container: {
      top: (Platform.OS === 'ios') ? 20 : 0,
    },
  },
};

