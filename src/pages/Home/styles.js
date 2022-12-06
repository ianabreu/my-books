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

export const Container = styled.View`
flex: 1;
background-color: #f2f2f3;
padding-top: 20px;
padding-left: 15px;
padding-right: 15px;
`;

export const Logo = styled.Text`
margin-bottom: 15px;
text-align: center;
font-weight: bold;
font-size: 35px;
color: #18475a;
`;
export const ButtonAdd = styled.TouchableOpacity`
position: absolute;
bottom: 15px;
right: 15px;
background-color: #18475a;
width: 70px;
height: 70px;
border-radius: 35px;
justify-content: center;
`;
export const ButtonAddText = styled.Text`
text-align: center;
line-height: 40px;
font-size: 35px;
color: #f2f2f3;
`;