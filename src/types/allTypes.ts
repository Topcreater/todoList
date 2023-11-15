import {ImageSourcePropType} from 'react-native';

export interface CardType {
  item: {
    title: string;
    description: string;
    date: Date;
    image: ImageSourcePropType;
  };
  index: number;
  handleDeleteTodo: (index: number) => void;
  handleEditTodo: (index: number) => void;
  handleAddTodo: (item: any, index: number) => void;
  fileType: string;
}
