import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

export default class StoryComponent extends Component {

    static propTypes = {
        stories: PropTypes.array.isRequired
    };
 
    render() {
        return (
            <View style={styles.itemsList}>
                {this.props.stories.map((story, index) => {
                    return (
                        <View key={index}>
                            <Text style={styles.itemtext}>{story.title}</Text>
                        </View>
                    );
                })}
            </View>
        );
    }
}
const styles = StyleSheet.create({
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
