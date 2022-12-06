import React, {useState} from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Container, Title, Description, Input, CenterView, Button, ButtonText } from './styles';

export default function New() {
    const [book, setBook] = useState({
        title: '',
        serie: '',
        author: '',
        vol: '',
        price: '',
        description: '',
    })
    return (
        <ScrollView>

            <Container>
                <Title>Titulo</Title>
                <Input placeholder='Título do livro' value={book.title} onChangeText={(text) => {setBook(text)}}/>

                <Title>Série</Title>
                <Input placeholder='Série de livros' value={book.serie} onChangeText={(text) => {setBook(text)}}/>

                <Title>Autor</Title>
                <Input  placeholder='Autor' value={book.author} onChangeText={(text) => {setBook(text)}}/>

                <View style={{ flexDirection: 'row',  width: '100%', justifyContent:'space-between' }}>

                    <View style={{ flexDirection: 'column', width:'45%' }}>
                        <Title>Volume</Title>
                        <Input placeholder='1' value={book.vol} onChangeText={(text) => {setBook(text)}}/>
                    </View>

                    <View style={{ flexDirection: 'column', width:'45%' }}>
                        <Title>Preço</Title>
                        <Input placeholder='R$ 0.00' value={book.price} onChangeText={(text) => {setBook(text)}}/>
                    </View>
                </View>

                <Title>Descrição</Title>
                <Description placeholder='Descrição do livro...' value={book.description} onChangeText={(text) => {setBook(text)}}/>

                <CenterView>
                    <Button>
                        <ButtonText>Cadastrar</ButtonText>
                    </Button>

                    <Button>
                        <ButtonText>Editar</ButtonText>
                    </Button>
                </CenterView>
            </Container>
        </ScrollView>
    );
}