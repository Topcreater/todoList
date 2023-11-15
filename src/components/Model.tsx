import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import CardItem from './Card';
import {useInReivewData} from '../store/inReviewData';
import {useCompleteDataStore} from '../store/completeData';
import {CardType} from '../types/allTypes';

export default function Model({modalVisible, setModalVisible}: any) {
  const inReview = useInReivewData((state: any) => state.inReview);
  const deleteInReview = useInReivewData((state: any) => state.deleteInReview);
  const addComplete = useCompleteDataStore((state: any) => state.addComplete);

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleDeleteTodo = (index: number) => {
    deleteInReview(index);
  };
  const handleAddTodo = (item: CardType, index: number) => {
    addComplete(item);
    handleDeleteTodo(index);
  };

  const renderItem = ({item, index}: {item: any; index: number}) => (
    <CardItem
      item={item}
      index={index}
      handleDeleteTodo={handleDeleteTodo}
      handleEditTodo={() => {}}
      handleAddTodo={handleAddTodo}
      fileType="Model"
    />
  );
  return (
    <Modal
      visible={modalVisible}
      animationType="slide"
      presentationStyle="overFullScreen"
      transparent={true}
      onRequestClose={handleCloseModal}>
      <View style={styles.modalMainContanir}>
        <View style={styles.modalContanir}>
          <TouchableOpacity onPress={handleCloseModal}>
            <Text style={styles.closeIcon}>Close</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.inProcess}>Here are in process task</Text>
            <FlatList
              data={inReview}
              ListEmptyComponent={
                <Text style={styles.titleText}>Data is not added</Text>
              }
              renderItem={renderItem}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
const windowWidth = Dimensions.get('window').width;
export const styles = StyleSheet.create({
  modalMainContanir: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(203, 203, 203, 0.80)',
    position: 'relative',
  },
  modalContanir: {
    marginTop: 90,
    backgroundColor: 'white',
    flex: 1,
    width: windowWidth,
  },
  closeIcon: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    marginTop: 15,
  },
  inProcess: {
    fontSize: 20,
    color: 'black',
    marginLeft: 10,
    marginTop: 20,
  },
  titleText: {
    color: 'grey',
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 250,
  },
});
