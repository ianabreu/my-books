import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Container, Title, Price, Description, Input, CenterView, Button, ButtonText } from './styles';

export default function New() {
    return (
        <Container>
            <Title>Titulo</Title>
            <Input autoCapitalize='none' autoCorrect={false}/>

            <Title>Preço</Title>
            <Input autoCapitalize='none' autoCorrect={false}/>

            <Title>Descrição</Title>
            <Input autoCapitalize='none' autoCorrect={false}/>

            <CenterView>
                <Button>
                    <ButtonText>Cadastrar</ButtonText>
                </Button>

                <Button>
                    <ButtonText>Editar</ButtonText>
                </Button>
            </CenterView>
        </Container>
    );
}