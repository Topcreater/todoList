import React from 'react';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
  },
  contanir: {
    marginLeft: 5,
  },
  previewContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 20,
    justifyContent: 'space-between',
    backgroundColor: '#9D9D9D',
    marginRight: 10,
    borderRadius: 10,
    paddingVertical: 10,
  },
  imageContainer: {
    justifyContent: 'center',
  },
  previewImage: {
    width: 144,
    height: 96,
    borderRadius: 10,
    alignItems: 'center',
  },

  actionImage: {
    marginLeft: 40,
    marginBottom: 30,
  },
  actionLiContanir: {
    position: 'absolute',
    top: 15,
    right: 30,
    borderRadius: 5,
    backgroundColor: '#E3E3E3',
  },
  actionText: {
    color: 'black',
    paddingTop: 5,
  },
  titleText: {
    color: 'black',
  },
  sizeText: {
    color: 'black',
    fontSize: 12,
    letterSpacing: 0.7,
    marginTop: 10,
    width: 100,
  },
});
