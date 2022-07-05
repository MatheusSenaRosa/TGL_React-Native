import styled from "styled-components/native";

export const Container = styled.View`
  margin-top: 40px;
  width: 230px;
  align-items: center;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 22px;
  font-style: italic;
  color: #707070;

  margin-bottom: 10px;
`;

export const FormElement = styled.View`
  box-shadow: 0px 3px 25px #00000014;
  border: 1px solid #dddddd;
  border-radius: 14px;

  width: 100%;
  height: 200px;
`;

export const Submit = styled.View`
  margin-top: auto;
  height: 45px;
  border: 1px solid red;
  border-bottom-right-radius: 14px;
  border-bottom-left-radius: 14px;

  justify-content: center;
`;

export const SubmitText = styled.Text`
  text-align: center;
  font-weight: bold;
  font-size: 22px;
  font-style: italic;
  color: #b5c401;
`;
