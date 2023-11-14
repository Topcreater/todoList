import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  contanire: {
    marginLeft: 5,
  },
  heading: {
    fontSize: 20,
    marginTop: 20,
    color: 'black',
  },
  InputText: {
    color: 'black',
    width: windowWidth / 1.2,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
  },
  btnContainr: {
    backgroundColor: '#11A3C9',
    paddingVertical: 20,
    marginTop: 20,
    width: windowWidth / 1.05,
    marginLeft: 3,
    textAlign: 'center',
    borderRadius: 10,
  },
});
