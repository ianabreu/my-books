import styled from "styled-components/native";

export const BookArea = styled.View.attrs({
    elevation: 2,
})`
flex-direction: column;
background-color: #FFF;
padding: 5px;
margin-bottom: 15px;
border-radius: 5px;
`;

export const Title = styled.Text.attrs({
    numberOfLines: 2,
})`
font-size: 20px;
font-weight: bold;
`;
export const Subtitle = styled.Text`
font-size: 18px;
font-weight: bold;
`;

export const Vol = styled.Text`
font-style: italic;
font-size: 15px;
`;
export const Author = styled.Text`
font-size: 15px;

`;
export const Price = styled.Text`
font-style: italic;
font-size: 19px;

`;
export const ButtonArea = styled.View`
flex-direction: row;
justify-content: flex-end;
margin-top: 15px;
`;
export const Button = styled.TouchableOpacity`
background-color: #dddddd;
padding: 5px;
margin-left: 15px;
border-radius: 5px;
`;
export const ButtonText = styled.Text`
font-size: 16px;

`;