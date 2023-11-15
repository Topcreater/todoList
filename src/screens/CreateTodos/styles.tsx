import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  contanire: {
    marginLeft: 10,
  },
  heading: {
    fontSize: 20,
    marginTop: 20,
    color: 'black',
    textAlign: 'center',
  },
  label: {
    color: 'black',
    fontSize: 15,
    marginTop: 20,
  },
  InputText: {
    color: 'black',
    width: windowWidth / 1.2,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
  },
  DateText: {
    color: 'gray',
    width: windowWidth / 1.2,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginTop: 10,
    paddingBottom: 5,
  },
  btnContainr: {
    backgroundColor: '#11A3C9',
    paddingVertical: 20,
    marginTop: 20,
    width: windowWidth / 1.2,
    marginLeft: 3,
    textAlign: 'center',
    borderRadius: 10,
  },
});
