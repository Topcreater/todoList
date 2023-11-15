import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {useCompleteDataStore} from '../../store/completeData';
import {styles} from './style';
import CardItem from '../../components/Card';
import Header from '../../components/Header';
const CompleteTodos = () => {
  const deleteComplete = useCompleteDataStore(
    (state: any) => state.deleteComplete,
  );
  const complete = useCompleteDataStore((state: any) => state.complete);

  const handleDeleteTodo = (index: number) => {
    deleteComplete(index);
  };
  const renderItem = ({item, index}: {item: any; index: number}) => (
    <CardItem
      item={item}
      index={index}
      handleDeleteTodo={handleDeleteTodo}
      handleEditTodo={() => {}}
      handleAddTodo={() => {}}
      showButtons={false}
    />
  );
  return (
    <View style={styles.main}>
      <Header title="Compeleted Task" />
      <FlatList
        data={complete}
        ListEmptyComponent={
          <Text style={styles.titleText}>Data Not completed</Text>
        }
        renderItem={renderItem}
      />
    </View>
  );
};

export default CompleteTodos;
