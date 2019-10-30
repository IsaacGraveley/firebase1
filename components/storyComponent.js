import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

//create the story component
export default class StoryComponent extends Component {

    //require the component to contain an array to function properly
    static propTypes = {
        stories: PropTypes.array.isRequired
    };
 
    render() {
        return (
            <View style={styles.itemsList}>
                {/* change the props of the stories to include the data from the story branch */}
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
