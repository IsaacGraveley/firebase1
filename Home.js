import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import firebase from './firebase';
import IconBlock from './components/iconComponent';
export default class HomeScreen extends Component {
  

  hockeyDatabase = firebase.database().ref('story');
  state = {stories:{}, selectedId: '' }

  componentDidMount(){
    this.hockeyDatabase.on('value', stories =>{
      const storiesJSON = stories.val();
      this.setState({ stories: storiesJSON === null ? {} : storiesJSON});
    })
    // this.hockeyDatabase
    // .push({title: 'Lafreniere taking Hughes advice as top prospect for 2020 NHL Draft'});
    // this.hockeyDatabase
    // .push({author: 'by Mike G. Morreale @mikemorrealeNHL / NHL.com Staff Writer'});
    //  this.hockeyDatabase
    // .push({date: 'thursday'});
    // this.hockeyDatabase
    // .push({body: 'Alexis Lafreniere, projected by many to be the No. 1 pick in the 2020 NHL Draft, received some valuable advice from a recent No. 1 NHL Draft pick with experience in handling pressure. Jack Hughes, the first player selected in the 2019 NHL Draft, by the New Jersey Devils, proved to be a helpful resource to the 18-year-old left wing from Rimouski of the Quebec Major Junior Hockey League when they met for the first time at the Bauer Hockey Combine in Exeter, New Hampshire, on July 18.'});

  }
  //Create
  create(payload) {
  }
  update(id, payload) {
  }
  delete(id){
  }
  
  render() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* {
         Object.keys(this.state.stories).map( (storyID, index) =>
         <Text>{`{story}: ${JSON.stringify(this.state.stories[storyID])}`}</Text>
         
       )
     } */}

<IconBlock iconTitle = "Keep up with NHL News" iconImage = "newsPic" iconCaption = "Come back and visit everyday to keep up with everything NHL"></IconBlock>
<IconBlock iconTitle = "Choose a fantasy team!" iconImage = "hockeyPic" iconCaption = "Add a list of 20 of your favourite hockey players, and compare points with your friends!"></IconBlock>
{/* 
                <Button
                    title="View your team"
                    color="green"
                    onPress={() => this.props.navigation.navigate('List')}
                />
                <Button
                    title="Add Players"
                    color="green"
                    onPress={() => this.props.navigation.navigate('Add')}
                /> */}

    </ScrollView>
  );
  
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#23395B',
    alignItems: 'center',
    justifyContent: 'center',
    height: 'auto',
  }
});
