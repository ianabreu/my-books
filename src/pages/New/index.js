import React, {useState, useContext, useEffect} from 'react';
import { Keyboard, ScrollView, View, ToastAndroid } from 'react-native';
import { Container, Title, Description, Input, CenterView, Button, ButtonText } from './styles';
import { BookContext } from '../../contexts/BookContext';
import { useNavigation } from '@react-navigation/native';

export default function New({route}) {
    const navigation = useNavigation();
    const {saveBook, editBook} = useContext(BookContext);

    const isEditing = route?.params?.data;

    const [title, setTitle] = useState('');
    const [serie, setSerie] = useState('');
    const [author, setAuthor] = useState('');
    const [vol, setVol] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    
    useEffect(() => {
        function editInformations() {
            if(isEditing) {
              setTitle(isEditing.title);
              setSerie(isEditing.serie);
              setAuthor(isEditing.author);
              setVol(isEditing.vol);
              setPrice(isEditing.price);
              setDescription(isEditing.description);
            }
        }
        editInformations();
    }, [])

    async function addBook() {
        if (title === '' || serie === '' || author === '' || vol === '' || price === '' || description === '') {
           alert('Preençha todos os campos!');
           return; 
        }
        try {
            const data = {
                title: title,
                serie: serie,
                author: author,
                vol: vol,
                price: price,
                description: description,
            };
            await saveBook(data);
            setTitle('');
            setSerie('');
            setAuthor('');
            setVol('');
            setPrice('');
            setDescription(''); 
            Keyboard.dismiss();
            ToastAndroid.showWithGravity(
                "Livro cadastrado com sucesso",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
              );
        } catch (error) {
            alert(error)
        }
        
    }
    async function handleEditBook() {
        if (title === '' || serie === '' || author === '' || vol === '' || price === '' || description === '') {
            alert('Preençha todos os campos!');
            return; 
         }
         try {
            const response = {
                id: isEditing.id,
                title: title,
                serie: serie,
                author: author,
                vol: vol,
                price: price,
                description: description,
            };
            await editBook(response);
            ToastAndroid.showWithGravity(
                "Livro editado com sucesso",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM
              );
            navigation.navigate('Home');
        } catch (error) {
            alert(error)
        }
         

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
                    {isEditing ? (
                    <Button onPress={handleEditBook}>
                        <ButtonText>Editar</ButtonText>
                    </Button>) :
                    (
                    <Button onPress={addBook}>
                        <ButtonText>Cadastrar</ButtonText>
                    </Button>
                    )}

                </CenterView>
            </Container>
        </ScrollView>
    );
}