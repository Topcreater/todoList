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
const CurrentTodos = () => {
  const todos = useTodoStore(state => state.todos);
  const deleteTodo = useTodoStore(state => state.deleteTodo);
  const addComplete = useCompleteDataStore(state => state.addComplete);
  const navigation = useNavigation<any>();
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setNow(new Date());
    }, 1000);
    todos.forEach((item: any) => {
      const todoDateTime = new Date(item.date);
      if (
        todoDateTime.getFullYear() === now.getFullYear() &&
        todoDateTime.getMonth() === now.getMonth() &&
        todoDateTime.getDate() === now.getDate() &&
        todoDateTime.getHours() === now.getHours() &&
        todoDateTime.getMinutes() === now.getMinutes()
      ) {
        onDisplayNotification(item.title, item.description);
      }
    });
    return () => clearInterval(intervalId);
  }, [now, todos]);

  const handleAddTodo = (item: CardType, index: number) => {
    addComplete(item);
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
      showButtons={true}
    />
  );

  return (
    <View style={styles.main}>
      <Header title="Edit your Task" />
      <FlatList
        data={todos}
        ListEmptyComponent={
          <Text style={styles.titleText}>Nothing is downloaded.....</Text>
        }
        renderItem={renderItem}
      />
    </View>
  );
};

export default CurrentTodos;
