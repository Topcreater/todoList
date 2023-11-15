import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },

  titleText: {
    color: 'grey',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 250,
  },
  progress: {
    color: 'grey',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 10,
    backgroundColor: '#89CFF3',
    width: windowWidth / 1.05,
    height: 50,
    textAlignVertical: 'center',
    borderRadius: 10,
  },
});
