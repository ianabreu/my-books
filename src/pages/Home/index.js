import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import {Container, Logo, ButtonAdd, ButtonAddText} from './styles';
import { useNavigation} from '@react-navigation/native';

import getRealm from '../../services/realm';

import Book from '../../components/Book';

export default function Home() {
  const navigation = useNavigation();
  const data = [
    { id: 1,
      title: 'A Roda do Tempo',
      serie: 'A Ascenção da Sombra',
      author: 'Robert Jordan',
      vol: 1,
      price: 59.99,
      description: 'Em A ascensão da sombra, Jordan imprime ainda mais suspense à série trazendo uma ameaça até então desconhecida à cidade de Tar Valon, lar das poderosas Aes Sedai. Mergulhados no perigo constante representado pelos Mantos-brancos, os Amigos das Trevas e os Trollocs, entre outros inimigos mortais, ninguém está seguro de qual rumo seguir. Movimentos profundos e inesperados que fazem de A Roda do Tempo uma das mais extraordinárias séries já escritas.',
    },
    { id: 2,
      title: 'Conjurador',
      serie: 'O Aprendiz',
      author: 'Taran Matharu',
      vol: 1,
      price: 29.99,
      description: 'Em A ascensão da sombra, Jordan imprime ainda mais suspense à série trazendo uma ameaça até então desconhecida à cidade de Tar Valon, lar das poderosas Aes Sedai. Mergulhados no perigo constante representado pelos Mantos-brancos, os Amigos das Trevas e os Trollocs, entre outros inimigos mortais, ninguém está seguro de qual rumo seguir. Movimentos profundos e inesperados que fazem de A Roda do Tempo uma das mais extraordinárias séries já escritas.',
    },
];

  return (
    <Container>
      <Logo>Minha Biblioteca</Logo>
      <FlatList 
      style={{ padding: 5}}
      data={data}
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