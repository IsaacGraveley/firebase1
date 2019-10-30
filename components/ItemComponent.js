import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class ItemComponent extends Component {

    //the element must include an array to function properly
    static propTypes = {
        items: PropTypes.array.isRequired
    };
 
    render() {
        return (
            <View style={styles.itemsList}>
                {/* by determining the items index/key we can assign each string a specific and unique value */}
                {this.props.items.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text style={styles.itemtext}>{item.name}</Text>
                        </View>
                    );
                })}
            </View>
        );
    }
}

//create styles for this component
const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    itemtext: {
        fontFamily: 'Futura',
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    }
});
