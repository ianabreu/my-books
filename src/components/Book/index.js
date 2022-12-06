import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import {
    BookArea,
    BookInfo,
    Title,
    Subtitle,
    Vol,
    Author,
    Price,
    ButtonArea,
    Button,
    ButtonText,
    
} from './styles';

export default function Book({ data }) {
    return (
        <BookArea>
                <Title>{data.title}</Title>
                <Subtitle>{data.serie}</Subtitle>
                <Vol>Vol: {data.vol}</Vol>
                <Author>Autor: {data.author}</Author>
                <Price>R$ {data.price}</Price>

                <ButtonArea>
                    <Button onPress={() => {}}>
                        <ButtonText>Editar</ButtonText>
                    </Button>

                    <Button onPress={() => {}}>
                        <ButtonText>Excluir</ButtonText>
                    </Button>
                </ButtonArea>
        </BookArea>
    );
}