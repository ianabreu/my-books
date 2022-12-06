import styled from "styled-components/native";
/*
cores:
#658695 
#f2f2f3 branco
#18475a 
#a9acaa texto
#a0715a
#60b79b
*/ 


export const Container = styled.KeyboardAvoidingView`
flex: 1;
background-color: #f2f2f3;
padding-top: 15px;
padding-left: 15px;
padding-right: 15px;
`;

export const Input = styled.TextInput.attrs({
    autoCapitalize: 'none', 
    autoCorrect: false,
    elevation: 2,
})`
height: 40px;
background-color: #fff;
border-radius: 5px;
padding: 5px;
font-size: 16px;
color: #2b373e;
`;

export const Title = styled.Text`
color: #2b373e;
font-size: 20px;
margin-top: 10px;
margin-bottom: 5px;
`;

export const CenterView = styled.View`
margin-top: 10px;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

export const Button = styled.TouchableOpacity`
background-color: #18475a;
height: 40px;
width: 40%;
padding: 5px;
border-radius: 100px;
justify-content: center;
`;

export const ButtonText = styled.Text`
color: #f2f2f3;
font-size: 17px;
text-align: center;
`;

export const Description = styled.TextInput.attrs({
    elevation: 2,
})`
height: 40px;
background-color: #fff;
border-radius: 5px;
padding: 5px;
font-size: 16px;
color: #2b373e;
`;



