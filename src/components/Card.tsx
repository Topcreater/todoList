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
import deleteIcon from '../assests/icons/trash.png';
import editIcon from '../assests/icons/clipboard.png';
import MarkIcon from '../assests/icons/checkmark.png';

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
            <Image
              source={deleteIcon}
              style={{height: 25, width: 25, marginTop: 10}}
            />
          </TouchableOpacity>
          {showButtons && (
            <View>
              <TouchableOpacity onPress={() => handleEditTodo(index)}>
                <Image
                  source={editIcon}
                  style={{height: 25, width: 25, marginTop: 10}}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleAddTodo(item, index)}>
                <Image
                  source={MarkIcon}
                  style={{height: 25, width: 25, marginTop: 10}}
                />
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
    backgroundColor: '#FFF8C9',
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
    marginTop: 5,
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
