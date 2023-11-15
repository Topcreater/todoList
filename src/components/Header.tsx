import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}: any) => {
  return (
    <View style={styles.contanir}>
      <Text style={styles.heading}>{title}</Text>
    </View>
  );
};

export const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    textAlign: 'center',
  },
  contanir: {
    marginLeft: 5,
  },

  titleText: {
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
export default Header;
