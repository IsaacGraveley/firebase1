import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemComponent from './components/ItemComponent';
import firebase from './firebase';

// hockeyDatabase = firebase.database().ref('player');
let itemsRef = firebase.database().ref('/items');
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

export default class List extends Component {
    state = {
        items: []
    };
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
                {this.state.items.length > 0 ? (
                    <ItemComponent items={this.state.items} />
                ) : (
                    <Text>No items</Text>
                )}
            </View>
        );
    }
}