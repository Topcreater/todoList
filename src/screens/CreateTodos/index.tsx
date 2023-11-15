import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Button,
  Alert,
} from 'react-native';
import {styles} from './styles';
import {useTodoStore} from '../../store/dataStore';
import {useRoute} from '@react-navigation/native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import {useNavigation} from '@react-navigation/native';
interface TodoItem {
  title: string;
  description: string;
  image: any | null;
  date: Date;
}
const CreateTodos = () => {
  const route = useRoute<any>();
  const {index, itemToEdit} = route.params || {};
  const [title, setTitle] = useState(itemToEdit?.title || '');
  const [description, setDescription] = useState(itemToEdit?.description || '');
  const [image, setImage] = useState(itemToEdit?.image || null);
  const [date, setDate] = useState(itemToEdit?.date || new Date());
  const addTodo = useTodoStore((state: any) => state.addTodo);
  const editTodo = useTodoStore((state: any) => state.editTodo);
  const [open, setOpen] = useState(false);
  const navigation = useNavigation<any>();
  const handleAddTodo = () => {
    if (!title || !description || !date || !image) {
      Alert.alert('Incomplete Data', 'Please fill in all required fields.');
      return;
    }
    const currentDate = new Date();
    if (date < currentDate) {
      Alert.alert('Invalid Date', 'Please select a future date and time.');
      return;
    }
    const updatedData = {title, description, image, date};
    if (index !== undefined) {
      editTodo(index, updatedData);
    } else {
      addTodo(updatedData);
    }

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
          <Text style={styles.label}>What is to be done?</Text>
          <TextInput
            style={styles.InputText}
            editable
            placeholder="Title*"
            placeholderTextColor={'grey'}
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <Text style={styles.label}>Describ your plan?</Text>
          <TextInput
            style={styles.InputText}
            editable
            placeholder="Description*"
            placeholderTextColor={'grey'}
            value={description}
            onChangeText={text => setDescription(text)}
          />
          <Text style={styles.label}>Upload image</Text>
          <TouchableOpacity onPress={handleImageUpload}>
            {image ? (
              <Image source={image} style={styles.UploadImage} />
            ) : (
              <Text style={styles.UploadImage}>No Image Selected</Text>
            )}
          </TouchableOpacity>

          <Text style={styles.label}>Due date</Text>
          <TouchableOpacity onPress={() => setOpen(true)}>
            <Text style={styles.DateText}>
              {date ? date.toLocaleString() : ' Date not set'}
            </Text>
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
          </TouchableOpacity>
          <Text style={styles.label}>No Notification if date not set</Text>
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
