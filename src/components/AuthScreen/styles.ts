import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #f7f7f7;

  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  align-items: center;
`;

export const Logo = styled.View`
  width: 210px;

  align-items: center;
`;

export const Title = styled.Text`
  color: #707070;
  font-size: 50px;
  font-style: italic;

  font-weight: bold;
  text-align: center;
`;

export const GreenWrapper = styled.View`
  margin: 10px 0 6px 0;
  border-radius: 15px;
  background-color: #b5c401;

  width: 95px;
  height: 28px;

  justify-content: center;
  align-items: center;
`;

export const MiddleText = styled.Text`
  font-size: 18px;
  font-style: italic;
  font-weight: bold;
  color: white;
`;
