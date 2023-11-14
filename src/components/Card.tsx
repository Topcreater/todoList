import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {CardType} from '../types/allTypes';

const CardItem = ({
  item,
  index,
  handleDeleteTodo,
  handleEditTodo,
  handleAddTodo,
  showButtons = true,
}: CardType) => {
  return (
    <View style={styles.contanir}>
      <View style={styles.previewContainer}>
        <View style={styles.imageContainer}>
          <Image source={item.image} style={styles.previewImage} />
        </View>
        <View>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.sizeText}>{item.description}</Text>
          <Text style={styles.sizeText}>{item.date.toLocaleString()}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => handleDeleteTodo(index)}>
            <Text style={styles.actionText}>delete</Text>
          </TouchableOpacity>
          {showButtons && (
            <View>
              <TouchableOpacity onPress={() => handleEditTodo(index)}>
                <Text style={styles.actionText}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleAddTodo(item, index)}>
                <Text style={styles.actionText}>Mark</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
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
export default CardItem;
