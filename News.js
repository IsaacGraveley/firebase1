import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import firebase from './firebase';
export default class HomeScreen extends Component {
  
  hockeyDatabase = firebase.database().ref('story');
  state = {stories:{}, selectedId: '' }

  componentDidMount(){
    this.hockeyDatabase.on('value', stories =>{
      const storiesJSON = stories.val();
      this.setState({ stories: storiesJSON === null ? {} : storiesJSON});
    })
    // this.hockeyDatabase
    // .push({title: 'Malkin practices with Penguins, eyes return against Oilers'});
    // this.hockeyDatabase
    // .push({author: 'by Wes Crosby / NHL.com Independent Correspondent'});
    //  this.hockeyDatabase
    // .push({date: 'wednesday'});
    // this.hockeyDatabase
    // .push({body: 'CRANBERRY, Pa. -- Evgeni Malkin hopes to return from a lower-body injury when the Pittsburgh Penguins play against the Edmonton Oilers on Saturday.The 33-year-old center practiced Monday for the first time after missing Pittsburghs past 10 games. He took part in several drills, including rotating at center on a fifth line and working with the second power-play unit, while wearing a red no-contact jersey."I feel OK," Malkin said. "I try to do my best. I watched the games, how Pittsburgh played. They play amazing. I want to do my best and be back as soon as possible. Skate the last week, every day. We"ll see what"s going on the next couple days."'});

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
      <Text style={styles.newsBlock}>NHL News</Text>

{/* This block displays all of our story data into a text element */}
{
         Object.keys(this.state.stories).map( (title, index) =>
         <Text style={styles.newsBlock}>{`${JSON.stringify(this.state.stories[title])}`}</Text>       
       )
     }

    </ScrollView>
  );
  
}
}

const styles = StyleSheet.create({
  container: {
      height: 'auto',
    backgroundColor: '#23395B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  newsBlock: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Futura',
    // textAlign: 'center',
  }
});
