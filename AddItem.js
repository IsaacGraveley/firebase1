import React, { Component } from 'react';
import {View,Text,TouchableHighlight,StyleSheet,TextInput,Alert} from 'react-native';
import firebase from './firebase';
//make the additem variable add the inserted item to the database when the function is executed
let addItem = item => {
    firebase.database().ref('/items').push({
        name: item,
    });
};

export default class AddItem extends Component {
    //create an empty state to allow the name data to change
    state = {
        name: '',
    };
    //on change set the state data name to whatever text was inputted 
    handleChange = e => {
        this.setState({
            name: e.nativeEvent.text,
        });
    };
    //on submit add the item with the name currently held in the state at that time, and alert the user it's been addded
    handleSubmit = () => {
        addItem(this.state.name);
        Alert.alert('Item saved successfully');
    };
   
    
    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.title}>Add a player to your roster</Text>
                {/* add a text input that will send the data to the state */}
                <TextInput style={styles.itemInput} onChange={this.handleChange} placeholder="Add Item name" />
                {/* create a button that on push will execute the handleSubmit function */}
                <TouchableHighlight
                    style={styles.button}
                    underlayColor="white"
                    onPress={this.handleSubmit}
                >
                    <Text style={styles.buttonText}>Add player</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#23395B',
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: 'white',
    },
    itemInput: {
        height: 50,
        padding: 4,
        marginRight: 5,
        fontSize: 23,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 8,
        color: 'white'
    },

    buttonText: {
        fontSize: 18,
        color: 'black',
        alignSelf: 'center'
    },

    button: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 8,
        marginBottom: 10,
        marginTop: 10,
        alignSelf: 'stretch',
        justifyContent: 'center'
    }
});