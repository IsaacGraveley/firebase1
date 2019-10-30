import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemComponent from './components/ItemComponent';
import firebase from './firebase';

//create new var itemsRef, assign it to the items branch of the database
let itemsRef = firebase.database().ref('/items');


export default class List extends Component {
    //create an empty which contains items to allow it to be changed, which will be used later on.
    state = {
        items: []
    };

    //whenever the component is loaded, take a snapshot of the items branch in the database
    //so basically read what is currently in the items branch
    //make the var data = to whatever is in the branch
    //make the var items = to an object with the values of data
    //set the state of items to the result of the data
    componentDidMount() {
        itemsRef.on('value', snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({ items });
        });
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Your fantasy team</Text>
                {/* Cycle through & Display the strings of data from the items variable  */}
                {this.state.items.length > 0 ? (
                    <ItemComponent items={this.state.items} />
                ) : (
                    <Text>No items</Text>
                )}
            </View>
        );
    }
}

//create the styles for the page
const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: 'white',
        justifyContent: 'center',
        backgroundColor: '#23395B',
    },

    title: {
        fontFamily: 'Futura',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    }
});