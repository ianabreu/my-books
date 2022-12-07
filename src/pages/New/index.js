import React, {useState, useContext} from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Title, Description, Input, CenterView, Button, ButtonText } from './styles';
import { BookContext } from '../../contexts/BookContext';

export default function New() {
    const {saveBook} = useContext(BookContext);

    const [title, setTitle] = useState('');
    const [serie, setSerie] = useState('');
    const [author, setAuthor] = useState('');
    const [vol, setVol] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    async function addBook() {
        if (title === '' || serie === '' || author === '' || vol === '' || price === '' || description === '') {
           alert('Preençja todos os campos!');
           return; 
        }
        const data = {
            title: title,
            serie: serie,
            author: author,
            vol: vol,
            price: price,
            description: description,
        };
        await saveBook(data)
    }

    return (
        <ScrollView>

            <Container>
                <Title>Titulo</Title>
                <Input placeholder='Título do livro' value={title} onChangeText={text => setTitle(text)}/>

                <Title>Série</Title>
                <Input placeholder='Série de livros' value={serie} onChangeText={text => setSerie(text)}/>

                <Title>Autor</Title>
                <Input  placeholder='Autor' value={author} onChangeText={text => setAuthor(text)}/>

                <View style={{ flexDirection: 'row',  width: '100%', justifyContent:'space-between' }}>

                    <View style={{ flexDirection: 'column', width:'45%' }}>
                        <Title>Volume</Title>
                        <Input placeholder='1' value={vol} onChangeText={text => setVol(text)}/>
                    </View>

                    <View style={{ flexDirection: 'column', width:'45%' }}>
                        <Title>Preço</Title>
                        <Input placeholder='R$ 0.00' value={price} onChangeText={text => setPrice(text)}/>
                    </View>
                </View>

                <Title>Descrição</Title>
                <Description placeholder='Descrição do livro...' value={description} onChangeText={text => setDescription(text)}/>

                <CenterView>
                    <Button onPress={addBook}>
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