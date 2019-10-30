import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Dimensions } from 'react-native';

//get the screen width and make it a variable
const screenWidth = Math.round(Dimensions.get('window').width);

//this file creates a component to be used on the updateScreen page, to resemble news like article postings with a title, image and caption

//create an array of images to be used in the props value.
const updateImages = {
    hockeyPic: require('./assets/hockey-player.png'),
    newsPic: require('./assets/newspaper.png')
  };

export default class IconBlock extends React.Component {
    
  render() {
  return (
    <ScrollView contentContainerStyle={styles.updateImageContainer}>
      {/* setup an image for the component, with the prop name of Icontitle */}
        <Text style={styles.updateTitle}>{this.props.iconTitle}</Text>
        {/* setup an image for the component, with the prop name of iconImage */}
        <Image
          style={styles.imageStyle}
          source={updateImages[this.props.iconImage]}
        />
        {/* setup an image for the component, with the prop name of iconCaption */}
      <Text style={styles.updateCaption}>{this.props.iconCaption}</Text>
    </ScrollView>
  );
}
}

//create styles for the component
const styles = StyleSheet.create({
  updateImageContainer: { 
    marginTop: '5%',
    flex: 1,
    padding: 10,
    width: screenWidth,
    height: '100%',
    backgroundColor: '#23395B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageStyle: {
    width: '40%',
    height: '60%'

  },

  updateTitle: {
    flex: 1,
    color: 'white',
    fontSize: 30,
    fontFamily: 'Futura',
    textAlign: "left"
  },
  updateCaption: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Futura',
    textAlign: 'center',
  }
});