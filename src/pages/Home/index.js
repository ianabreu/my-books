import React, { useContext } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import {Container, Logo, ButtonAdd, ButtonAddText} from './styles';
import { useNavigation} from '@react-navigation/native';

import Book from '../../components/Book';
import { BookContext } from '../../contexts/BookContext';

export default function Home() {
  const navigation = useNavigation();
  const { books } = useContext(BookContext);

  return (
    <Container>
      <Logo>Minha Biblioteca</Logo>
      <FlatList 
      style={{ padding: 5}}
      data={books}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (<Book data={item}/>)}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps='handled'
      />

      <ButtonAdd onPress={() => navigation.navigate('New')}>
        <ButtonAddText>+</ButtonAddText>
      </ButtonAdd>
    </Container>
  );
}