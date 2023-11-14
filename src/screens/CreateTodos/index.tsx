import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
} from 'react-native';
import {styles} from './styles';
import {useTodoStore} from '../../store/dataStore';
import {useRoute} from '@react-navigation/native';
import {DateTimePickerEvent} from '@react-native-community/datetimepicker';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import {useNavigation} from '@react-navigation/native';
const CreateTodos = () => {
  const route = useRoute();
  const {index, itemToEdit} = route.params || {};
  const [title, setTitle] = useState(itemToEdit?.title || '');
  const [description, setDescription] = useState(itemToEdit?.description || '');
  const [image, setImage] = useState(itemToEdit?.image || null);
  const [date, setDate] = useState(itemToEdit?.date || new Date());
  const addTodo = useTodoStore(state => state.addTodo);
  const editTodo = useTodoStore(state => state.editTodo);
  const [open, setOpen] = useState(false);
  const navigation = useNavigation<any>();
  const handleAddTodo = () => {
    const updatedData = {title, description, image, date};

    if (index !== undefined) {
      editTodo(index, updatedData);
    } else {
      addTodo(updatedData);
    }

    // Reset the state
    setTitle('');
    setDescription('');
    setImage(null);
    setDate(new Date());
    setOpen(false);
    navigation.navigate('CurrentTodos');
  };
  const handleImageUpload = () => {
    const options = {
      mediaType: 'photo',
      maxWidth: 300,
      maxHeight: 300,
      quality: 1,
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response.assets);
      }
    });
  };
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.contanire}>
          <Text style={styles.heading}>Create Todo Lists</Text>
          <TextInput
            style={styles.InputText}
            editable
            placeholder="Title*"
            placeholderTextColor={'grey'}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <TextInput
            style={styles.InputText}
            editable
            placeholder="Description*"
            placeholderTextColor={'grey'}
            value={description}
            onChangeText={text => setDescription(text)}
          />
          <Text style={styles.heading}>Upload image</Text>

          <Image
            source={image}
            style={{
              width: 150,
              height: 150,
              marginTop: 20,
              borderColor: 'black',
              borderWidth: 2,
            }}
          />

          <TouchableOpacity onPress={handleImageUpload}>
            <Text style={styles.btnContainr}>Select Image</Text>
          </TouchableOpacity>
          <Text style={styles.heading}>
            Select a date and time for your reminder:
          </Text>
          <Button title="Opens" onPress={() => setOpen(true)} />
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          <Text style={{color: 'black', fontSize: 20}}>
            {date.toLocaleString()}
          </Text>
          <View style={{display: 'flex'}}>
            <TouchableOpacity onPress={handleAddTodo}>
              <Text style={styles.btnContainr}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateTodos;
