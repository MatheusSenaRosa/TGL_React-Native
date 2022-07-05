import { TouchableNativeFeedback } from "react-native";
import * as S from "./styles";

type Props = {
  children: JSX.Element;
};

export const Form = ({ children }: Props) => {
  return (
    <S.Container>
      <S.Title>Authentication</S.Title>

      <S.FormElement>
        {children}
        <TouchableNativeFeedback>
          <S.Submit>
            <S.SubmitText>Log In</S.SubmitText>
          </S.Submit>
        </TouchableNativeFeedback>
      </S.FormElement>
    </S.Container>
  );
};
