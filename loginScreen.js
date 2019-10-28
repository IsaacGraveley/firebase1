import React, {Component} from 'react';
import { View, Text, StyleSheet, Button, TextInput, Image } from 'react-native';

export default class LoginScreen extends Component {
    render() {
      return (
        <View style={styles.container}>
<Image
          style={styles.imageStyle}
          source={{uri: 'https://firebasestorage.googleapis.com/v0/b/hockey-79f75.appspot.com/o/chris-liverani-5oZ9uVx7buc-unsplash.jpg?alt=media&token=1ab9cb69-61c5-4444-85a5-020df5767013'}}
        />
          <Text style={styles.welcomeTxt}>Welcome to NHL news and Fantasy Team </Text>
          <Text style={styles.infoTxt}>Please Log In with your account info</Text>
          <Text>Username</Text>
          {/* create txt inputs with the styles from down below */}
          <TextInput
      style={styles.inputArea}
      />
        <Text>Password</Text>
        <TextInput
      style={styles.inputArea}
       />
       {/* create a button, that when is pressed will switch to the tab navigator created in the app.js file */}
        <Button onPress={
            () =>
             this.props.navigation.navigate('Tabs')
        } title="Log In"></Button>
      </View>
      );
    }
  }

  //create styles for this page
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    welcomeTxt: {
      textAlign: "center",
      marginTop: -150,
      color: '#4B92CC',
      fontSize: 24,
    },

    infoTxt: {
      color: '#4B92CC',
      fontSize: 14,
      paddingBottom: 10,
    },

    imageStyle: {
      marginTop: -200,
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },

    inputArea: {
      height: 40,
       width: 300, 
       borderColor: 'gray', 
       borderWidth: 1, 
       borderRadius: 20
    }
  });