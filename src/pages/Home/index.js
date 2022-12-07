import React, { useContext, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import {Container, Logo, ButtonAdd, ButtonAddText} from './styles';
import { CommonActions, useNavigation} from '@react-navigation/native';

import Book from '../../components/Book';
import { BookContext } from '../../contexts/BookContext';

export default function Home() {
  const navigation = useNavigation();

  const { books } = useContext(BookContext);

  function editBook(data) {
    navigation.navigate('New', {
      data: data,
    })
  }

  return (
    <Container>
      <Logo>Minha Biblioteca</Logo>
      <FlatList 
      style={{ padding: 5}}
      data={books}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (<Book data={item} edit={editBook}/>)}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps='handled'
      />

      <ButtonAdd onPress={() => navigation.navigate('New')}>
        <ButtonAddText>+</ButtonAddText>
      </ButtonAdd>
    </Container>
  );
}