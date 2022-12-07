import React, { useContext, useState } from 'react';
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native';
import {Container, Logo, ButtonAdd, ButtonAddText} from './styles';
import { CommonActions, useNavigation} from '@react-navigation/native';

import Book from '../../components/Book';
import { BookContext } from '../../contexts/BookContext';

export default function Home() {
  const navigation = useNavigation();

  const { books, removeBook } = useContext(BookContext);

  function editBook(data) {
    navigation.navigate('New', {
      data: data,
    })
  }
  function handleDeleteBook(data) {
    Alert.alert(`${data.serie} - ${data.title}`,'Tem certeza que deseja excluir este livro?', [
      {
        text: 'Cancelar',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Quero',
        onPress: () => { removeBook(data.id) },
        style:'default',
      },
    ], { cancelable: true })
  }

  return (
    <Container>
      <Logo>Meus Livros</Logo>
      <FlatList 
      style={{ padding: 5}}
      data={books}
      keyExtractor={item => String(item.id)}
      renderItem={({item}) => (<Book data={item} edit={editBook} deleteBook={handleDeleteBook}/>)}
      showsVerticalScrollIndicator={false}
      />

      <ButtonAdd onPress={() => navigation.navigate('New')}>
        <ButtonAddText>+</ButtonAddText>
      </ButtonAdd>
    </Container>
  );
}