import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Form } from "../Form";
import * as S from "./styles";

type Props = {
  children: JSX.Element;
};

export const AuthScreen = ({ children }: Props) => {
  return (
    <S.Container>
      <KeyboardAwareScrollView>
        <S.Teste>
          <S.Logo>
            <S.Title>The Greatest App</S.Title>
            <S.GreenWrapper>
              <S.MiddleText>for</S.MiddleText>
            </S.GreenWrapper>
            <S.Title>LOTTERY</S.Title>
          </S.Logo>

          <Form>{children}</Form>
        </S.Teste>
      </KeyboardAwareScrollView>
    </S.Container>
  );
};
