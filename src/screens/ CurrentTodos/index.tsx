import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Button,
} from 'react-native';
import {styles} from './style';
import {useTodoStore} from '../../store/dataStore';
import {useCompleteDataStore} from '../../store/completeData';
import {useNavigation} from '@react-navigation/native';
import {onDisplayNotification} from '../../components/Notification';
import CardItem from '../../components/Card';
import {CardType} from '../../types/allTypes';
import Header from '../../components/Header';
import {useInReivewData} from '../../store/inReviewData';
import Model from '../../components/Model';
const CurrentTodos = () => {
  const todos = useTodoStore((state: any) => state.todos);
  const deleteTodo = useTodoStore((state: any) => state.deleteTodo);
  const addInReview = useInReivewData((state: any) => state.addInReview);
  const navigation = useNavigation<any>();
  const [now, setNow] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 60 * 1000);
    todos.forEach((item: any, index: number) => {
      const todoDateTime = new Date(item.date);
      if (
        todoDateTime.getFullYear() === now.getFullYear() &&
        todoDateTime.getMonth() === now.getMonth() &&
        todoDateTime.getDate() === now.getDate() &&
        todoDateTime.getHours() === now.getHours() &&
        todoDateTime.getMinutes() === now.getMinutes()
      ) {
        onDisplayNotification(item.title, item.description);
        handleAddTodo(item, index);
      }
    });
    return () => clearInterval(intervalId);
  }, [now, todos]);

  const handleAddTodo = (item: CardType, index: number) => {
    addInReview(item);
    handleDeleteTodo(index);
  };

  console.log(todos, 'todoS');

  const handleDeleteTodo = (index: number) => {
    deleteTodo(index);
  };

  const handleEditTodo = (index: number) => {
    const itemToEdit = todos[index];
    navigation.navigate('CreateTodos', {index, itemToEdit});
  };
  const renderItem = ({item, index}: {item: any; index: number}) => (
    <CardItem
      item={item}
      index={index}
      handleDeleteTodo={handleDeleteTodo}
      handleEditTodo={handleEditTodo}
      handleAddTodo={handleAddTodo}
      fileType="CurrentTodos"
    />
  );

  return (
    <View style={styles.main}>
      <Header title="Edit your Task" />
      <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
        <Text style={styles.progress}>In progress task </Text>
      </TouchableOpacity>
      <FlatList
        data={todos}
        ListEmptyComponent={
          <Text style={styles.titleText}>Data is not added</Text>
        }
        renderItem={renderItem}
      />
      <Model modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  );
};

export default CurrentTodos;
